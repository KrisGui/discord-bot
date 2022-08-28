import { skillModAttributes, skillModNames } from './constants';
import {
  SkillModAttribute,
  SkillModAttributesNamesKey,
  SkillModAttributesSlotsKey,
  SkillModName,
  SkillModNames,
  SkillModNamesSlotsKey,
  SkillModProps,
  SkillNamesKey,
  SlotsKey,
} from './types';

export class SkillMod<
  SkillName extends SkillNamesKey,
  SlotName extends SlotsKey<SkillName>
> {
  #name: SkillModNames[SkillName][SkillModNamesSlotsKey<SkillName>];
  #attribute: SkillModAttribute<
    SkillName,
    SlotName,
    SkillModAttributesNamesKey<SkillName, SlotName>
  >;

  private constructor({
    skill,
    slot,
    name,
    attribute,
  }: SkillModProps<SkillName, SlotName>) {
    this.#name = name;
    this.#attribute = {
      ...skillModAttributes[skill][
        slot as string as SkillModAttributesSlotsKey<SkillName>
      ][attribute.name],
      value: attribute.value,
    } as SkillModAttribute<
      SkillName,
      SlotName,
      SkillModAttributesNamesKey<SkillName, SlotName>
    >;
  }

  static instantiate<K extends SkillNamesKey, S extends SlotsKey<K>>({
    skill,
    slot,
    name,
    attribute,
  }: SkillModProps<K, S>): SkillMod<K, S> {
    if (
      !this.#isValidModName(
        name,
        skill,
        slot as string as SkillModNamesSlotsKey<K>
      )
    ) {
      throw new Error('invalid mod name');
    }

    // TODO: validate attribute

    return new SkillMod({ skill, slot, name, attribute });
  }

  static #isValidModName<
    K extends SkillNamesKey,
    S extends SkillModNamesSlotsKey<K>
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

  get attribute() {
    return this.#attribute;
  }
}

const testMod = SkillMod.instantiate({
  skill: 'chemLauncher',
  slot: 'agitator',
  name: 'Cell Penetrating Peptide',
  attribute: { name: 'burnStrength', value: 1 },
});
testMod.attribute
