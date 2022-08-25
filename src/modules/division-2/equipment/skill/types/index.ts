import type { SkillMod } from '../../skill-mod/SkillMod';
import type { skillNames, skillSlots, skillVariants } from '../constants';

export type SkillNamesKey = keyof typeof skillNames;

export type SkillName<K extends SkillNamesKey> = typeof skillNames[K];

export type SkillVariants = {
  [Skill in keyof typeof skillVariants]: {
    [Variant in string &
      keyof typeof skillVariants[Skill]]: typeof skillVariants[Skill][Variant] extends {
      name: any;
      stats: any;
    }
      ? {
          readonly name: typeof skillVariants[Skill][Variant]['name'];
          readonly stats: typeof skillVariants[Skill][Variant]['stats'];
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
          mod: SkillMod<Skill, Slot> | null;
        }
      : never;
  };
};

export type SkillSlotsKey<K extends SkillNamesKey> = string &
  keyof SkillSlots[K];

export interface SkillProps<K extends SkillNamesKey> {
  name: K;
  variant: SkillVariantsKey<K>;
}
