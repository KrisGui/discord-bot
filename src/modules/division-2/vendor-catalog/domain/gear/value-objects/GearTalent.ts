import { ValueObject } from '../../../../../../lib/core';

const backpackTalents = [
  'Adrenaline Rush',
  'Bloodsucker',
  'Calculated',
  'Clutch',
  'Combined Arms',
  'Companion',
  'Composure',
  'Concussion',
  'Creeping Death',
  'Energize',
  'Galvanize',
  'Leadership',
  'Opportunistic',
  'Overclock',
  'Protector',
  'Safeguard',
  'Shock and Awe',
  'Tech Support',
  'Unstoppable Force',
  'Versatile',
  'Vigilance',
  'Wicked',
] as const;

const chestTalents = [
  'Braced',
  'Efficient',
  'Empathic Resolve',
  'Entrench',
  'Explosive Delivery',
  'Focus',
  'Glass Cannon',
  'Gunslinger',
  'Headhunter',
  'Intimidate',
  'Kinetic Momentum',
  'Mad Bomber',
  'Obliterate',
  'Overwatch',
  'Protected Reload',
  'Reassigned',
  'Skilled',
  'Spark',
  'Spotter',
  'Tag Team',
  'Tamper Proof',
  'Trauma',
  'Unbreakable',
  'Vanguard',
] as const;

const gearTalents = [...backpackTalents, ...chestTalents] as const;

export type ValidGearTalent = typeof gearTalents[number];

interface GearTalentProps {
  talent: ValidGearTalent;
}

export class GearTalent extends ValueObject<GearTalentProps> {
  private value: ValidGearTalent;

  private constructor(props: GearTalentProps) {
    super(props);
    const { talent } = props;

    this.value = talent;
  }

  static assign(
    value: ValidGearTalent | (string & { readonly brand?: unique symbol })
  ) {
    const talent = this.sanitize(value);

    if (!this.isValid(talent)) {
      throw new Error('invalid gear talent');
    }

    return new GearTalent({ talent });
  }

  private static isValid(
    talentCandidate: string
  ): talentCandidate is ValidGearTalent {
    return gearTalents.includes(talentCandidate as ValidGearTalent);
  }

  private static sanitize(str: string): string {
    return str.trim();
  }

  getValue() {
    return this.value;
  }
}
