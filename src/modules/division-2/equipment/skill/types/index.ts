import type { SkillMod } from '../../skill-mod/types';
import type { skillNames, skillSlots, skillVariants } from '../constants';

export type SkillNames = {
  readonly [Skill in string &
    keyof typeof skillNames]: typeof skillNames[Skill];
};

export type SkillNamesKey = string & keyof SkillNames;

export type SkillVariants = {
  readonly [Skill in string & keyof typeof skillVariants]: {
    readonly [Variant in string &
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
