import { SkillKeys, SlotKeys } from '.';
import { skillModAttributes } from '../constants';

export type SkillModAttributesMap = {
  readonly [Skill in string & keyof typeof skillModAttributes]: {
    readonly [Slot in string &
      keyof typeof skillModAttributes[Skill]]: Slot extends keyof typeof skillModAttributes[Skill]
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

export type SkillModAttributesSlotKeys<K extends SkillKeys> = string &
  keyof typeof skillModAttributes[K];

export type SkillModAttributesNameKeys<
  K extends SkillKeys,
  S extends SkillModAttributesSlotKeys<K>
> = keyof typeof skillModAttributes[K][S];

export type SkillModAttributesInput<
  K extends SkillKeys,
  S extends SlotKeys<K>
> = S extends SkillModAttributesSlotKeys<K>
  ? { name: string & SkillModAttributesNameKeys<K, S>; value: number }
  : never;
