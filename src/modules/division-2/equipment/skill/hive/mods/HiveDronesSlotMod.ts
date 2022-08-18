type HiveDronesSlotModName = typeof hiveDronesSlotModNames[number];

type HiveDronesSlotModAttributeName =
  typeof hiveDronesSlotModAttributeNames[number];

type HiveDronesSlotModAttribute =
  | {
      name: 'Damage';
      value: number;
      maxValue: 5;
      label: '%';
    }
  | {
      name: 'Healing';
      value: number;
      maxValue: 5;
      label: '%';
    }
  | {
      name: 'Reviver Armor Repair';
      value: number;
      maxValue: 10;
      label: '%';
    }
  | {
      name: 'Stim Efficiency';
      value: number;
      maxValue: 10;
      label: '%';
    };

interface HiveDronesSlotModProps {
  modName: HiveDronesSlotModName;
  attribute: HiveDronesSlotModAttribute;
}

interface HiveDronesSlotModInput {
  modName: HiveDronesSlotModName;
  attribute: {
    name: HiveDronesSlotModAttributeName;
    value: number;
  };
}

const hiveDronesSlotModNames = [
  'Experimental Blend',
  'Extra Payload',
  'Radar Signal Antennas',
] as const;

const hiveDronesSlotModAttributeNames = [
  'Damage',
  'Healing',
  'Reviver Armor Repair',
  'Stim Efficiency',
] as const;

const hiveDronesSlotModAttributeValues = {
  Damage: {
    maxValue: 5,
    label: '%',
  },
  Healing: {
    maxValue: 5,
    label: '%',
  },
  'Reviver Armor Repair': {
    maxValue: 10,
    label: '%',
  },
  'Stim Efficiency': {
    maxValue: 10,
    label: '%',
  },
};

export class HiveDronesSlotMod {
  #modName: HiveDronesSlotModName;
  #attribute: HiveDronesSlotModAttribute;

  private constructor({ modName, attribute }: HiveDronesSlotModProps) {
    this.#modName = modName;
    this.#attribute = attribute;
  }

  static instantiate({
    modName,
    attribute,
  }: HiveDronesSlotModInput): HiveDronesSlotMod {
    if (!this.#isValidModName(modName)) {
      throw new Error('invalid hive drones slot mod name');
    }

    if (!this.#isValidModAttributeName(attribute.name)) {
      throw new Error('invalid hive drones slot attribute name');
    }

    const attributeFormatted = {
      ...attribute,
      ...hiveDronesSlotModAttributeValues[attribute.name],
    } as HiveDronesSlotModAttribute;

    if (!this.#isValidModAttributeValue(attributeFormatted)) {
      throw new Error('invalid hive drones slot attribute value');
    }

    return new HiveDronesSlotMod({
      modName,
      attribute: attributeFormatted,
    });
  }

  static #isValidModName(
    modNameCandidate: string
  ): modNameCandidate is HiveDronesSlotModName {
    return hiveDronesSlotModNames.includes(
      modNameCandidate as HiveDronesSlotModName
    );
  }

  static #isValidModAttributeName(
    attributeNameCandidate: string
  ): attributeNameCandidate is HiveDronesSlotModAttributeName {
    return hiveDronesSlotModAttributeNames.includes(
      attributeNameCandidate as HiveDronesSlotModAttributeName
    );
  }

  static #isValidModAttributeValue(
    attributeCandidate: HiveDronesSlotModAttribute
  ): attributeCandidate is HiveDronesSlotModAttribute {
    return attributeCandidate.value <= attributeCandidate.maxValue;
  }

  get name() {
    return this.#modName;
  }

  get attribute() {
    return this.#attribute;
  }
}
