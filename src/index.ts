import 'dotenv/config';
import { CommandHandler } from './CommandHandler';

export const bot = new CommandHandler({
  intents: ['Guilds', 'GuildMembers', 'GuildMessages', 'GuildVoiceStates'],
});

bot.start();
