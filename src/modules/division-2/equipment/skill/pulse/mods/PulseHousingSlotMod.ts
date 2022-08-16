type PulseHousingSlotModName = typeof pulseHousingSlotModNames[number];

type PulseHousingSlotModAttributeName =
  typeof pulseHousingSlotModAttributeNames[number];

type PulseHousingSlotModAttribute =
  | {
      name: 'Effect Duration';
      value: number;
      maxValue: 10;
      label: '%';
    }
  | {
      name: 'Health';
      value: number;
      maxValue: 20;
      label: '%';
    }
  | {
      name: 'Skill Haste';
      value: number;
      maxValue: 6;
      label: '%';
    };

interface PulseHousingSlotModProps {
  modName: PulseHousingSlotModName;
  attribute: PulseHousingSlotModAttribute;
}

interface PulseHousingSlotModInput {
  modName: PulseHousingSlotModName;
  attribute: {
    name: PulseHousingSlotModAttributeName;
    value: number;
  };
}

const pulseHousingSlotModNames = [
  'Atmospheric Analyzer',
  'Exploded Blueprint',
  'Heating Mantle',
  'Super Glue',
] as const;

const pulseHousingSlotModAttributeNames = [
  'Effect Duration',
  'Health',
  'Skill Haste',
] as const;

const pulseHousingSlotModAttributeValues = {
  'Effect Duration': {
    maxValue: 10,
    label: '%',
  },
  'Health': {
    maxValue: 20,
    label: '%',
  },
  'Skill Haste': {
    maxValue: 6,
    label: '%',
  },
};

export class PulseHousingSlotMod {
  #modName: PulseHousingSlotModName;
  #attribute: PulseHousingSlotModAttribute;

  private constructor({ modName, attribute }: PulseHousingSlotModProps) {
    this.#modName = modName;
    this.#attribute = attribute;
  }

  static instantiate({
    modName,
    attribute,
  }: PulseHousingSlotModInput): PulseHousingSlotMod {
    if (!this.#isValidModName(modName)) {
      throw new Error('invalid pulse housing slot mod name');
    }

    if (!this.#isValidModAttributeName(attribute.name)) {
      throw new Error('invalid pulse housing slot attribute name');
    }

    const attributeFormatted = {
      ...attribute,
      ...pulseHousingSlotModAttributeValues[attribute.name],
    } as PulseHousingSlotModAttribute;

    if (!this.#isValidModAttributeValue(attributeFormatted)) {
      throw new Error('invalid pulse housing slot attribute value');
    }

    return new PulseHousingSlotMod({
      modName,
      attribute: attributeFormatted,
    });
  }

  static #isValidModName(
    modNameCandidate: string
  ): modNameCandidate is PulseHousingSlotModName {
    return pulseHousingSlotModNames.includes(
      modNameCandidate as PulseHousingSlotModName
    );
  }

  static #isValidModAttributeName(
    attributeNameCandidate: string
  ): attributeNameCandidate is PulseHousingSlotModAttributeName {
    return pulseHousingSlotModAttributeNames.includes(
      attributeNameCandidate as PulseHousingSlotModAttributeName
    );
  }

  static #isValidModAttributeValue(
    attributeCandidate: PulseHousingSlotModAttribute
  ): attributeCandidate is PulseHousingSlotModAttribute {
    return attributeCandidate.value <= attributeCandidate.maxValue;
  }

  get name() {
    return this.#modName;
  }

  get attribute() {
    return this.#attribute;
  }
}
