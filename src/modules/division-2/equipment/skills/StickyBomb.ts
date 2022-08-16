import type { StickyBombLauncherSlotMod } from '../skill-mod/sticky-bomb';

type StickyBombVariant = typeof stickyBombVariants[number];

interface StickyBombPayloadSlotMod {
  modName: 'Improved Sticky Payload';
  attribute:
    | {
        name: 'Burn Duration';
        maxValue: 5;
        label: '%';
      }
    | {
        name: 'Damage';
        maxValue: 7.5;
        label: '%';
      }
    | {
        name: 'Blast Radius';
        maxValue: 6;
        label: '%';
      };
}

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

const stickyBombVariants = ['Burn', 'EMP', 'Explosive'] as const;

export class StickyBomb {
  #displayName = 'Sticky Bomb';
  #variant: StickyBombVariant;
  #mods: StickyBombModSlots = {
    launcher: { displayName: 'Launcher Slot', mod: null },
    payload: { displayName: 'Payload Slot', mod: null },
  };

  constructor(variant: StickyBombVariant) {
    this.#variant = variant;
  }

  static instantiate() {}

  static #isValidVariant() {}

  get name() {
    return this.#displayName;
  }

  get variant() {
    return this.#variant;
  }

  get mods() {
    return this.#mods;
  }

  setVariant() {}

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
