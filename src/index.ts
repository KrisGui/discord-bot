import 'dotenv/config';
import { Bot } from './client/bot';

export const bot = new Bot({
  intents: ['Guilds', 'GuildMembers', 'GuildMessages', 'GuildVoiceStates'],
});

bot.start();
