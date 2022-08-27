import type { SkillNamesKey, SkillSlotsKey } from '../skill/types';
import { skillModNames } from './constants/names';
import {
  SkillModInput,
  SkillModName,
  SkillModProps,
  SkillModSlotsKey,
} from './types';

export class SkillMod<
  SkillName extends SkillNamesKey,
  SlotName extends SkillSlotsKey<SkillName>
> {
  #props: SkillModProps<SkillName, SlotName>;
  #name: SkillModName<SkillName, SlotName>;
  // #attribute: SkillModAttribute<SkillName, SlotName, SkillModInput<SkillName, SlotName>['attribute']['name']>;

  private constructor({
    name /* , attribute */,
  }: SkillModProps<SkillName, SlotName>) {
    this.#props = { name };
    this.#name = name;
    // this.#attribute = attribute;
  }

  static instantiate<K extends SkillNamesKey, S extends SkillSlotsKey<K>>({
    skill,
    slot,
    name,
  }: SkillModInput<K, S>): SkillMod<K, S> {
    if (
      !this.#isValidModName(name, skill, slot as string as SkillModSlotsKey<K>)
    ) {
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
    S extends SkillModSlotsKey<K>
  >(
    nameCandidate: string,
    skill: K,
    slot: S
  ): nameCandidate is SkillModName<K, S> {
    return (nameCandidate as SkillModName<K, S>) in skillModNames[skill][slot];
  }

  get name() {
    return this.#name;
  }

  // get attribute() {
  //   return this.#attribute;
  // }
}
