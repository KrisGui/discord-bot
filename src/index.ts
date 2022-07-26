import 'dotenv/config';
import { Bot } from './Bot';

export const bot = new Bot({
  intents: ['Guilds', 'GuildMembers', 'GuildMessages', 'GuildVoiceStates'],
});

bot.start();
