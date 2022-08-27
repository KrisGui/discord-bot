type ChemLauncherAgitatorSlotModName =
  typeof chemLauncherAgitatorSlotModNames[number];

type ChemLauncherAgitatorSlotModAttributeName =
  typeof chemLauncherAgitatorSlotModAttributeNames[number];

type ChemLauncherAgitatorSlotModAttribute =
  | {
      name: 'Burn Strength';
      value: number;
      maxValue: 7.5;
      label: '%';
    }
  | {
      name: 'Damage';
      value: number;
      maxValue: 5;
      label: '%';
    }
  | {
      name: 'Ensnare Duration';
      value: number;
      maxValue: 10;
      label: '%';
    }
  | {
      name: 'Ensnare Health';
      value: number;
      maxValue: 18.6;
      label: '%';
    }
  | {
      name: 'Heal';
      value: number;
      maxValue: 7.5;
      label: '%';
    };

interface ChemLauncherAgitatorSlotModProps {
  modName: ChemLauncherAgitatorSlotModName;
  attribute: ChemLauncherAgitatorSlotModAttribute;
}

interface ChemLauncherAgitatorSlotModInput {
  modName: ChemLauncherAgitatorSlotModName;
  attribute: {
    name: ChemLauncherAgitatorSlotModAttributeName;
    value: number;
  };
}

const chemLauncherAgitatorSlotModNames = [
  'Cell Penetrating Peptide',
  'Imbued Metal String',
  'Slip Fit Tube',
  'Piranha Solution',
  'PVA Polymer Coating',
  'Chromatics Training',
  'Feed Strip',
] as const;

const chemLauncherAgitatorSlotModAttributeNames = [
  'Burn Strength',
  'Damage',
  'Ensnare Duration',
  'Ensnare Health',
  'Heal',
] as const;

const chemLauncherAgitatorSlotModAttributeValues = {
  'Burn Strength': {
    maxValue: 7.5,
    label: '%',
  },
  Damage: {
    maxValue: 5,
    label: '%',
  },
  'Ensnare Duration': {
    maxValue: 10,
    label: '%',
  },
  'Ensnare Health': {
    maxValue: 18.6,
    label: '%',
  },
  Heal: {
    maxValue: 7.5,
    label: '%',
  },
};

export class ChemLauncherAgitatorSlotMod {
  #modName: ChemLauncherAgitatorSlotModName;
  #attribute: ChemLauncherAgitatorSlotModAttribute;

  private constructor({
    modName,
    attribute,
  }: ChemLauncherAgitatorSlotModProps) {
    this.#modName = modName;
    this.#attribute = attribute;
  }

  static instantiate({
    modName,
    attribute,
  }: ChemLauncherAgitatorSlotModInput): ChemLauncherAgitatorSlotMod {
    if (!this.#isValidModName(modName)) {
      throw new Error('invalid chem lancher agitator slot mod name');
    }

    if (!this.#isValidModAttributeName(attribute.name)) {
      throw new Error('invalid chem lancher agitator slot attribute name');
    }

    const attributeFormatted = {
      ...attribute,
      ...chemLauncherAgitatorSlotModAttributeValues[attribute.name],
    } as ChemLauncherAgitatorSlotModAttribute;

    if (!this.#isValidModAttributeValue(attributeFormatted)) {
      throw new Error('invalid chem lancher agitator slot attribute value');
    }

    return new ChemLauncherAgitatorSlotMod({
      modName,
      attribute: attributeFormatted,
    });
  }

  static #isValidModName(
    modNameCandidate: string
  ): modNameCandidate is ChemLauncherAgitatorSlotModName {
    return chemLauncherAgitatorSlotModNames.includes(
      modNameCandidate as ChemLauncherAgitatorSlotModName
    );
  }

  static #isValidModAttributeName(
    attributeNameCandidate: string
  ): attributeNameCandidate is ChemLauncherAgitatorSlotModAttributeName {
    return chemLauncherAgitatorSlotModAttributeNames.includes(
      attributeNameCandidate as ChemLauncherAgitatorSlotModAttributeName
    );
  }

  static #isValidModAttributeValue(
    attributeCandidate: ChemLauncherAgitatorSlotModAttribute
  ): attributeCandidate is ChemLauncherAgitatorSlotModAttribute {
    return attributeCandidate.value <= attributeCandidate.maxValue;
  }

  get name() {
    return this.#modName;
  }

  get attribute() {
    return this.#attribute;
  }
}
