import { REST } from '@discordjs/rest';
import { Client, GatewayIntentBits, Routes } from 'discord.js';
import dotenv from 'dotenv';

dotenv.config();

const rest = new REST().setToken(`${process.env.TOKEN}`);

const commands = [
  {
    name: 'ping',
    description: 'Replies with "pong"',
  },
];

const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages],
});

client.once('ready', async () => {
  console.log(`${client.user?.tag} is online!`);

  try {
    console.log(`Refreshing slash commands for guildId: ${process.env.TEST_GUILD_ID}`);

    await rest.put(
      Routes.applicationGuildCommands(
        `${process.env.APPLICATION_ID}`,
        `${process.env.TEST_GUILD_ID}`
      ),
      { body: commands }
    );
  } catch (err) {
    console.error(err);
  }
});

client.on('interactionCreate', async (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === 'ping') {
    await interaction.reply('pong');
  }
});

client.login(process.env.TOKEN);
