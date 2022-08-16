type TrapElectronicsSlotModName = typeof trapElectronicsSlotModNames[number];

type TrapElectronicsSlotModAttributeName =
  typeof trapElectronicsSlotModAttributeNames[number];

type TrapElectronicsSlotModAttribute =
  | {
      name: 'Duration';
      value: number;
      maxValue: 7.5;
      label: '%';
    }
  | {
      name: 'Shock Radius';
      value: number;
      maxValue: 7.5;
      label: '%';
    };

interface TrapElectronicsSlotModProps {
  modName: TrapElectronicsSlotModName;
  attribute: TrapElectronicsSlotModAttribute;
}

interface TrapElectronicsSlotModInput {
  modName: TrapElectronicsSlotModName;
  attribute: {
    name: TrapElectronicsSlotModAttributeName;
    value: number;
  };
}

const trapElectronicsSlotModNames = [
  'Trap Electronics Improvement',
  'Trap Electronics Upgrade',
] as const;

const trapElectronicsSlotModAttributeNames = [
  'Duration',
  'Shock Radius',
] as const;

const trapElectronicsSlotModAttributeValues = {
  Duration: {
    maxValue: 7.5,
    label: '%',
  },
  'Shock Radius': {
    maxValue: 7.5,
    label: '%',
  },
};

export class TrapElectronicsSlotMod {
  #modName: TrapElectronicsSlotModName;
  #attribute: TrapElectronicsSlotModAttribute;

  private constructor({ modName, attribute }: TrapElectronicsSlotModProps) {
    this.#modName = modName;
    this.#attribute = attribute;
  }

  static instantiate({
    modName,
    attribute,
  }: TrapElectronicsSlotModInput): TrapElectronicsSlotMod {
    if (!this.#isValidModName(modName)) {
      throw new Error('invalid trap electronics slot mod name');
    }

    if (!this.#isValidModAttributeName(attribute.name)) {
      throw new Error('invalid trap electronics slot attribute name');
    }

    const attributeFormatted = {
      ...attribute,
      ...trapElectronicsSlotModAttributeValues[attribute.name],
    } as TrapElectronicsSlotModAttribute;

    if (!this.#isValidModAttributeValue(attributeFormatted)) {
      throw new Error('invalid trap electronics slot attribute value');
    }

    return new TrapElectronicsSlotMod({
      modName,
      attribute: attributeFormatted,
    });
  }

  static #isValidModName(
    modNameCandidate: string
  ): modNameCandidate is TrapElectronicsSlotModName {
    return trapElectronicsSlotModNames.includes(
      modNameCandidate as TrapElectronicsSlotModName
    );
  }

  static #isValidModAttributeName(
    attributeNameCandidate: string
  ): attributeNameCandidate is TrapElectronicsSlotModAttributeName {
    return trapElectronicsSlotModAttributeNames.includes(
      attributeNameCandidate as TrapElectronicsSlotModAttributeName
    );
  }

  static #isValidModAttributeValue(
    attributeCandidate: TrapElectronicsSlotModAttribute
  ): attributeCandidate is TrapElectronicsSlotModAttribute {
    return attributeCandidate.value <= attributeCandidate.maxValue;
  }

  get name() {
    return this.#modName;
  }

  get attribute() {
    return this.#attribute;
  }
}
