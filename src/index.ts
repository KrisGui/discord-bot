import 'dotenv/config';
import { CommandHandler } from './CommandHandler';

const bot = new CommandHandler({ intents: ['Guilds', 'GuildMessages'] });

bot.start();
