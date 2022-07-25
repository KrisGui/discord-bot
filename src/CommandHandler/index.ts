import {
  ApplicationCommandDataResolvable,
  Client,
  ClientOptions,
  Collection,
  Snowflake,
} from 'discord.js';
import { Command } from '../@types';
import * as commandFiles from './commands';
import * as eventListenerFiles from './eventListeners';

export class CommandHandler extends Client {
  public commands: Collection<string, Command> = new Collection();
  public tempChannels: Collection<string, string[]> = new Collection();

  constructor(options: ClientOptions) {
    super(options);
  }

  start() {
    this.registerEventListeners();
    this.registerCommands();
    this.login();
  }

  private registerEventListeners() {
    const listeners = Object.values(eventListenerFiles);

    listeners.forEach((event) => {
      if (event.once) {
        this.once(event.name, (...args) => event.handler(...(args as any)));
      } else {
        this.on(event.name, (...args) => event.handler(...(args as any)));
      }
    });
  }

  private registerCommands() {
    const commandsData = Object.values(commandFiles);

    const slashCommands: ApplicationCommandDataResolvable[] = [];

    commandsData.forEach((command) => {
      this.commands.set(command.name, command);
      slashCommands.push(command);
    });

    this.on('ready', () =>
      this.publishCommands(slashCommands, process.env.TEST_GUILD_ID!)
    );
  }

  private publishCommands(
    commands: ApplicationCommandDataResolvable[],
    guildId: Snowflake | undefined
  ) {
    if (guildId) {
      this.guilds.cache.get(guildId)?.commands.set(commands);
      console.log(
        `Published ${commands.length} commands to guildId: ${guildId}.`
      );
    } else {
      this.application?.commands.set(commands);
      console.log(`Published ${commands.length} globally.`);
    }
  }
}
