import { skillSlots } from '../constants';
import { SkillKeys, SkillSlotsMap } from '../types';

export class SkillSlots<SkillKey extends SkillKeys> {
  #slots: SkillSlotsMap[SkillKey];

  private constructor(slots: SkillSlotsMap[SkillKey]) {
    this.#slots = slots;
  }

  static assign<K extends SkillKeys>(skillKey: K): SkillSlots<K> {
    const slots = skillSlots[skillKey];

    return new SkillSlots(slots);
  }

  get slots() {
    return this.#slots;
  }
}
