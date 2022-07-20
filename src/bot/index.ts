import { Client, ClientOptions } from 'discord.js';

export default class Bot extends Client {
  constructor(options: ClientOptions) {
    super(options);
  }

  start() {
    this.login();
  }
}
