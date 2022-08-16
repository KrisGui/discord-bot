type StickyBombLauncherSlotModName =
  typeof stickyBombLauncherSlotModNames[number];

type StickyBombLauncherSlotAttributeName =
  typeof stickyBombLauncherSlotModAttributeNames[number];

type StickyBombLauncherSlotModAttribute =
  | {
      name: 'Duration';
      value: number;
      maxValue: 7.5;
      label: '%';
    }
  | {
      name: 'Blast Radius';
      value: number;
      maxValue: 6;
      label: '%';
    }
  | {
      name: 'Skill Haste';
      value: number;
      maxValue: 5;
      label: '%';
    };

interface StickyBombLauncherSlotModProps {
  modName: StickyBombLauncherSlotModName;
  attribute: StickyBombLauncherSlotModAttribute;
}

interface StickyBombLauncherSlotModInput {
  modName: StickyBombLauncherSlotModName;
  attribute: {
    name: StickyBombLauncherSlotAttributeName;
    value: number;
  };
}

const stickyBombLauncherSlotModNames = ['Improved Sticky Launcher'] as const;

const stickyBombLauncherSlotModAttributeNames = [
  'Duration',
  'Blast Radius',
  'Skill Haste',
] as const;

const stickyBombLauncherSlotModAttributeValues = {
  Duration: {
    maxValue: 7.5,
    label: '%',
  },
  'Blast Radius': {
    maxValue: 6,
    label: '%',
  },
  'Skill Haste': {
    maxValue: 5,
    label: '%',
  },
};

export class StickyBombLauncherSlotMod {
  #modName: StickyBombLauncherSlotModName;
  #attribute: StickyBombLauncherSlotModAttribute;

  private constructor({ modName, attribute }: StickyBombLauncherSlotModProps) {
    this.#modName = modName;
    this.#attribute = attribute;
  }

  static instantiate({
    modName,
    attribute,
  }: StickyBombLauncherSlotModInput): StickyBombLauncherSlotMod {
    if (!this.#isValidModName(modName)) {
      throw new Error('invalid sticky bomb launcher slot mod name');
    }

    if (!this.#isValidAttributeName(attribute.name)) {
      throw new Error('invalid sticky bomb launcher slot attribute name');
    }

    const attributeFormatted = {
      ...attribute,
      ...stickyBombLauncherSlotModAttributeValues[attribute.name],
    } as StickyBombLauncherSlotModAttribute;

    if (!this.#isValidAttributeValue(attributeFormatted)) {
      throw new Error('invalid sticky bomb launcher slot attribute value');
    }

    return new StickyBombLauncherSlotMod({
      modName,
      attribute: attributeFormatted,
    });
  }

  static #isValidModName(
    modNameCandidate: string
  ): modNameCandidate is StickyBombLauncherSlotModName {
    return stickyBombLauncherSlotModNames.includes(
      modNameCandidate as StickyBombLauncherSlotModName
    );
  }

  static #isValidAttributeName(
    attributeNameCandidate: string
  ): attributeNameCandidate is StickyBombLauncherSlotAttributeName {
    return stickyBombLauncherSlotModAttributeNames.includes(
      attributeNameCandidate as StickyBombLauncherSlotAttributeName
    );
  }

  static #isValidAttributeValue(
    attributeCandidate: StickyBombLauncherSlotModAttribute
  ): attributeCandidate is StickyBombLauncherSlotModAttribute {
    return attributeCandidate.value <= attributeCandidate.maxValue;
  }

  get name() {
    return this.#modName;
  }

  get attribute() {
    return this.#attribute;
  }
}