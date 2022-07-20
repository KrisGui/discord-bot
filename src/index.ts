import 'dotenv/config';
import Bot from './bot';

const bot = new Bot({ intents: ['Guilds', 'GuildMessages'] });

bot.start();
