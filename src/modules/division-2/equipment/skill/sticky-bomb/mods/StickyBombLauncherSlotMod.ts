type StickyBombLauncherSlotModName =
  typeof stickyBombLauncherSlotModNames[number];

type StickyBombLauncherSlotModAttributeName =
  typeof stickyBombLauncherSlotModAttributeNames[number];

type StickyBombLauncherSlotModAttribute =
  | {
      name: 'Blast Radius';
      value: number;
      maxValue: 6;
      label: '%';
    }
  | {
      name: 'Duration';
      value: number;
      maxValue: 7.5;
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
    name: StickyBombLauncherSlotModAttributeName;
    value: number;
  };
}

const stickyBombLauncherSlotModNames = ['Improved Sticky Launcher'] as const;

const stickyBombLauncherSlotModAttributeNames = [
  'Blast Radius',
  'Duration',
  'Skill Haste',
] as const;

const stickyBombLauncherSlotModAttributeValues = {
  'Blast Radius': {
    maxValue: 6,
    label: '%',
  },
  Duration: {
    maxValue: 7.5,
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

    if (!this.#isValidModAttributeName(attribute.name)) {
      throw new Error('invalid sticky bomb launcher slot attribute name');
    }

    const attributeFormatted = {
      ...attribute,
      ...stickyBombLauncherSlotModAttributeValues[attribute.name],
    } as StickyBombLauncherSlotModAttribute;

    if (!this.#isValidModAttributeValue(attributeFormatted)) {
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

  static #isValidModAttributeName(
    attributeNameCandidate: string
  ): attributeNameCandidate is StickyBombLauncherSlotModAttributeName {
    return stickyBombLauncherSlotModAttributeNames.includes(
      attributeNameCandidate as StickyBombLauncherSlotModAttributeName
    );
  }

  static #isValidModAttributeValue(
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
