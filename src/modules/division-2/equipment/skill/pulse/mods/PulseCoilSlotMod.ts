type PulseCoilSlotModName = typeof pulseCoilSlotModNames[number];

type PulseCoilSlotModAttributeName =
  typeof pulseCoilSlotModAttributeNames[number];

type PulseCoilSlotModAttribute =
  | {
      name: 'Charge Speed';
      value: number;
      maxValue: 10;
      label: '%';
    }
  | {
      name: 'Cone Size';
      value: number;
      maxValue: 7.5;
      label: '%';
    }
  | {
      name: 'Radius';
      value: number;
      maxValue: 10;
      label: '%';
    };

interface PulseCoilSlotModProps {
  modName: PulseCoilSlotModName;
  attribute: PulseCoilSlotModAttribute;
}

interface PulseCoilSlotModInput {
  modName: PulseCoilSlotModName;
  attribute: {
    name: PulseCoilSlotModAttributeName;
    value: number;
  };
}

const pulseCoilSlotModNames = [
  'Distributed Architecture',
  'Unstable Oscillator',
] as const;

const pulseCoilSlotModAttributeNames = [
  'Charge Speed',
  'Cone Size',
  'Radius',
] as const;

const pulseCoilSlotModAttributeValues = {
  'Charge Speed': {
    maxValue: 10,
    label: '%',
  },
  'Cone Size': {
    maxValue: 7.5,
    label: '%',
  },
  Radius: {
    maxValue: 10,
    label: '%',
  },
};

export class PulseCoilSlotMod {
  #modName: PulseCoilSlotModName;
  #attribute: PulseCoilSlotModAttribute;

  private constructor({ modName, attribute }: PulseCoilSlotModProps) {
    this.#modName = modName;
    this.#attribute = attribute;
  }

  static instantiate({
    modName,
    attribute,
  }: PulseCoilSlotModInput): PulseCoilSlotMod {
    if (!this.#isValidModName(modName)) {
      throw new Error('invalid pulse coil slot mod name');
    }

    if (!this.#isValidModAttributeName(attribute.name)) {
      throw new Error('invalid pulse coil slot attribute name');
    }

    const attributeFormatted = {
      ...attribute,
      ...pulseCoilSlotModAttributeValues[attribute.name],
    } as PulseCoilSlotModAttribute;

    if (!this.#isValidModAttributeValue(attributeFormatted)) {
      throw new Error('invalid pulse coil slot attribute value');
    }

    return new PulseCoilSlotMod({
      modName,
      attribute: attributeFormatted,
    });
  }

  static #isValidModName(
    modNameCandidate: string
  ): modNameCandidate is PulseCoilSlotModName {
    return pulseCoilSlotModNames.includes(
      modNameCandidate as PulseCoilSlotModName
    );
  }

  static #isValidModAttributeName(
    attributeNameCandidate: string
  ): attributeNameCandidate is PulseCoilSlotModAttributeName {
    return pulseCoilSlotModAttributeNames.includes(
      attributeNameCandidate as PulseCoilSlotModAttributeName
    );
  }

  static #isValidModAttributeValue(
    attributeCandidate: PulseCoilSlotModAttribute
  ): attributeCandidate is PulseCoilSlotModAttribute {
    return attributeCandidate.value <= attributeCandidate.maxValue;
  }

  get name() {
    return this.#modName;
  }

  get attribute() {
    return this.#attribute;
  }
}
