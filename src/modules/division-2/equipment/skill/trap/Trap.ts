import type { TrapChargeSlotMod, TrapElectronicsSlotMod } from './mods';

type TrapVariant = typeof trapVariants[number];

interface TrapModSlots {
  charge: {
    displayName: 'Charge Slot';
    mod: TrapChargeSlotMod | null;
  };
  electronics: {
    displayName: 'Electronics Slot';
    mod: TrapElectronicsSlotMod | null;
  };
}

interface TrapProps {
  variant: TrapVariant;
}

const trapVariants = ['Repair', 'Shock', 'Shrapnel'] as const;

export class Trap {
  #displayName = 'Trap';
  #variant: TrapVariant;
  #mods: TrapModSlots = {
    charge: { displayName: 'Charge Slot', mod: null },
    electronics: { displayName: 'Electronics Slot', mod: null },
  };

  private constructor({ variant }: TrapProps) {
    this.#variant = variant;
  }

  static instantiate({ variant }: TrapProps) {
    if (!this.#isValidVariant(variant)) {
      throw new Error('invalid trap variant');
    }

    return new Trap({ variant });
  }

  static #isValidVariant(
    variantCandidate: string
  ): variantCandidate is TrapVariant {
    return trapVariants.includes(variantCandidate as TrapVariant);
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

  setVariant(newVariant: TrapVariant): void {
    if (!Trap.#isValidVariant(newVariant)) {
      throw new Error('invalid trap variant');
    }

    this.#variant = newVariant;
  }

  setMod<
    SlotName extends keyof TrapModSlots,
    ModType extends TrapModSlots[SlotName]['mod']
  >(slot: SlotName, mod: ModType): void {
    this.#mods[slot].mod = mod;
  }

  unsetMod<SlotName extends keyof TrapModSlots>(slot: SlotName): void {
    this.#mods[slot].mod = null;
  }

  getBaseStats(): string {
    switch (this.#variant) {
      case 'Repair': {
        return 'base stats for Repair Trap';
      }
      case 'Shock': {
        return 'base states for Shock Trap';
      }
      case 'Shrapnel': {
        return 'base stats for Shrapnel Trap';
      }
      default: {
        return 'variant is required';
      }
    }
  }
}
