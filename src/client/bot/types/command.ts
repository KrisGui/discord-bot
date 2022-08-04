import {
  ChatInputApplicationCommandData,
  ChatInputCommandInteraction,
  CommandInteractionOptionResolver,
} from 'discord.js';
import { Bot } from '..';

export interface CommandExecutionProps {
  commandHandler: Bot;
  interaction: ChatInputCommandInteraction;
  commandArgs?: CommandInteractionOptionResolver;
}

export interface Command extends ChatInputApplicationCommandData {
  execute: (props: CommandExecutionProps) => Promise<void>;
}
