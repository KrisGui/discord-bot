type StickyBombPayloadSlotModName =
  typeof stickyBombPayloadSlotModNames[number];

type StickyBombPayloadSlotAttributeName =
  typeof stickyBombPayloadSlotModAttributeNames[number];

type StickyBombPayloadSlotModAttribute =
  | {
      name: 'Blast Radius';
      value: number;
      maxValue: 6;
      label: '%';
    }
  | {
      name: 'Burn Duration';
      value: number;
      maxValue: 5;
      label: '%';
    }
  | {
      name: 'Damage';
      value: number;
      maxValue: 7.5;
      label: '%';
    };

interface StickyBombPayloadSlotModProps {
  modName: StickyBombPayloadSlotModName;
  attribute: StickyBombPayloadSlotModAttribute;
}

interface StickyBombPayloadSlotModInput {
  modName: StickyBombPayloadSlotModName;
  attribute: {
    name: StickyBombPayloadSlotAttributeName;
    value: number;
  };
}

const stickyBombPayloadSlotModNames = ['Improved Sticky Payload'] as const;

const stickyBombPayloadSlotModAttributeNames = [
  'Blast Radius',
  'Burn Duration',
  'Damage',
] as const;

const stickyBombPayloadSlotModAttributeValues = {
  'Blast Radius': {
    maxValue: 6,
    label: '%',
  },
  'Burn Duration': {
    maxValue: 5,
    label: '%',
  },
  Damage: {
    maxValue: 7.5,
    label: '%',
  },
};

export class StickyBombPayloadSlotMod {
  #modName: StickyBombPayloadSlotModName;
  #attribute: StickyBombPayloadSlotModAttribute;

  private constructor({ modName, attribute }: StickyBombPayloadSlotModProps) {
    this.#modName = modName;
    this.#attribute = attribute;
  }

  static instantiate({
    modName,
    attribute,
  }: StickyBombPayloadSlotModInput): StickyBombPayloadSlotMod {
    if (!this.#isValidModName(modName)) {
      throw new Error('invalid sticky bomb launcher slot mod name');
    }

    if (!this.#isValidAttributeName(attribute.name)) {
      throw new Error('invalid sticky bomb launcher slot attribute name');
    }

    const attributeFormatted = {
      ...attribute,
      ...stickyBombPayloadSlotModAttributeValues[attribute.name],
    } as StickyBombPayloadSlotModAttribute;

    if (!this.#isValidAttributeValue(attributeFormatted)) {
      throw new Error('invalid sticky bomb launcher slot attribute value');
    }

    return new StickyBombPayloadSlotMod({
      modName,
      attribute: attributeFormatted,
    });
  }

  static #isValidModName(
    modNameCandidate: string
  ): modNameCandidate is StickyBombPayloadSlotModName {
    return stickyBombPayloadSlotModNames.includes(
      modNameCandidate as StickyBombPayloadSlotModName
    );
  }

  static #isValidAttributeName(
    attributeNameCandidate: string
  ): attributeNameCandidate is StickyBombPayloadSlotAttributeName {
    return stickyBombPayloadSlotModAttributeNames.includes(
      attributeNameCandidate as StickyBombPayloadSlotAttributeName
    );
  }

  static #isValidAttributeValue(
    attributeCandidate: StickyBombPayloadSlotModAttribute
  ): attributeCandidate is StickyBombPayloadSlotModAttribute {
    return attributeCandidate.value <= attributeCandidate.maxValue;
  }

  get name() {
    return this.#modName;
  }

  get attribute() {
    return this.#attribute;
  }
}
