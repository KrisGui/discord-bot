type DecoyProjectorSlotModName = typeof decoyProjectorSlotModNames[number];

type DecoyProjectorSlotModAttributeName =
  typeof decoyProjectorSlotModAttributeNames[number];

type DecoyProjectorSlotModAttribute = {
  name: 'Duration';
  value: number;
  maxValue: 7.5;
  label: '%';
};

interface DecoyProjectorSlotModProps {
  modName: DecoyProjectorSlotModName;
  attribute: DecoyProjectorSlotModAttribute;
}

interface DecoyProjectorSlotModInput {
  modName: DecoyProjectorSlotModName;
  attribute: {
    name: DecoyProjectorSlotModAttributeName;
    value: number;
  };
}

const decoyProjectorSlotModNames = ['Decoy Projector Internals'] as const;

const decoyProjectorSlotModAttributeNames = ['Duration'] as const;

const decoyProjectorSlotModAttributeValues = {
  Duration: {
    maxValue: 7.5,
    label: '%',
  },
};

export class DecoyProjectorSlotMod {
  #modName: DecoyProjectorSlotModName;
  #attribute: DecoyProjectorSlotModAttribute;

  private constructor({ modName, attribute }: DecoyProjectorSlotModProps) {
    this.#modName = modName;
    this.#attribute = attribute;
  }

  static instantiate({
    modName,
    attribute,
  }: DecoyProjectorSlotModInput): DecoyProjectorSlotMod {
    if (!this.#isValidModName(modName)) {
      throw new Error('invalid decoy projector slot mod name');
    }

    if (!this.#isValidModAttributeName(attribute.name)) {
      throw new Error('invalid decoy projector slot attribute name');
    }

    const attributeFormatted = {
      ...attribute,
      ...decoyProjectorSlotModAttributeValues[attribute.name],
    } as DecoyProjectorSlotModAttribute;

    if (!this.#isValidModAttributeValue(attributeFormatted)) {
      throw new Error('invalid decoy projector slot attribute value');
    }

    return new DecoyProjectorSlotMod({
      modName,
      attribute: attributeFormatted,
    });
  }

  static #isValidModName(
    modNameCandidate: string
  ): modNameCandidate is DecoyProjectorSlotModName {
    return decoyProjectorSlotModNames.includes(
      modNameCandidate as DecoyProjectorSlotModName
    );
  }

  static #isValidModAttributeName(
    attributeNameCandidate: string
  ): attributeNameCandidate is DecoyProjectorSlotModAttributeName {
    return decoyProjectorSlotModAttributeNames.includes(
      attributeNameCandidate as DecoyProjectorSlotModAttributeName
    );
  }

  static #isValidModAttributeValue(
    attributeCandidate: DecoyProjectorSlotModAttribute
  ): attributeCandidate is DecoyProjectorSlotModAttribute {
    return attributeCandidate.value <= attributeCandidate.maxValue;
  }

  get name() {
    return this.#modName;
  }

  get attribute() {
    return this.#attribute;
  }
}
