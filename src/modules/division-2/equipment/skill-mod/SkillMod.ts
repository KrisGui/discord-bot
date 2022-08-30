import {
  SkillKeys,
  SkillModAttributesInput,
  SkillModAttributesSlotKeys,
  SkillModNames,
  SkillModNamesSlotKeys,
  SlotKeys,
} from './types';
import { SkillModAttribute, SkillModName } from './value-objects';

interface SkillModProps<K extends SkillKeys, S extends SlotKeys<K>> {
  modName: SkillModName<K, SkillModNamesSlotKeys<K>>;
  modAttribute: SkillModAttribute<K, SkillModAttributesSlotKeys<K>>;
}

export class SkillMod<
  SkillKey extends SkillKeys,
  SlotKey extends SlotKeys<SkillKey>
> {
  #props: SkillModProps<SkillKey, SlotKey>;

  private constructor(props: SkillModProps<SkillKey, SlotKey>) {
    this.#props = props;
  }

  static instantiate<K extends SkillKeys, S extends SlotKeys<K>>(
    skill: K,
    slot: S,
    name: SkillModNames<K, S>,
    attribute: SkillModAttributesInput<K, SkillModAttributesSlotKeys<K>>
  ): SkillMod<K, S> {
    const modName = SkillModName.assign(
      skill,
      slot as string as SkillModNamesSlotKeys<K>,
      name
    );

    const modAttribute = SkillModAttribute.assign(
      skill,
      slot as string as SkillModAttributesSlotKeys<K>,
      attribute
    );

    return new SkillMod({ modName, modAttribute });
  }

  get name() {
    return this.#props.modName.value;
  }

  get attribute() {
    return this.#props.modAttribute;
  }
}
