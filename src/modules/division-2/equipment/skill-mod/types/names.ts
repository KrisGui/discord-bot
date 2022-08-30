import { SkillKeys, SlotKeys } from '.';
import { skillModNames } from '../constants';

export type SkillModNamesMap = {
  readonly [Skill in string & keyof typeof skillModNames]: {
    readonly [Slot in string &
      keyof typeof skillModNames[Skill]]: Slot extends keyof typeof skillModNames[Skill]
      ? string & keyof typeof skillModNames[Skill][Slot]
      : never;
  };
};

export type SkillModNamesSlotKeys<K extends SkillKeys> = string &
  keyof typeof skillModNames[K];

export type SkillModNames<
  K extends SkillKeys,
  S extends SlotKeys<K>
> = S extends string & SkillModNamesSlotKeys<K>
  ? SkillModNamesMap[K][S]
  : never;
