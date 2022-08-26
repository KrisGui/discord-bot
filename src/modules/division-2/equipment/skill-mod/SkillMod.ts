import type { SkillNamesKey } from '../skill/types';
import { skillModNames } from './constants/names';
import {
  SkillModInput,
  SkillModNames,
  SkillModNamesKey,
  SkillModProps,
} from './types';

export class SkillMod<
  SkillKey extends SkillNamesKey,
  SlotKey extends SkillModNamesKey<SkillKey>
> {
  #name: SkillModNames<SlotKey>;
  // #attribute: SkillModAttribute<SkillKey, SlotKey, SkillModInput<SkillKey, SlotKey>['attribute']['name']>;

  private constructor({ name /* , attribute */ }: SkillModProps<SlotKey>) {
    this.#name = name;
    // this.#attribute = attribute;
  }

  static instantiate<K extends SkillNamesKey, S extends SkillModNamesKey<K>>({
    skill,
    slot,
    name,
  }: /* attribute, */
  SkillModInput<S>): SkillMod<K, S> {
    if (!this.#isValidModName) {
      throw new Error('invalid mod name');
    }

    // const attributeReconciled = {
    //   ...attribute,
    //   ...skillModAttributeStaticValuesMap[skill],
    // };

    return new SkillMod({ name /* , attribute: attributeReconciled */ });
  }

  static #isValidModName<
    K extends SkillNamesKey,
    S extends SkillModNamesKey<K>
  >(
    nameCandidate: string,
    skill: K,
    slot: S
  ): nameCandidate is string & SkillModNames<S> {
    return (
      (nameCandidate as string & SkillModNames<S>) in skillModNames[skill][slot]
    );
  }

  get name() {
    return this.#name;
  }

  // get attribute() {
  //   return this.#attribute;
  // }
}
