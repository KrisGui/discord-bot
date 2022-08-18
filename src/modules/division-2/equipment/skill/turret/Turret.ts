import type {
  TurretFiringMechanismSlotMod,
  TurretHousingSlotMod,
  TurretTargetingSlotMod,
} from './mods';

type TurretVariant = typeof turretVariants[number];

interface TurretModSlots {
  firingMechanism: {
    displayName: 'Firing Mechanism Slot';
    mod: TurretFiringMechanismSlotMod | null;
  };
  housing: {
    displayName: 'Housing Slot';
    mod: TurretHousingSlotMod | null;
  };
  targeting: {
    displayName: 'Targeting Slot';
    mod: TurretTargetingSlotMod | null;
  };
}

interface TurretProps {
  variant: TurretVariant;
}

const turretVariants = [
  'Artillery',
  'Assault',
  'Incinerator',
  'Sniper',
] as const;

export class Turret {
  #displayName = 'Turret';
  #variant: TurretVariant;
  #mods: TurretModSlots = {
    firingMechanism: { displayName: 'Firing Mechanism Slot', mod: null },
    housing: { displayName: 'Housing Slot', mod: null },
    targeting: { displayName: 'Targeting Slot', mod: null },
  };

  private constructor({ variant }: TurretProps) {
    this.#variant = variant;
  }

  static instantiate({ variant }: TurretProps) {
    if (!this.#isValidVariant(variant)) {
      throw new Error('invalid turret variant');
    }

    return new Turret({ variant });
  }

  static #isValidVariant(
    variantCandidate: string
  ): variantCandidate is TurretVariant {
    return turretVariants.includes(variantCandidate as TurretVariant);
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

  setVariant(newVariant: TurretVariant): void {
    if (!Turret.#isValidVariant(newVariant)) {
      throw new Error('invalid turret variant');
    }

    this.#variant = newVariant;
  }

  setMod<
    SlotName extends keyof TurretModSlots,
    ModType extends TurretModSlots[SlotName]['mod']
  >(slot: SlotName, mod: ModType): void {
    this.#mods[slot].mod = mod;
  }

  unsetMod<SlotName extends keyof TurretModSlots>(slot: SlotName): void {
    this.#mods[slot].mod = null;
  }

  getBaseStats(): string {
    switch (this.#variant) {
      case 'Artillery': {
        return 'base stats for Artillery Turret';
      }
      case 'Assault': {
        return 'base states for Assault Turret';
      }
      case 'Incinerator': {
        return 'base stats for Incinerator Turret';
      }
      case 'Sniper': {
        return 'base stats for Sniper Turret';
      }
      default: {
        return 'variant is required';
      }
    }
  }
}
