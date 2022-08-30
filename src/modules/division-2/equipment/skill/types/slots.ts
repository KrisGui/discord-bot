import type { SkillMod } from '../../skill-mod/SkillMod';
import type { skillSlots } from '../constants';
import type { SkillKeys } from '../types';

export type SkillSlotsMap = {
  readonly [Skill in string & keyof typeof skillSlots]: {
    readonly [Slot in string &
      keyof typeof skillSlots[Skill]]: typeof skillSlots[Skill][Slot] extends {
      name: any;
      mod: any;
    }
      ? {
          readonly name: typeof skillSlots[Skill][Slot]['name'];
          mod: SkillMod<Skill, Slot> | null;
        }
      : never;
  };
};

export type SkillSlotKeys<K extends SkillKeys> = string &
  keyof SkillSlotsMap[K];

export type SkillSlotMod<
  K extends SkillKeys,
  S extends SkillSlotKeys<K>
> = SkillSlotsMap[K][S]['mod'];
