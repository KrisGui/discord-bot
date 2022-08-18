type HiveLauncherSlotModName = typeof hiveLauncherSlotModNames[number];

type HiveLauncherSlotModAttributeName =
  typeof hiveLauncherSlotModAttributeNames[number];

type HiveLauncherSlotModAttribute =
  | {
      name: 'Range';
      value: number;
      maxValue: 5;
      label: '%';
    }
  | {
      name: 'Repair Charges';
      value: number;
      maxValue: 4;
      label: '+';
    }
  | {
      name: 'Stim Charges';
      value: number;
      maxValue: 4;
      label: '+';
    }
  | {
      name: 'Stinger Charges';
      value: number;
      maxValue: 4;
      label: '+';
    };

interface HiveLauncherSlotModProps {
  modName: HiveLauncherSlotModName;
  attribute: HiveLauncherSlotModAttribute;
}

interface HiveLauncherSlotModInput {
  modName: HiveLauncherSlotModName;
  attribute: {
    name: HiveLauncherSlotModAttributeName;
    value: number;
  };
}

const hiveLauncherSlotModNames = [
  'Cooling Vents',
  'Internal Storage',
  'Nitroglycerin Mixture',
  'Steel Harness',
] as const;

const hiveLauncherSlotModAttributeNames = [
  'Range',
  'Repair Charges',
  'Stim Charges',
  'Stinger Charges',
] as const;

const hiveLauncherSlotModAttributeValues = {
  Range: {
    maxValue: 5,
    label: '%',
  },
  'Repair Charges': {
    maxValue: 4,
    label: '+',
  },
  'Stim Charges': {
    maxValue: 4,
    label: '+',
  },
  'Stinger Charges': {
    maxValue: 4,
    label: '+',
  },
};

export class HiveLauncherSlotMod {
  #modName: HiveLauncherSlotModName;
  #attribute: HiveLauncherSlotModAttribute;

  private constructor({ modName, attribute }: HiveLauncherSlotModProps) {
    this.#modName = modName;
    this.#attribute = attribute;
  }

  static instantiate({
    modName,
    attribute,
  }: HiveLauncherSlotModInput): HiveLauncherSlotMod {
    if (!this.#isValidModName(modName)) {
      throw new Error('invalid hive launcher slot mod name');
    }

    if (!this.#isValidModAttributeName(attribute.name)) {
      throw new Error('invalid hive launcher slot attribute name');
    }

    const attributeFormatted = {
      ...attribute,
      ...hiveLauncherSlotModAttributeValues[attribute.name],
    } as HiveLauncherSlotModAttribute;

    if (!this.#isValidModAttributeValue(attributeFormatted)) {
      throw new Error('invalid hive launcher slot attribute value');
    }

    return new HiveLauncherSlotMod({
      modName,
      attribute: attributeFormatted,
    });
  }

  static #isValidModName(
    modNameCandidate: string
  ): modNameCandidate is HiveLauncherSlotModName {
    return hiveLauncherSlotModNames.includes(
      modNameCandidate as HiveLauncherSlotModName
    );
  }

  static #isValidModAttributeName(
    attributeNameCandidate: string
  ): attributeNameCandidate is HiveLauncherSlotModAttributeName {
    return hiveLauncherSlotModAttributeNames.includes(
      attributeNameCandidate as HiveLauncherSlotModAttributeName
    );
  }

  static #isValidModAttributeValue(
    attributeCandidate: HiveLauncherSlotModAttribute
  ): attributeCandidate is HiveLauncherSlotModAttribute {
    return attributeCandidate.value <= attributeCandidate.maxValue;
  }

  get name() {
    return this.#modName;
  }

  get attribute() {
    return this.#attribute;
  }
}
