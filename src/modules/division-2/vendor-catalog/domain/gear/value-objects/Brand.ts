import { ValueObject } from '../../../../../../lib/core';

const brandSets = [
  '5.11 Tactical',
  'Airaldi Holdings',
  'Alps Summit Armament',
  'Badger Tuff',
  'Belstone Armory',
  'China Light Industries Corporation',
  'Douglas & Harding',
  'Empress International',
  'Fenris Group AB',
  'Gila Guard',
  'Golan Gear Ltd',
  'Grupo Sombra S.A.',
  'Hana-U Corporation',
  'Murakami Industries',
  'Overlord Armaments',
  'Petrov Defense Group',
  'Providence Defense',
  'Richter & Kaiser GmbH',
  'Sokolov Concern',
  'Uzina Getica',
  'Walker, Harris & Co.',
  'Wyvern Wear',
  'Yaahl Gear',
  'Česká Výroba s.r.o.',
] as const;

const gearSets = [
  'Aces & Eights',
  'Eclipse Protocol',
  'Future Initiative',
  'Foundry Bulwark',
  'Heartbreaker',
  'Hard Wired',
  "Hunter's Fury",
  "Negotiator's Dilemma",
  'Ongoing Directive',
  'Rigger',
  "Striker's Battlegear",
  'System Corruption',
  'Tip of the Spear',
  'True Patriot',
] as const;

const brands = [...brandSets, ...gearSets] as const;

export type ValidBrand = typeof brands[number];

interface BrandProps {
  brand: ValidBrand;
}

export class Brand extends ValueObject<BrandProps> {
  private value: ValidBrand;

  private constructor(props: BrandProps) {
    super(props);
    const { brand } = props;

    this.value = brand;
  }

  static assign(
    value: ValidBrand | (string & { readonly brand?: unique symbol })
  ): Brand {
    const brand = this.sanitize(value);

    if (!this.isValid(brand)) {
      throw new Error('invalid brand');
    }

    return new Brand({ brand });
  }

  private static isValid(brandCandidate: string): brandCandidate is ValidBrand {
    const firstWord = brandCandidate.split(' ')[0];

    for (const brand of brands) {
      if (brand.includes(firstWord)) return true;
    }

    return false;
  }

  private static sanitize(str: string): string {
    return str.trim();
  }

  getValue() {
    return this.value;
  }
}
