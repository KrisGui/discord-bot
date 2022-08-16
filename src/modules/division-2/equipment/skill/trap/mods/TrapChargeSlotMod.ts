type TrapChargeSlotModName = typeof trapChargeSlotModNames[number];

type TrapChargeSlotModAttributeName =
  typeof trapChargeSlotModAttributeNames[number];

type TrapChargeSlotModAttribute = {
  name: 'Duration';
  value: number;
  maxValue: 5;
  label: '%';
};

interface TrapChargeSlotModProps {
  modName: TrapChargeSlotModName;
  attribute: TrapChargeSlotModAttribute;
}

interface TrapChargeSlotModInput {
  modName: TrapChargeSlotModName;
  attribute: {
    name: TrapChargeSlotModAttributeName;
    value: number;
  };
}

const trapChargeSlotModNames = ['Trap Charge Improvement'] as const;

const trapChargeSlotModAttributeNames = ['Duration'] as const;

const trapChargeSlotModAttributeValues = {
  Duration: {
    maxValue: 5,
    label: '%',
  },
};

export class TrapChargeSlotMod {
  #modName: TrapChargeSlotModName;
  #attribute: TrapChargeSlotModAttribute;

  private constructor({ modName, attribute }: TrapChargeSlotModProps) {
    this.#modName = modName;
    this.#attribute = attribute;
  }

  static instantiate({
    modName,
    attribute,
  }: TrapChargeSlotModInput): TrapChargeSlotMod {
    if (!this.#isValidModName(modName)) {
      throw new Error('invalid trap charge slot mod name');
    }

    if (!this.#isValidModAttributeName(attribute.name)) {
      throw new Error('invalid trap charge slot attribute name');
    }

    const attributeFormatted = {
      ...attribute,
      ...trapChargeSlotModAttributeValues[attribute.name],
    } as TrapChargeSlotModAttribute;

    if (!this.#isValidModAttributeValue(attributeFormatted)) {
      throw new Error('invalid trap charge slot attribute value');
    }

    return new TrapChargeSlotMod({
      modName,
      attribute: attributeFormatted,
    });
  }

  static #isValidModName(
    modNameCandidate: string
  ): modNameCandidate is TrapChargeSlotModName {
    return trapChargeSlotModNames.includes(
      modNameCandidate as TrapChargeSlotModName
    );
  }

  static #isValidModAttributeName(
    attributeNameCandidate: string
  ): attributeNameCandidate is TrapChargeSlotModAttributeName {
    return trapChargeSlotModAttributeNames.includes(
      attributeNameCandidate as TrapChargeSlotModAttributeName
    );
  }

  static #isValidModAttributeValue(
    attributeCandidate: TrapChargeSlotModAttribute
  ): attributeCandidate is TrapChargeSlotModAttribute {
    return attributeCandidate.value <= attributeCandidate.maxValue;
  }

  get name() {
    return this.#modName;
  }

  get attribute() {
    return this.#attribute;
  }
}
