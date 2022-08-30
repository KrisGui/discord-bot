import type { skillVariants } from '../constants';
import type { SkillKeys } from '../types';

export type SkillVariantsMap = {
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

export type SkillVariantKeys<K extends SkillKeys> = string &
  keyof SkillVariantsMap[K];
