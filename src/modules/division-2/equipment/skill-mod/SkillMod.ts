export class SkillMod {
  #modName: unknown;
  #attribute: {
    name: unknown;
    maxValue: unknown;
    label: unknown;
  };

  constructor(
    modName: unknown,
    attribute: {
      name: unknown;
      maxValue: unknown;
      label: unknown;
    }
  ) {
    this.#modName = modName;
    this.#attribute = attribute;
  }

  get name() {
    return this.#modName;
  }

  get attribute() {
    return this.#attribute;
  }
}
