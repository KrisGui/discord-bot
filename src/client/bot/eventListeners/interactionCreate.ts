import { EventListener } from '../../../lib/types';
import { bot } from '../../..';

export const interactionCreate: EventListener<'interactionCreate'> = {
  name: 'interactionCreate',
  callback: async (interaction) => {
    if (!interaction.isChatInputCommand()) return;

    const command = bot.commands.get(interaction.commandName);

    if (!command) {
      await interaction.reply({ content: 'Invalid command', ephemeral: true });
    }

    try {
      await command?.execute({ commandHandler: bot, interaction });

      console.log(
        `${interaction.user.tag} invoked '${interaction.commandName}' in ${interaction.channel}.`
      );
    } catch (err) {
      console.error(err);
      return await interaction.reply({
        content: 'Something went wrong...',
        ephemeral: true,
      });
    }
  },
};
