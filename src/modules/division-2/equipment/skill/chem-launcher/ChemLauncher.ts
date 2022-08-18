import type {
  ChemLauncherAgitatorSlotMod,
  ChemLauncherPneumaticsSlotMod,
} from './mods';

type ChemLauncherVariant = typeof chemLauncherVariants[number];

interface ChemLauncherModSlots {
  launcher: {
    displayName: 'Agitator Slot';
    mod: ChemLauncherAgitatorSlotMod | null;
  };
  payload: {
    displayName: 'Pneumatics Slot';
    mod: ChemLauncherPneumaticsSlotMod | null;
  };
}

interface ChemLauncherProps {
  variant: ChemLauncherVariant;
}

const chemLauncherVariants = [
  'Firestarter',
  'Oxidizer',
  'Reinforcer',
  'Riot Foam',
] as const;

export class ChemLauncher {
  #displayName = 'Chem Launcher';
  #variant: ChemLauncherVariant;
  #mods: ChemLauncherModSlots = {
    launcher: { displayName: 'Agitator Slot', mod: null },
    payload: { displayName: 'Pneumatics Slot', mod: null },
  };

  private constructor({ variant }: ChemLauncherProps) {
    this.#variant = variant;
  }

  static instantiate({ variant }: ChemLauncherProps) {
    if (!this.#isValidVariant(variant)) {
      throw new Error('invalid chemLauncher variant');
    }

    return new ChemLauncher({ variant });
  }

  static #isValidVariant(
    variantCandidate: string
  ): variantCandidate is ChemLauncherVariant {
    return chemLauncherVariants.includes(
      variantCandidate as ChemLauncherVariant
    );
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

  setVariant(newVariant: ChemLauncherVariant): void {
    if (!ChemLauncher.#isValidVariant(newVariant)) {
      throw new Error('invalid chemLauncher variant');
    }

    this.#variant = newVariant;
  }

  setMod<
    SlotName extends keyof ChemLauncherModSlots,
    ModType extends ChemLauncherModSlots[SlotName]['mod']
  >(slot: SlotName, mod: ModType): void {
    this.#mods[slot].mod = mod;
  }

  unsetMod<SlotName extends keyof ChemLauncherModSlots>(slot: SlotName): void {
    this.#mods[slot].mod = null;
  }

  getBaseStats(): string {
    switch (this.#variant) {
      case 'Firestarter': {
        return 'base stats for Firestarter Chem Launcher';
      }
      case 'Oxidizer': {
        return 'base states for Oxidizer Chem Launcher';
      }
      case 'Reinforcer': {
        return 'base stats for Reinforcer Chem Launcher';
      }
      case 'Riot Foam': {
        return 'base stats for Riot Foam Chem Launcher';
      }
      default: {
        return 'variant is required';
      }
    }
  }
}
