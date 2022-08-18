type TurretTargetingSlotModName = typeof turretTargetingSlotModNames[number];

type TurretTargetingSlotModAttributeName =
  typeof turretTargetingSlotModAttributeNames[number];

type TurretTargetingSlotModAttribute =
  | {
      name: 'Duration';
      value: number;
      maxValue: 7.5;
      label: '%';
    }
  | {
      name: 'Skill Haste';
      value: number;
      maxValue: 7.5;
      label: '%';
    };

interface TurretTargetingSlotModProps {
  modName: TurretTargetingSlotModName;
  attribute: TurretTargetingSlotModAttribute;
}

interface TurretTargetingSlotModInput {
  modName: TurretTargetingSlotModName;
  attribute: {
    name: TurretTargetingSlotModAttributeName;
    value: number;
  };
}

const turretTargetingSlotModNames = [
  'Carbon Fiber Barrel',
  'Multi-Tool',
  'SHD CPU V.2',
] as const;

const turretTargetingSlotModAttributeNames = [
  'Duration',
  'Skill Haste',
] as const;

const turretTargetingSlotModAttributeValues = {
  Duration: {
    maxValue: 7.5,
    label: '%',
  },
  'Skill Haste': {
    maxValue: 7.5,
    label: '%',
  },
};

export class TurretTargetingSlotMod {
  #modName: TurretTargetingSlotModName;
  #attribute: TurretTargetingSlotModAttribute;

  private constructor({ modName, attribute }: TurretTargetingSlotModProps) {
    this.#modName = modName;
    this.#attribute = attribute;
  }

  static instantiate({
    modName,
    attribute,
  }: TurretTargetingSlotModInput): TurretTargetingSlotMod {
    if (!this.#isValidModName(modName)) {
      throw new Error('invalid turret targeting slot mod name');
    }

    if (!this.#isValidModAttributeName(attribute.name)) {
      throw new Error('invalid turret targeting slot attribute name');
    }

    const attributeFormatted = {
      ...attribute,
      ...turretTargetingSlotModAttributeValues[attribute.name],
    } as TurretTargetingSlotModAttribute;

    if (!this.#isValidModAttributeValue(attributeFormatted)) {
      throw new Error('invalid turret targeting slot attribute value');
    }

    return new TurretTargetingSlotMod({
      modName,
      attribute: attributeFormatted,
    });
  }

  static #isValidModName(
    modNameCandidate: string
  ): modNameCandidate is TurretTargetingSlotModName {
    return turretTargetingSlotModNames.includes(
      modNameCandidate as TurretTargetingSlotModName
    );
  }

  static #isValidModAttributeName(
    attributeNameCandidate: string
  ): attributeNameCandidate is TurretTargetingSlotModAttributeName {
    return turretTargetingSlotModAttributeNames.includes(
      attributeNameCandidate as TurretTargetingSlotModAttributeName
    );
  }

  static #isValidModAttributeValue(
    attributeCandidate: TurretTargetingSlotModAttribute
  ): attributeCandidate is TurretTargetingSlotModAttribute {
    return attributeCandidate.value <= attributeCandidate.maxValue;
  }

  get name() {
    return this.#modName;
  }

  get attribute() {
    return this.#attribute;
  }
}
