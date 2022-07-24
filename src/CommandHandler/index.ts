import {
  ApplicationCommandDataResolvable,
  Client,
  ClientOptions,
  Collection,
  Snowflake,
} from 'discord.js';
import { Command, EventListenerType } from '../@types';
import * as commandFiles from './commands';
import * as eventFiles from './eventListeners';

export class CommandHandler extends Client {
  public commands: Collection<string, Command> = new Collection();

  constructor(options: ClientOptions) {
    super(options);
  }

  start() {
    this.registerEvents();
    this.registerCommands();
    this.login();
  }

  private registerEvents() {
    const events: EventListenerType[] = Object.values(eventFiles);

    events.forEach((event) => {
      if (event.once) {
        this.once(event.name, (...args) =>
          event.handler(this, ...(args as any))
        );
      } else {
        this.on(event.name, (...args) => event.handler(this, ...(args as any)));
      }
    });
  }

  private registerCommands() {
    const slashCommands: ApplicationCommandDataResolvable[] = [];
    const commandsData = Object.values(commandFiles);

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
      console.log(`Published ${commands.length} commands to ${guildId}.`);
    } else {
      this.application?.commands.set(commands);
      console.log(`Published ${commands.length} globally.`);
    }
  }
}
