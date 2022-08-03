import { ValueObject } from '../../../../../../lib/core';

const rarities = ['named', 'high-end', 'gear set'] as const;

type ValidRarity = typeof rarities[number];

interface RarityProps {
  rarity: string;
}

export class Rarity extends ValueObject<RarityProps> {
  private rarity: string;

  static rarityDictionary: Record<string, string> = {
    'header-named': 'named',
    'header-he': 'high-end',
    'header-gs': 'gear set',
  };

  private constructor(props: RarityProps) {
    super(props);
    const { rarity } = props;

    this.rarity = rarity;
  }

  static assign(
    rarityCandidate: ValidRarity | (string & { readonly brand?: unique symbol })
  ): Rarity {
    const rarity = this.sanitize(rarityCandidate);

    if (!this.isValidRarity(rarity)) {
      throw new Error('invalid rarity');
    }

    return new Rarity({ rarity });
  }

  private static isValidRarity(
    validRarityCandidate: string
  ): validRarityCandidate is ValidRarity {
    return rarities.includes(validRarityCandidate as ValidRarity);
  }

  private static sanitize(str: string): string {
    if (str in this.rarityDictionary) {
      return this.rarityDictionary[str];
    } else {
      return str.toLowerCase();
    }
  }

  getValue() {
    return this.rarity;
  }
}
