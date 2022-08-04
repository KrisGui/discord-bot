import { Command } from '../types';

export const ping: Command = {
  name: 'ping',
  description: 'Replies with WebSocket pong.',
  execute: async ({ interaction }) => {
    try {
      await interaction.reply({
        content: `WebSocket ping: ${interaction.client.ws.ping}ms`,
        ephemeral: true,
      });
    } catch (err) {
      console.error(err);
      await interaction.reply({
        content: 'Something went wrong...',
        ephemeral: true,
      });
    }
  },
};
