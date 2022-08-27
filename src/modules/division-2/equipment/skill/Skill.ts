import { skillNames, skillSlots, skillVariants } from './constants';
import type {
  SkillNames,
  SkillNamesKey,
  SkillProps,
  SkillSlotMod,
  SkillSlots,
  SkillSlotsKey,
  SkillVariants,
  SkillVariantsKey,
} from './types';

export class Skill<SkillName extends SkillNamesKey> {
  #props: SkillProps<SkillName>;
  #name: SkillNames[SkillName];
  #variant: SkillVariants[SkillName][SkillVariantsKey<SkillName>];
  #slots: SkillSlots[SkillName];

  private constructor({ name, variant }: SkillProps<SkillName>) {
    this.#props = { name, variant };
    this.#name = skillNames[name];
    this.#variant = skillVariants[name][variant];
    this.#slots = skillSlots[name];
  }

  static instantiate<K extends SkillNamesKey>({
    name,
    variant,
  }: SkillProps<K>): Skill<K> {
    if (!this.#isValidSkillName(name)) {
      throw new Error('invalid skill name');
    }

    if (!this.#isValidVariant(variant, name)) {
      throw new Error('invalid skill variant');
    }

    return new Skill<K>({ name, variant });
  }

  static #isValidSkillName(
    nameCandidate: string
  ): nameCandidate is SkillNamesKey {
    return (nameCandidate as SkillNamesKey) in skillNames;
  }

  static #isValidVariant<K extends SkillNamesKey>(
    variantCandidate: string,
    skill: K
  ): variantCandidate is SkillVariantsKey<K> {
    return (variantCandidate as SkillVariantsKey<K>) in skillVariants[skill];
  }

  setVariant(newVariant: SkillVariantsKey<SkillName>): void {
    if (!Skill.#isValidVariant(newVariant, this.#props.name)) {
      throw new Error('invalid skill variant');
    }

    this.#variant = skillVariants[this.#props.name][newVariant];
  }

  setSlot<
    SlotKey extends SkillSlotsKey<SkillName>,
    ModType extends SkillSlotMod<SkillName, SlotKey>
  >(slot: SlotKey, mod: ModType): void {
    this.#slots[slot].mod = mod;
  }

  unsetSlot<SlotKey extends SkillSlotsKey<SkillName>>(slot: SlotKey): void {
    this.#slots[slot].mod = null;
  }

  get name() {
    return this.#name;
  }

  get variant() {
    return this.#variant.name;
  }

  get stats() {
    return this.#variant.attributes;
  }

  get slots() {
    return Object.values<SkillSlots[SkillName][SkillSlotsKey<SkillName>]>(
      this.#slots as any
    ).reduce(
      (prev, { name, mod }) => ({ ...prev, [name]: mod }),
      {} as {
        [slotName: string]: SkillSlotMod<
          SkillName,
          SkillSlotsKey<SkillName>
        > | null;
      }
    );
  }
}
