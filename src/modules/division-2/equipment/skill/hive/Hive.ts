import type {
  HiveDronesSlotMod,
  HiveLauncherSlotMod,
  HiveSystemSlotMod,
} from './mods';

type HiveVariant = typeof hiveVariants[number];

interface HiveModSlots {
  firingMechanism: {
    displayName: 'Drones Slot';
    mod: HiveDronesSlotMod | null;
  };
  housing: {
    displayName: 'Launcher Slot';
    mod: HiveLauncherSlotMod | null;
  };
  targeting: {
    displayName: 'System Slot';
    mod: HiveSystemSlotMod | null;
  };
}

interface HiveProps {
  variant: HiveVariant;
}

const hiveVariants = [
  'Artificer',
  'Booster',
  'Restorer',
  'Reviver',
  'Stinger',
] as const;

export class Hive {
  #displayName = 'Hive';
  #variant: HiveVariant;
  #mods: HiveModSlots = {
    firingMechanism: { displayName: 'Drones Slot', mod: null },
    housing: { displayName: 'Launcher Slot', mod: null },
    targeting: { displayName: 'System Slot', mod: null },
  };

  private constructor({ variant }: HiveProps) {
    this.#variant = variant;
  }

  static instantiate({ variant }: HiveProps) {
    if (!this.#isValidVariant(variant)) {
      throw new Error('invalid hive variant');
    }

    return new Hive({ variant });
  }

  static #isValidVariant(
    variantCandidate: string
  ): variantCandidate is HiveVariant {
    return hiveVariants.includes(variantCandidate as HiveVariant);
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

  setVariant(newVariant: HiveVariant): void {
    if (!Hive.#isValidVariant(newVariant)) {
      throw new Error('invalid hive variant');
    }

    this.#variant = newVariant;
  }

  setMod<
    SlotName extends keyof HiveModSlots,
    ModType extends HiveModSlots[SlotName]['mod']
  >(slot: SlotName, mod: ModType): void {
    this.#mods[slot].mod = mod;
  }

  unsetMod<SlotName extends keyof HiveModSlots>(slot: SlotName): void {
    this.#mods[slot].mod = null;
  }

  getBaseStats(): string {
    switch (this.#variant) {
      case 'Artificer': {
        return 'base stats for Artificer Hive';
      }
      case 'Booster': {
        return 'base states for Booster Hive';
      }
      case 'Restorer': {
        return 'base stats for Restorer Hive';
      }
      case 'Reviver': {
        return 'base stats for Reviver Hive';
      }
      case 'Stinger': {
        return 'base stats for Stinger Hive';
      }
      default: {
        return 'variant is required';
      }
    }
  }
}
