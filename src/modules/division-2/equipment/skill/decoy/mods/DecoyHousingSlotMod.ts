type DecoyHousingSlotModName = typeof decoyHousingSlotModNames[number];

type DecoyHousingSlotModAttributeName =
  typeof decoyHousingSlotModAttributeNames[number];

type DecoyHousingSlotModAttribute = {
  name: 'Health';
  value: number;
  maxValue: 7.5;
  label: '%';
};

interface DecoyHousingSlotModProps {
  modName: DecoyHousingSlotModName;
  attribute: DecoyHousingSlotModAttribute;
}

interface DecoyHousingSlotModInput {
  modName: DecoyHousingSlotModName;
  attribute: {
    name: DecoyHousingSlotModAttributeName;
    value: number;
  };
}

const decoyHousingSlotModNames = ['Decoy Housing Shell'] as const;

const decoyHousingSlotModAttributeNames = ['Health'] as const;

const decoyHousingSlotModAttributeValues = {
  Health: {
    maxValue: 7.5,
    label: '%',
  },
};

export class DecoyHousingSlotMod {
  #modName: DecoyHousingSlotModName;
  #attribute: DecoyHousingSlotModAttribute;

  private constructor({ modName, attribute }: DecoyHousingSlotModProps) {
    this.#modName = modName;
    this.#attribute = attribute;
  }

  static instantiate({
    modName,
    attribute,
  }: DecoyHousingSlotModInput): DecoyHousingSlotMod {
    if (!this.#isValidModName(modName)) {
      throw new Error('invalid decoy housing slot mod name');
    }

    if (!this.#isValidModAttributeName(attribute.name)) {
      throw new Error('invalid decoy housing slot attribute name');
    }

    const attributeFormatted = {
      ...attribute,
      ...decoyHousingSlotModAttributeValues[attribute.name],
    } as DecoyHousingSlotModAttribute;

    if (!this.#isValidModAttributeValue(attributeFormatted)) {
      throw new Error('invalid decoy housing slot attribute value');
    }

    return new DecoyHousingSlotMod({
      modName,
      attribute: attributeFormatted,
    });
  }

  static #isValidModName(
    modNameCandidate: string
  ): modNameCandidate is DecoyHousingSlotModName {
    return decoyHousingSlotModNames.includes(
      modNameCandidate as DecoyHousingSlotModName
    );
  }

  static #isValidModAttributeName(
    attributeNameCandidate: string
  ): attributeNameCandidate is DecoyHousingSlotModAttributeName {
    return decoyHousingSlotModAttributeNames.includes(
      attributeNameCandidate as DecoyHousingSlotModAttributeName
    );
  }

  static #isValidModAttributeValue(
    attributeCandidate: DecoyHousingSlotModAttribute
  ): attributeCandidate is DecoyHousingSlotModAttribute {
    return attributeCandidate.value <= attributeCandidate.maxValue;
  }

  get name() {
    return this.#modName;
  }

  get attribute() {
    return this.#attribute;
  }
}
