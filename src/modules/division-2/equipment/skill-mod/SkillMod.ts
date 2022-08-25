import type { SkillNamesKey, SkillSlotsKey } from '../skill/types';
import {
  SkillModAttribute,
  SkillModAttributeInputValues,
  SkillModAttributeStaticValues,
  skillModAttributeStaticValuesMap,
  SkillModName,
  skillModNames,
} from './constants';

interface SkillModInput<
  T extends SkillNamesKey,
  U extends SkillSlotsKey<T>
> {
  skill: T;
  slot: U;
  name: SkillModName<T, U>;
  attribute: SkillModAttributeInputValues<T, U>;
}

interface SkillModProps<
  T extends SkillNamesKey,
  U extends SkillSlotsKey<T>
> {
  name: SkillModName<T, U>;
  //   attribute: SkillModAttributeInputValues<T, U> &
  //     SkillModAttributeStaticValues<
  //       T,
  //       U,
  //       SkillModInput<T, U>['attribute']['name']
  //     >;
}

export class SkillMod<T extends SkillNamesKey, U extends SkillSlotsKey<T>> {
  #name: SkillModName<T, U>;
  #attribute: SkillModAttribute<T, U, SkillModInput<T, U>['attribute']['name']>;

  private constructor({ name, attribute }: SkillModProps<T, U>) {
    this.#name = name;
    this.#attribute = attribute;
  }

  static instantiate<T extends SkillNamesKey, U extends SkillSlotsKey<T>>({
    skill,
    slot,
    name,
    attribute,
  }: SkillModInput<T, U>): SkillMod<T, U> {
    if (!this.#isValidModName) {
      throw new Error('invalid mod name');
    }

    const attributeReconciled = {
      ...attribute,
      ...skillModAttributeStaticValuesMap[skill],
    };

    return new SkillMod({ name, attribute: attributeReconciled });
  }

  static #isValidModName<
    T extends SkillNamesKey,
    U extends SkillSlotsKey<T>
  >(
    nameCandidate: string | number | symbol,
    skill: T,
    slot: U
  ): nameCandidate is SkillModName<T, U> {
    return (
      (nameCandidate as SkillModName<T, U>) in skillModNames[skill][slot]
    );
  }

  get name() {
    return this.#name;
  }

  get attribute() {
    return this.#attribute;
  }
}

// const testMod = SkillMod.instantiate({
//   skill: 'Chem Launcher',
//   slot: 'Agitator',
//   name: 'Cell Penetrating Peptide',
//   attribute: { name: 'Burn Strength', value: 1 },
// });
