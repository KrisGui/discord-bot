import { skillModAttributes } from '../constants';
import {
  SkillKeys,
  SkillModAttributesInput,
  SkillModAttributesMap,
  SkillModAttributesNameKeys,
  SkillModAttributesSlotKeys,
} from '../types';

export class SkillModAttribute<SkillKey extends SkillKeys> {
  #name: string;
  #value: number;
  #maxValue: number;
  #label: string;

  constructor(
    attribute: SkillModAttributesMap[SkillKey][SkillModAttributesSlotKeys<SkillKey>][SkillModAttributesNameKeys<
      SkillKey,
      SkillModAttributesSlotKeys<SkillKey>
    >]
  ) {
    this.#name = attribute.name;
    this.#value = attribute.value;
    this.#maxValue = attribute.maxValue;
    this.#label = attribute.label;
  }

  static assign<
    K extends SkillKeys,
    S extends SkillModAttributesSlotKeys<K>,
    A extends SkillModAttributesInput<K, S>
  >(skillKey: K, slotKey: S, attribute: A): SkillModAttribute<K> {
    if (!this.#isValidModAttributeName(attribute.name, skillKey, slotKey)) {
      throw new Error('invalid attributeName');
    }

    const modAttribute = {
      ...skillModAttributes[skillKey][slotKey][attribute.name],
      value: attribute.value,
    } as unknown as SkillModAttributesMap[K][SkillModAttributesSlotKeys<K>][SkillModAttributesNameKeys<
      K,
      SkillModAttributesSlotKeys<K>
    >];

    if (!this.#isValidModAttributeValue(modAttribute)) {
      throw new RangeError('invalid attributeValue');
    }

    return new SkillModAttribute(modAttribute);
  }

  static #isValidModAttributeName<
    K extends SkillKeys,
    S extends SkillModAttributesSlotKeys<K>
  >(
    nameCandidate: string,
    skillKey: K,
    slotKey: S
  ): nameCandidate is string & SkillModAttributesNameKeys<K, S> {
    return nameCandidate in skillModAttributes[skillKey][slotKey];
  }

  static #isValidModAttributeValue<
    K extends SkillKeys,
    S extends SkillModAttributesSlotKeys<K>,
    N extends SkillModAttributesNameKeys<K, S>
  >(attributeCandidate: SkillModAttributesMap[K][S][N]): boolean {
    return (
      attributeCandidate.value >= 0 &&
      attributeCandidate.value <= attributeCandidate.maxValue
    );
  }

  get name() {
    return this.#name;
  }

  get value() {
    return this.#label === '%'
      ? `${this.#value}${this.#label}`
      : `${this.#label}${this.#value}`;
  }

  get maxValue() {
    return this.#maxValue;
  }
}
