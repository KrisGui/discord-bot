import { ValueObject } from '../../../../../../lib/core';

const rarities = ['Named', 'High-End', 'Gear Set'] as const;

export type ValidRarity = typeof rarities[number];

interface RarityProps {
  rarity: ValidRarity;
}

export class Rarity extends ValueObject<RarityProps> {
  private value: ValidRarity;

  private static rarityDictionary: Record<string, string> = {
    'header-named': 'Named',
    'header-he': 'High-End',
    'header-gs': 'Gear Set',
  };

  private constructor(props: RarityProps) {
    super(props);
    const { rarity } = props;

    this.value = rarity;
  }

  static assign(
    value: ValidRarity | (string & { readonly brand?: unique symbol })
  ): Rarity {
    const rarity = this.sanitize(value);

    if (!this.isValid(rarity)) {
      throw new Error('invalid rarity');
    }

    return new Rarity({ rarity });
  }

  private static isValid(
    rarityCandidate: string
  ): rarityCandidate is ValidRarity {
    return rarities.includes(rarityCandidate as ValidRarity);
  }

  private static sanitize(str: string): string {
    str = str.trim();
    if (str in this.rarityDictionary) {
      return this.rarityDictionary[str];
    } else {
      return str.toLowerCase();
    }
  }

  getValue() {
    return this.value;
  }
}
