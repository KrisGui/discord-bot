import type {
  StickyBombLauncherSlotMod,
  StickyBombPayloadSlotMod,
} from './mods';

type StickyBombVariant = typeof stickyBombVariants[number];

interface StickyBombModSlots {
  launcher: {
    displayName: 'Launcher Slot';
    mod: StickyBombLauncherSlotMod | null;
  };
  payload: {
    displayName: 'Payload Slot';
    mod: StickyBombPayloadSlotMod | null;
  };
}

interface StickyBombProps {
  variant: StickyBombVariant;
}

const stickyBombVariants = ['Burn', 'EMP', 'Explosive'] as const;

export class StickyBomb {
  #displayName = 'Sticky Bomb';
  #variant: StickyBombVariant;
  #mods: StickyBombModSlots = {
    launcher: { displayName: 'Launcher Slot', mod: null },
    payload: { displayName: 'Payload Slot', mod: null },
  };

  private constructor({ variant }: StickyBombProps) {
    this.#variant = variant;
  }

  static instantiate({ variant }: StickyBombProps) {
    if (!this.#isValidVariant(variant)) {
      throw new Error('invalid stickyBomb variant');
    }

    return new StickyBomb({ variant });
  }

  static #isValidVariant(
    variantCandidate: string
  ): variantCandidate is StickyBombVariant {
    return stickyBombVariants.includes(variantCandidate as StickyBombVariant);
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

  setVariant(newVariant: StickyBombVariant): void {
    if (!StickyBomb.#isValidVariant(newVariant)) {
      throw new Error('invalid stickyBomb variant');
    }

    this.#variant = newVariant;
  }

  setMod<
    SlotName extends keyof StickyBombModSlots,
    ModType extends StickyBombModSlots[SlotName]['mod']
  >(slot: SlotName, mod: ModType): void {
    this.#mods[slot].mod = mod;
  }

  unsetMod<SlotName extends keyof StickyBombModSlots>(slot: SlotName): void {
    this.#mods[slot].mod = null;
  }

  getBaseStats(): string {
    switch (this.#variant) {
      case 'Burn': {
        return 'base stats for Burn Sticky Bomb';
      }
      case 'EMP': {
        return 'base states for EMP Sticky Bomb';
      }
      case 'Explosive': {
        return 'base stats for Explosive Sticky Bomb';
      }
      default: {
        return 'variant is required';
      }
    }
  }
}
