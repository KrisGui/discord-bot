import {
  ChatInputApplicationCommandData,
  ChatInputCommandInteraction,
  CommandInteractionOptionResolver,
} from 'discord.js';
import { CommandHandler } from '../CommandHandler';

export interface CommandExecutionProps {
  commandHandler: CommandHandler;
  interaction: ChatInputCommandInteraction;
  commandArgs?: CommandInteractionOptionResolver;
}

export interface Command extends ChatInputApplicationCommandData {
  execute: (props: CommandExecutionProps) => Promise<void>;
}
