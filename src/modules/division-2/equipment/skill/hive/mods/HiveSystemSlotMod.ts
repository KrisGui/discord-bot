type HiveSystemSlotModName = typeof hiveSystemSlotModNames[number];

type HiveSystemSlotModAttributeName =
  typeof hiveSystemSlotModAttributeNames[number];

type HiveSystemSlotModAttribute =
  | {
      name: 'Duration';
      value: number;
      maxValue: 5;
      label: '%';
    }
  | {
      name: 'Health';
      value: number;
      maxValue: 10;
      label: '%';
    };

interface HiveSystemSlotModProps {
  modName: HiveSystemSlotModName;
  attribute: HiveSystemSlotModAttribute;
}

interface HiveSystemSlotModInput {
  modName: HiveSystemSlotModName;
  attribute: {
    name: HiveSystemSlotModAttributeName;
    value: number;
  };
}

const hiveSystemSlotModNames = [
  'Backpack Battery',
  'Network Firewall',
  'Polycarbonate Housing',
  'Swarm Conrol',
] as const;

const hiveSystemSlotModAttributeNames = ['Duration', 'Health'] as const;

const hiveSystemSlotModAttributeValues = {
  Duration: {
    maxValue: 5,
    label: '%',
  },
  Health: {
    maxValue: 10,
    label: '%',
  },
};

export class HiveSystemSlotMod {
  #modName: HiveSystemSlotModName;
  #attribute: HiveSystemSlotModAttribute;

  private constructor({ modName, attribute }: HiveSystemSlotModProps) {
    this.#modName = modName;
    this.#attribute = attribute;
  }

  static instantiate({
    modName,
    attribute,
  }: HiveSystemSlotModInput): HiveSystemSlotMod {
    if (!this.#isValidModName(modName)) {
      throw new Error('invalid hive system slot mod name');
    }

    if (!this.#isValidModAttributeName(attribute.name)) {
      throw new Error('invalid hive system slot attribute name');
    }

    const attributeFormatted = {
      ...attribute,
      ...hiveSystemSlotModAttributeValues[attribute.name],
    } as HiveSystemSlotModAttribute;

    if (!this.#isValidModAttributeValue(attributeFormatted)) {
      throw new Error('invalid hive system slot attribute value');
    }

    return new HiveSystemSlotMod({
      modName,
      attribute: attributeFormatted,
    });
  }

  static #isValidModName(
    modNameCandidate: string
  ): modNameCandidate is HiveSystemSlotModName {
    return hiveSystemSlotModNames.includes(
      modNameCandidate as HiveSystemSlotModName
    );
  }

  static #isValidModAttributeName(
    attributeNameCandidate: string
  ): attributeNameCandidate is HiveSystemSlotModAttributeName {
    return hiveSystemSlotModAttributeNames.includes(
      attributeNameCandidate as HiveSystemSlotModAttributeName
    );
  }

  static #isValidModAttributeValue(
    attributeCandidate: HiveSystemSlotModAttribute
  ): attributeCandidate is HiveSystemSlotModAttribute {
    return attributeCandidate.value <= attributeCandidate.maxValue;
  }

  get name() {
    return this.#modName;
  }

  get attribute() {
    return this.#attribute;
  }
}
