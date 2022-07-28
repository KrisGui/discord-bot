import { ClientEvents } from 'discord.js';

export interface EventListener<K extends keyof ClientEvents> {
  name: K;
  once?: boolean;
  callback: (...args: ClientEvents[K]) => Promise<any>;
}
