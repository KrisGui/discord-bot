import { ClientEvents } from 'discord.js';
import { CommandHandler } from '../CommandHandler';
import * as eventFiles from '../CommandHandler/eventListeners';

export type EventListenerType = typeof eventFiles[keyof typeof eventFiles];

interface EventHandlerProps<EventName extends keyof ClientEvents> {
  eventArgs: ClientEvents[EventName];
  commandHandler: CommandHandler;
}

export interface EventListener<EventName extends keyof ClientEvents> {
  name: EventName;
  once?: boolean;
  handler: (props: EventHandlerProps<EventName>) => Promise<void>;
}
