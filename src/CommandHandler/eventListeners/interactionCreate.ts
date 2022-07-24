import { EventListener } from '../../@types';

export const interactionCreate: EventListener<'interactionCreate'> = {
  name: 'interactionCreate',
  handler: async ({ commandHandler, eventArgs }) => {
    const [interaction] = eventArgs;

    if (!interaction.isChatInputCommand()) return;

    const command = commandHandler.commands.get(interaction.commandName);

    if (!command) {
      await interaction.reply({ content: 'Invalid command', ephemeral: true });
    }

    try {
      await command?.execute({ commandHandler, interaction });

      console.log(
        `${interaction.user.tag} invoked '${interaction.commandName}' in ${interaction.channel}.`
      );
    } catch (err) {
      console.error(err);
      await interaction.reply({
        content: 'Something went wrong...',
        ephemeral: true,
      });
    }
  },
};
