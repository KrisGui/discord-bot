import { EventListener } from '../../../lib/types';

export const ready: EventListener<'ready'> = {
  name: 'ready',
  once: true,
  callback: async (client) => {
    console.log(
      `${client.user.tag} is online in a ${process.env.NODE_ENV} environment.`
    );
  },
};
