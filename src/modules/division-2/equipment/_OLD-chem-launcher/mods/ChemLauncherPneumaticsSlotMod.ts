type ChemLauncherPneumaticsSlotModName =
  typeof chemLauncherPneumaticsSlotModNames[number];

type ChemLauncherPneumaticsSlotModAttributeName =
  typeof chemLauncherPneumaticsSlotModAttributeNames[number];

type ChemLauncherPneumaticsSlotModAttribute =
  | { name: 'Ammo'; value: number; maxValue: 1; label: '+' }
  | {
      name: 'Duration';
      value: number;
      maxValue: 7.5;
      label: '%';
    }
  | {
      name: 'Radius';
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

interface ChemLauncherPneumaticsSlotModProps {
  modName: ChemLauncherPneumaticsSlotModName;
  attribute: ChemLauncherPneumaticsSlotModAttribute;
}

interface ChemLauncherPneumaticsSlotModInput {
  modName: ChemLauncherPneumaticsSlotModName;
  attribute: {
    name: ChemLauncherPneumaticsSlotModAttributeName;
    value: number;
  };
}

const chemLauncherPneumaticsSlotModNames = [
  'Disintegrating Links',
  'Ecotoxicology Research',
  'Hydrochloric Infusion',
  'Liquid Nitrogen Cooling System',
  'Ultra-Thin Cartridges',
  'Pharmacokinetic Enhancer',
] as const;

const chemLauncherPneumaticsSlotModAttributeNames = [
  'Ammo',
  'Duration',
  'Radius',
  'Skill Haste',
] as const;

const chemLauncherPneumaticsSlotModAttributeValues = {
  Ammo: {
    maxValue: 1,
    label: '+',
  },
  Duration: {
    maxValue: 7.5,
    label: '%',
  },
  Radius: {
    maxValue: 7.5,
    label: '%',
  },
  'Skill Haste': {
    maxValue: 7.5,
    label: '%',
  },
};

export class ChemLauncherPneumaticsSlotMod {
  #modName: ChemLauncherPneumaticsSlotModName;
  #attribute: ChemLauncherPneumaticsSlotModAttribute;

  private constructor({
    modName,
    attribute,
  }: ChemLauncherPneumaticsSlotModProps) {
    this.#modName = modName;
    this.#attribute = attribute;
  }

  static instantiate({
    modName,
    attribute,
  }: ChemLauncherPneumaticsSlotModInput): ChemLauncherPneumaticsSlotMod {
    if (!this.#isValidModName(modName)) {
      throw new Error('invalid chem launcher pneumatics slot mod name');
    }

    if (!this.#isValidModAttributeName(attribute.name)) {
      throw new Error('invalid chem launcher pneumatics slot attribute name');
    }

    const attributeFormatted = {
      ...attribute,
      ...chemLauncherPneumaticsSlotModAttributeValues[attribute.name],
    } as ChemLauncherPneumaticsSlotModAttribute;

    if (!this.#isValidModAttributeValue(attributeFormatted)) {
      throw new Error('invalid chem launcher pneumatics slot attribute value');
    }

    return new ChemLauncherPneumaticsSlotMod({
      modName,
      attribute: attributeFormatted,
    });
  }

  static #isValidModName(
    modNameCandidate: string
  ): modNameCandidate is ChemLauncherPneumaticsSlotModName {
    return chemLauncherPneumaticsSlotModNames.includes(
      modNameCandidate as ChemLauncherPneumaticsSlotModName
    );
  }

  static #isValidModAttributeName(
    attributeNameCandidate: string
  ): attributeNameCandidate is ChemLauncherPneumaticsSlotModAttributeName {
    return chemLauncherPneumaticsSlotModAttributeNames.includes(
      attributeNameCandidate as ChemLauncherPneumaticsSlotModAttributeName
    );
  }

  static #isValidModAttributeValue(
    attributeCandidate: ChemLauncherPneumaticsSlotModAttribute
  ): attributeCandidate is ChemLauncherPneumaticsSlotModAttribute {
    return attributeCandidate.value <= attributeCandidate.maxValue;
  }

  get name() {
    return this.#modName;
  }

  get attribute() {
    return this.#attribute;
  }
}
