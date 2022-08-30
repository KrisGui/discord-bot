import type {
  SkillKeys,
  SkillSlotKeys,
  SkillSlotMod,
  SkillSlotsMap,
  SkillVariantKeys,
} from './types';
import { SkillName, SkillSlots, SkillVariant } from './value-objects';

interface SkillProps<K extends SkillKeys> {
  skillKey: K;
  skillName: SkillName;
  skillVariant: SkillVariant<K>;
  skillSlotsMap: SkillSlotsMap[K];
}

export class Skill<SkillKey extends SkillKeys> {
  #props: SkillProps<SkillKey>;

  private constructor(props: SkillProps<SkillKey>) {
    this.#props = props;
  }

  static instantiate<K extends SkillKeys>(
    skillKey: K,
    variantKey: SkillVariantKeys<K>
  ): Skill<K> {
    const skillName = SkillName.assign(skillKey);
    const skillVariant = SkillVariant.assign(skillKey, variantKey);
    const skillSlotsMap = SkillSlots.assign(skillKey).slots;

    return new Skill<K>({ skillKey, skillName, skillVariant, skillSlotsMap });
  }

  setVariant(newVariant: SkillVariantKeys<SkillKey>): void {
    this.#props.skillVariant = SkillVariant.assign(
      this.#props.skillKey,
      newVariant
    );
  }

  setSlot<
    SlotKey extends SkillSlotKeys<SkillKey>,
    ModType extends SkillSlotMod<SkillKey, SlotKey>
  >(slot: SlotKey, mod: ModType): void {
    this.#props.skillSlotsMap[slot].mod = mod;
  }

  unsetSlot<SlotKey extends SkillSlotKeys<SkillKey>>(slot: SlotKey): void {
    this.#props.skillSlotsMap[slot].mod = null;
  }

  get name() {
    return this.#props.skillName.value;
  }

  get variant() {
    return this.#props.skillVariant.name;
  }

  get stats() {
    return this.#props.skillVariant.attributes;
  }

  get slots() {
    return Object.values<SkillSlotsMap[SkillKey][SkillSlotKeys<SkillKey>]>(
      this.#props.skillSlotsMap as any
    ).reduce(
      (prev, { name, mod }) => ({
        ...prev,
        [name]: mod
          ? { [mod.name]: `${mod.attribute.value} ${mod.attribute.name}` }
          : mod,
      }),
      {} as {
        [slotName: string]: SkillSlotMod<
          SkillKey,
          SkillSlotKeys<SkillKey>
        > | null;
      }
    );
  }
}
