import { skillVariants } from '../constants';
import { SkillKeys, SkillVariantKeys, SkillVariantsMap } from '../types';

export class SkillVariant<SkillKey extends SkillKeys> {
  #name: SkillVariantsMap[SkillKey][SkillVariantKeys<SkillKey>]['name'];
  #attributes: SkillVariantsMap[SkillKey][SkillVariantKeys<SkillKey>]['attributes'];

  private constructor(
    variant: SkillVariantsMap[SkillKey][SkillVariantKeys<SkillKey>]
  ) {
    this.#name = variant.name;
    this.#attributes = variant.attributes;
  }

  static assign<K extends SkillKeys>(
    skillKey: K,
    variantKey: SkillVariantKeys<K>
  ): SkillVariant<K> {
    if (!this.#isValidVariant(variantKey, skillKey)) {
      throw new Error('invalid variantKey');
    }

    const variant = skillVariants[skillKey][variantKey];

    return new SkillVariant(variant);
  }

  static #isValidVariant<K extends SkillKeys>(
    variantCandidate: string,
    skill: K
  ): variantCandidate is SkillVariantKeys<K> {
    return (variantCandidate as SkillVariantKeys<K>) in skillVariants[skill];
  }

  get name() {
    return this.#name;
  }

  get attributes() {
    return this.#attributes;
  }
}
