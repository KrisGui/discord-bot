import type { SkillNamesKey, SkillSlotsKey } from '../../skill/types';
import type { skillModAttributes, skillModNames } from '../constants';

export type { SkillMod } from '../SkillMod';
export type { SkillNamesKey };

export type SkillModNames = {
  readonly [Skill in string & keyof typeof skillModNames]: {
    readonly [Slot in string &
      keyof typeof skillModNames[Skill]]: Slot extends keyof typeof skillModNames[Skill]
      ? string & keyof typeof skillModNames[Skill][Slot]
      : never;
  };
};

export type SkillModNamesSlotsKey<K extends SkillNamesKey> = string &
  keyof typeof skillModNames[K];

export type SkillModName<
  K extends SkillNamesKey,
  S extends SlotsKey<K>
> = S extends string & SkillModNamesSlotsKey<K> ? SkillModNames[K][S] : never;

export type SkillModAttributes = {
  readonly [Skill in string & keyof typeof skillModAttributes]: {
    readonly [Slot in string &
      keyof typeof skillModAttributes[Skill]]: Slot extends SlotsKey<Skill>
      ? {
          readonly [Attribute in string &
            keyof typeof skillModAttributes[Skill][Slot]]: typeof skillModAttributes[Skill][Slot][Attribute] extends {
            name: any;
            maxValue: any;
            label: any;
          }
            ? {
                readonly name: typeof skillModAttributes[Skill][Slot][Attribute]['name'];
                readonly value: number;
                readonly maxValue: typeof skillModAttributes[Skill][Slot][Attribute]['maxValue'];
                readonly label: typeof skillModAttributes[Skill][Slot][Attribute]['label'];
              }
            : never;
        }
      : never;
  };
};

export type SkillModAttributesSlotsKey<K extends SkillNamesKey> = string &
  keyof typeof skillModAttributes[K];

export type SkillModAttributesNamesKey<
  K extends SkillNamesKey,
  S extends string & SlotsKey<K>
> = S extends SkillModAttributesSlotsKey<K>
  ? keyof typeof skillModAttributes[K][S]
  : never;

export type SkillModAttribute<
  K extends SkillNamesKey,
  S extends SlotsKey<K>,
  A extends SkillModAttributesNamesKey<K, S>
> = S extends string & SkillModAttributesSlotsKey<K>
  ? SkillModAttributes[K][S][A]
  : never;

export type SlotsKey<K extends SkillNamesKey> = string &
  (SkillSlotsKey<K> | SkillModNamesSlotsKey<K> | SkillModAttributesSlotsKey<K>);

export interface SkillModProps<K extends SkillNamesKey, S extends SlotsKey<K>> {
  skill: K;
  slot: S;
  name: SkillModName<K, S>;
  attribute: { name: SkillModAttributesNamesKey<K, S>; value: number };
}
