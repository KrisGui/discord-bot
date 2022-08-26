import type { SkillMod } from '../../skill-mod/SkillMod';
import { SkillModNames } from '../../skill-mod/types';
import type { skillNames, skillSlots, skillVariants } from '../constants';

export type SkillNamesKey = keyof typeof skillNames;

export type SkillName<K extends SkillNamesKey> = typeof skillNames[K];

export type SkillVariants = {
  [Skill in keyof typeof skillVariants]: {
    [Variant in string &
      keyof typeof skillVariants[Skill]]: typeof skillVariants[Skill][Variant] extends {
      name: any;
      attributes: any;
    }
      ? {
          readonly name: typeof skillVariants[Skill][Variant]['name'];
          readonly attributes: typeof skillVariants[Skill][Variant]['attributes'];
        }
      : never;
  };
};

export type SkillVariantsKey<K extends SkillNamesKey> = string &
  keyof SkillVariants[K];

export type SkillSlots = {
  [Skill in keyof typeof skillSlots]: {
    [Slot in string &
      keyof typeof skillSlots[Skill]]: typeof skillSlots[Skill][Slot] extends {
      name: any;
      mod: any;
    }
      ? {
          readonly name: typeof skillSlots[Skill][Slot]['name'];
          mod: SkillMod<Skill, SkillModNames<Slot>> | null; // ???
        }
      : never;
  };
};

export type SkillSlotsKey<K extends SkillNamesKey> = string &
  keyof SkillSlots[K];

export type SkillSlotMod<
  K extends SkillNamesKey,
  S extends SkillSlotsKey<K>
> = SkillSlots[K][S]['mod'];

export interface SkillProps<K extends SkillNamesKey> {
  name: K;
  variant: SkillVariantsKey<K>;
}
