import type { DecoyHousingSlotMod, DecoyProjectorSlotMod } from './mods';

type DecoyVariant = typeof decoyVariants[number];

interface DecoyModSlots {
  housing: {
    displayName: 'Housing Slot';
    mod: DecoyHousingSlotMod | null;
  };
  projector: {
    displayName: 'Projector Slot';
    mod: DecoyProjectorSlotMod | null;
  };
}

interface DecoyProps {
  variant: DecoyVariant;
}

const decoyVariants = ['Holographic Distraction'] as const;

export class Decoy {
  #displayName = 'Decoy';
  #variant: DecoyVariant;
  #mods: DecoyModSlots = {
    housing: { displayName: 'Housing Slot', mod: null },
    projector: { displayName: 'Projector Slot', mod: null },
  };

  private constructor({ variant }: DecoyProps) {
    this.#variant = variant;
  }

  static instantiate({ variant }: DecoyProps) {
    if (!this.#isValidVariant(variant)) {
      throw new Error('invalid decoy variant');
    }

    return new Decoy({ variant });
  }

  static #isValidVariant(
    variantCandidate: string
  ): variantCandidate is DecoyVariant {
    return decoyVariants.includes(variantCandidate as DecoyVariant);
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

  setVariant(newVariant: DecoyVariant): void {
    if (!Decoy.#isValidVariant(newVariant)) {
      throw new Error('invalid decoy variant');
    }

    this.#variant = newVariant;
  }

  setMod<
    SlotName extends keyof DecoyModSlots,
    ModType extends DecoyModSlots[SlotName]['mod']
  >(slot: SlotName, mod: ModType): void {
    this.#mods[slot].mod = mod;
  }

  unsetMod<SlotName extends keyof DecoyModSlots>(slot: SlotName): void {
    this.#mods[slot].mod = null;
  }

  getBaseStats(): string {
    switch (this.#variant) {
      case 'Holographic Distraction': {
        return 'base stats for Holographic Distraction Decoy';
      }
      default: {
        return 'variant is required';
      }
    }
  }
}
