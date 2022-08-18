type TurretHousingSlotModName = typeof turretHousingSlotModNames[number];

type TurretHousingSlotModAttributeName =
  typeof turretHousingSlotModAttributeNames[number];

type TurretHousingSlotModAttribute =
  | {
      name: 'Duration';
      value: number;
      maxValue: 7.5;
      label: '%';
    }
  | {
      name: 'Extra Mortar Ammo';
      value: number;
      maxValue: 1;
      label: '+';
    }
  | {
      name: 'Extra Sniper Ammo';
      value: number;
      maxValue: 1;
      label: '+';
    }
  | {
      name: 'Health';
      value: number;
      maxValue: 10;
      label: '%';
    };

interface TurretHousingSlotModProps {
  modName: TurretHousingSlotModName;
  attribute: TurretHousingSlotModAttribute;
}

interface TurretHousingSlotModInput {
  modName: TurretHousingSlotModName;
  attribute: {
    name: TurretHousingSlotModAttributeName;
    value: number;
  };
}

const turretHousingSlotModNames = [
  'Ammo Box',
  'Organic Circuits',
  'Spare Parts',
  'Weather Coating',
] as const;

const turretHousingSlotModAttributeNames = [
  'Duration',
  'Extra Mortar Ammo',
  'Extra Sniper Ammo',
  'Health',
] as const;

const turretHousingSlotModAttributeValues = {
  Duration: {
    maxValue: 7.5,
    label: '%',
  },
  'Extra Mortar Ammo': {
    maxValue: 1,
    label: '+',
  },
  'Extra Sniper Ammo': {
    maxValue: 1,
    label: '+',
  },
  Health: {
    maxValue: 10,
    label: '%',
  },
};

export class TurretHousingSlotMod {
  #modName: TurretHousingSlotModName;
  #attribute: TurretHousingSlotModAttribute;

  private constructor({ modName, attribute }: TurretHousingSlotModProps) {
    this.#modName = modName;
    this.#attribute = attribute;
  }

  static instantiate({
    modName,
    attribute,
  }: TurretHousingSlotModInput): TurretHousingSlotMod {
    if (!this.#isValidModName(modName)) {
      throw new Error('invalid turret housing slot mod name');
    }

    if (!this.#isValidModAttributeName(attribute.name)) {
      throw new Error('invalid turret housing slot attribute name');
    }

    const attributeFormatted = {
      ...attribute,
      ...turretHousingSlotModAttributeValues[attribute.name],
    } as TurretHousingSlotModAttribute;

    if (!this.#isValidModAttributeValue(attributeFormatted)) {
      throw new Error('invalid turret housing slot attribute value');
    }

    return new TurretHousingSlotMod({
      modName,
      attribute: attributeFormatted,
    });
  }

  static #isValidModName(
    modNameCandidate: string
  ): modNameCandidate is TurretHousingSlotModName {
    return turretHousingSlotModNames.includes(
      modNameCandidate as TurretHousingSlotModName
    );
  }

  static #isValidModAttributeName(
    attributeNameCandidate: string
  ): attributeNameCandidate is TurretHousingSlotModAttributeName {
    return turretHousingSlotModAttributeNames.includes(
      attributeNameCandidate as TurretHousingSlotModAttributeName
    );
  }

  static #isValidModAttributeValue(
    attributeCandidate: TurretHousingSlotModAttribute
  ): attributeCandidate is TurretHousingSlotModAttribute {
    return attributeCandidate.value <= attributeCandidate.maxValue;
  }

  get name() {
    return this.#modName;
  }

  get attribute() {
    return this.#attribute;
  }
}
