import { EventListener } from '../../@types';

export const ready: EventListener<'ready'> = {
  name: 'ready',
  once: true,
  handler: async ({ eventArgs }) => {
    const [client] = eventArgs;

    console.log(
      `${client.user.tag} is online in a ${process.env.NODE_ENV} environment.`
    );
  },
};
