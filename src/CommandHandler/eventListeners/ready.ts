import { EventListener } from '../../@types';

export const ready: EventListener<'ready'> = {
  name: 'ready',
  once: true,
  handler: async (commandHandler, interaction) => {
    console.log(
      `${interaction.user.tag} is online in a ${process.env.NODE_ENV} environment.`
    );
  },
};
