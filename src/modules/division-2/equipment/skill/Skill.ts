import { skillNames, skillSlots, skillVariants } from './constants';
import type {
  SkillName,
  SkillNamesKey,
  SkillProps,
  SkillSlotMod,
  SkillSlots,
  SkillSlotsKey,
  SkillVariants,
  SkillVariantsKey,
} from './types';

export class Skill<SkillKey extends SkillNamesKey> {
  #name: SkillNamesKey;
  #nameDisplay: SkillName<SkillKey>;
  #variant: SkillVariants[SkillKey][SkillVariantsKey<SkillKey>];
  #slots: SkillSlots[SkillKey];

  private constructor({ name, variant }: SkillProps<SkillKey>) {
    this.#name = name;
    this.#nameDisplay = skillNames[name];
    this.#variant = skillVariants[name][variant];
    this.#slots = skillSlots[name];
  }

  static instantiate<T extends SkillNamesKey>({
    name,
    variant,
  }: SkillProps<T>): Skill<T> {
    if (!this.#isValidSkillName(name)) {
      throw new Error('invalid skill name');
    }

    if (!this.#isValidVariant(variant, name)) {
      throw new Error('invalid skill variant');
    }

    return new Skill<T>({ name, variant });
  }

  static #isValidSkillName(
    nameCandidate: string
  ): nameCandidate is SkillNamesKey {
    return (nameCandidate as SkillNamesKey) in skillNames;
  }

  static #isValidVariant<T extends SkillNamesKey>(
    variantCandidate: string,
    skill: T
  ): variantCandidate is SkillVariantsKey<T> {
    return (variantCandidate as SkillVariantsKey<T>) in skillVariants[skill];
  }

  setVariant(newVariant: SkillVariantsKey<SkillKey>): void {
    if (!Skill.#isValidVariant(newVariant, this.#name)) {
      throw new Error('invalid skill variant');
    }

    this.#variant = skillVariants[this.#name][newVariant];
  }

  setSlot<
    SlotKey extends SkillSlotsKey<SkillKey>,
    ModType extends SkillSlotMod<SkillKey, SlotKey>
  >(slot: SlotKey, mod: ModType): void {
    this.#slots[slot].mod = mod;
  }

  unsetSlot<SlotKey extends SkillSlotsKey<SkillKey>>(slot: SlotKey): void {
    this.#slots[slot].mod = null;
  }

  get name() {
    return this.#nameDisplay;
  }

  get variant() {
    return this.#variant.name;
  }

  get stats() {
    return this.#variant.attributes;
  }

  get slots() {
    return Object.values<SkillSlots[SkillKey][keyof SkillSlots[SkillKey]]>(
      this.#slots as any
    ).reduce(
      (prev, { name, mod }) => ({ ...prev, [name]: mod }),
      {} as {
        [slotName: string]: SkillSlotMod<SkillKey, SkillSlotsKey<SkillKey>> | null;
      }
    );
  }
}
