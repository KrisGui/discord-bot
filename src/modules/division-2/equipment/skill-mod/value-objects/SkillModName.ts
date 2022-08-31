import { skillModNames } from '../constants';
import { SkillKeys, SkillModNamesMap, SkillModNamesSlotKeys } from '../types';

export class SkillModName<SkillKey extends SkillKeys> {
  #value: SkillModNamesMap[SkillKey][SkillModNamesSlotKeys<SkillKey>];

  private constructor(
    value: SkillModNamesMap[SkillKey][SkillModNamesSlotKeys<SkillKey>]
  ) {
    this.#value = value;
  }

  static assign<K extends SkillKeys, S extends SkillModNamesSlotKeys<K>>(
    skillKey: K,
    slotKey: S,
    modName: string & SkillModNamesMap[K][S]
  ): SkillModName<K> {
    if (!this.#isValidModName(modName, skillKey, slotKey)) {
      throw new Error('invalid modName');
    }

    return new SkillModName(modName);
  }

  static #isValidModName<
    K extends SkillKeys,
    S extends SkillModNamesSlotKeys<K>
  >(
    nameCandidate: string,
    skillKey: K,
    slotKey: S
  ): nameCandidate is string & SkillModNamesMap[K][S] {
    return nameCandidate in skillModNames[skillKey][slotKey];
  }

  get value() {
    return this.#value;
  }
}
