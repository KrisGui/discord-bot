import type { SkillNamesKey, SkillSlotsKey } from '../../skill/types';
import type { skillModNames } from '../constants';

export type { SkillMod } from '../SkillMod';

export type SkillModNames = {
  readonly [Skill in string & keyof typeof skillModNames]: {
    readonly [Slot in string &
      keyof typeof skillModNames[Skill]]: Slot extends SkillSlotsKey<Skill>
      ? string & keyof typeof skillModNames[Skill][Slot]
      : never;
  };
};

export type SkillModSlotsKey<K extends SkillNamesKey> = string &
  keyof typeof skillModNames[K];

export type SkillModName<
  K extends SkillNamesKey,
  S extends SkillSlotsKey<K> | SkillModSlotsKey<K>
> = S extends string & SkillModSlotsKey<K> ? SkillModNames[K][S] : never;

export interface SkillModInput<
  K extends SkillNamesKey,
  S extends SkillSlotsKey<K> | SkillModSlotsKey<K>
> {
  skill: K;
  slot: S;
  name: SkillModName<K, S>;
  // attribute: SkillModAttributeInputValues<K, S>;
}

export interface SkillModProps<
  K extends SkillNamesKey,
  S extends SkillSlotsKey<K> | SkillModSlotsKey<K>
> {
  name: SkillModName<K, S>;
  //   attribute: SkillModAttributeInputValues<K, S> &
  //     SkillModAttributeStaticValues<
  //       K,
  //       S,
  //       SkillModInput<K, S>['attribute']['name']
  //     >;
}
