import { ClientEvents } from 'discord.js';

export interface EventListener<K extends keyof ClientEvents> {
  name: K;
  once?: boolean;
  handler: (...args: ClientEvents[K]) => Promise<void>;
}
