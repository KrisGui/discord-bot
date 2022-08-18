type TurretFiringMechanismSlotModName =
  typeof turretFiringMechanismSlotModNames[number];

type TurretFiringMechanismSlotModAttributeName =
  typeof turretFiringMechanismSlotModAttributeNames[number];

type TurretFiringMechanismSlotModAttribute =
  | {
      name: 'Burn Damage';
      value: number;
      maxValue: 5;
      label: '%';
    }
  | {
      name: 'Damage';
      value: number;
      maxValue: 5;
      label: '%';
    };

interface TurretFiringMechanismSlotModProps {
  modName: TurretFiringMechanismSlotModName;
  attribute: TurretFiringMechanismSlotModAttribute;
}

interface TurretFiringMechanismSlotModInput {
  modName: TurretFiringMechanismSlotModName;
  attribute: {
    name: TurretFiringMechanismSlotModAttributeName;
    value: number;
  };
}

const turretFiringMechanismSlotModNames = [
  'Cyclone Magazine',
  'Lubrication Gel',
  'Magnetic Rail',
] as const;

const turretFiringMechanismSlotModAttributeNames = [
  'Burn Damage',
  'Damage',
] as const;

const turretFiringMechanismSlotModAttributeValues = {
  'Burn Damage': {
    maxValue: 5,
    label: '%',
  },
  Damage: {
    maxValue: 5,
    label: '%',
  },
};

export class TurretFiringMechanismSlotMod {
  #modName: TurretFiringMechanismSlotModName;
  #attribute: TurretFiringMechanismSlotModAttribute;

  private constructor({
    modName,
    attribute,
  }: TurretFiringMechanismSlotModProps) {
    this.#modName = modName;
    this.#attribute = attribute;
  }

  static instantiate({
    modName,
    attribute,
  }: TurretFiringMechanismSlotModInput): TurretFiringMechanismSlotMod {
    if (!this.#isValidModName(modName)) {
      throw new Error('invalid turret firing mechanism slot mod name');
    }

    if (!this.#isValidModAttributeName(attribute.name)) {
      throw new Error('invalid turret firing mechanism slot attribute name');
    }

    const attributeFormatted = {
      ...attribute,
      ...turretFiringMechanismSlotModAttributeValues[attribute.name],
    } as TurretFiringMechanismSlotModAttribute;

    if (!this.#isValidModAttributeValue(attributeFormatted)) {
      throw new Error('invalid turret firing mechanism slot attribute value');
    }

    return new TurretFiringMechanismSlotMod({
      modName,
      attribute: attributeFormatted,
    });
  }

  static #isValidModName(
    modNameCandidate: string
  ): modNameCandidate is TurretFiringMechanismSlotModName {
    return turretFiringMechanismSlotModNames.includes(
      modNameCandidate as TurretFiringMechanismSlotModName
    );
  }

  static #isValidModAttributeName(
    attributeNameCandidate: string
  ): attributeNameCandidate is TurretFiringMechanismSlotModAttributeName {
    return turretFiringMechanismSlotModAttributeNames.includes(
      attributeNameCandidate as TurretFiringMechanismSlotModAttributeName
    );
  }

  static #isValidModAttributeValue(
    attributeCandidate: TurretFiringMechanismSlotModAttribute
  ): attributeCandidate is TurretFiringMechanismSlotModAttribute {
    return attributeCandidate.value <= attributeCandidate.maxValue;
  }

  get name() {
    return this.#modName;
  }

  get attribute() {
    return this.#attribute;
  }
}
