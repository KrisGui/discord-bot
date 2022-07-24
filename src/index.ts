import 'dotenv/config';
import { CommandHandler } from './CommandHandler';

export const bot = new CommandHandler({ intents: ['Guilds', 'GuildMessages'] });

bot.start();
