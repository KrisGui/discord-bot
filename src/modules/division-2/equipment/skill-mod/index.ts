import {
  SkillKeys,
  SkillModAttributesInput,
  SkillModAttributesSlotKeys,
  SkillModNames,
  SkillModNamesSlotKeys,
  SlotKeys,
} from './types';
import { SkillModAttribute, SkillModName } from './value-objects';

interface SkillModProps<K extends SkillKeys> {
  modName: SkillModName<K>;
  modAttribute: SkillModAttribute<K>;
}

export class SkillMod<SkillKey extends SkillKeys> {
  #props: SkillModProps<SkillKey>;

  private constructor(props: SkillModProps<SkillKey>) {
    this.#props = props;
  }

  static instantiate<K extends SkillKeys, S extends SlotKeys<K>>(
    skill: K,
    slot: S,
    name: SkillModNames<K, S>,
    attribute: SkillModAttributesInput<K, S>
  ): SkillMod<K> {
    const modName = SkillModName.assign(
      skill,
      slot as string as SkillModNamesSlotKeys<K>,
      name
    );

    const modAttribute = SkillModAttribute.assign(
      skill,
      slot as string as SkillModAttributesSlotKeys<K>,
      attribute as SkillModAttributesInput<K, SkillModAttributesSlotKeys<K>>
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
