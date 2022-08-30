import { SkillNameEnum } from '../constants';
import { SkillKeys } from '../types';

export class SkillName {
  #value: SkillNameEnum;

  private constructor(value: SkillNameEnum) {
    this.#value = value;
  }

  static assign(skillKey: SkillKeys): SkillName {
    if (!this.#isValidSkillName(skillKey)) {
      throw new Error('invalid skillKey');
    }

    const value = SkillNameEnum[skillKey];

    return new SkillName(value);
  }

  static #isValidSkillName(nameCandidate: string): nameCandidate is SkillKeys {
    return (nameCandidate as SkillKeys) in SkillNameEnum;
  }

  get value() {
    return this.#value;
  }
}
