import type { PulseCoilSlotMod, PulseHousingSlotMod } from './mods';

type PulseVariant = typeof pulseVariants[number];

interface PulseModSlots {
  coil: {
    displayName: 'Coil Slot';
    mod: PulseCoilSlotMod | null;
  };
  housing: {
    displayName: 'Housing Slot';
    mod: PulseHousingSlotMod | null;
  };
}

interface PulseProps {
  variant: PulseVariant;
}

const pulseVariants = [
  'Achilles',
  'Banshee',
  'Jammer',
  'Remote',
  'Scanner',
] as const;

export class Pulse {
  #displayName = 'Pulse';
  #variant: PulseVariant;
  #mods: PulseModSlots = {
    coil: { displayName: 'Coil Slot', mod: null },
    housing: { displayName: 'Housing Slot', mod: null },
  };

  private constructor({ variant }: PulseProps) {
    this.#variant = variant;
  }

  static instantiate({ variant }: PulseProps) {
    if (!this.#isValidVariant(variant)) {
      throw new Error('invalid pulse variant');
    }

    return new Pulse({ variant });
  }

  static #isValidVariant(
    variantCandidate: string
  ): variantCandidate is PulseVariant {
    return pulseVariants.includes(variantCandidate as PulseVariant);
  }

  get name() {
    return this.#displayName;
  }

  get variant() {
    return this.#variant;
  }

  get mods() {
    return this.#mods;
  }

  setVariant(newVariant: PulseVariant): void {
    if (!Pulse.#isValidVariant(newVariant)) {
      throw new Error('invalid pulse variant');
    }

    this.#variant = newVariant;
  }

  setMod<
    SlotName extends keyof PulseModSlots,
    ModType extends PulseModSlots[SlotName]['mod']
  >(slot: SlotName, mod: ModType): void {
    this.#mods[slot].mod = mod;
  }

  unsetMod<SlotName extends keyof PulseModSlots>(slot: SlotName): void {
    this.#mods[slot].mod = null;
  }

  getBaseStats(): string {
    switch (this.#variant) {
      case 'Achilles': {
        return 'base stats for Achilles Pulse';
      }
      case 'Banshee': {
        return 'base states for Banshee Pulse';
      }
      case 'Jammer': {
        return 'base stats for Jammer Pulse';
      }
      case 'Remote': {
        return 'base stats for Remote Pulse';
      }
      case 'Scanner': {
        return 'base stats for Scanner Pulse';
      }
      default: {
        return 'variant is required';
      }
    }
  }
}
