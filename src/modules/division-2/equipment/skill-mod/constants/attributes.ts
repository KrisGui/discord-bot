import { SkillNamesKey, SkillSlotsKey } from '../../skill/types';

export const skillModAttributeStaticValuesMap = {
  'Chem Launcher': {
    Agitator: {
      'Burn Strength': {
        maxValue: 7.5,
        label: '%',
      },
      Damage: {
        maxValue: 5,
        label: '%',
      },
      'Ensnare Duration': {
        maxValue: 10,
        label: '%',
      },
      'Ensnare Health': {
        maxValue: 18.6,
        label: '%',
      },
      Heal: {
        maxValue: 7.5,
        label: '%',
      },
    },
    Pneumatics: {
      Ammo: {
        maxValue: 1,
        label: '+',
      },
      Duration: {
        maxValue: 7.5,
        label: '%',
      },
      Radius: {
        maxValue: 7.5,
        label: '%',
      },
      'Skill Haste': {
        maxValue: 7.5,
        label: '%',
      },
    },
  },

  Decoy: {
    Housing: {
      Health: {
        maxValue: 7.5,
        label: '%',
      },
    },
    Projector: {
      Duration: {
        maxValue: 7.5,
        label: '%',
      },
    },
  },

  Drone: {
    Battery: {
      'Deflector Duration': {
        maxValue: 7.5,
        label: '%',
      },
      Duration: {
        maxValue: 7.5,
        label: '%',
      },
    },
    Feed: {
      'Armor Repair': {
        maxValue: 7.5,
        label: '%',
      },
      Damage: {
        maxValue: 5,
        label: '%',
      },
      'Damage Reduction': {
        maxValue: 7.5,
        label: '%',
      },
    },
    Hull: {
      'Extra Bombs': {
        maxValue: 2,
        label: '+',
      },
      Health: {
        maxValue: 10,
        label: '%',
      },
      'Scan Range': {
        maxValue: 10,
        label: '%',
      },
    },
  },

  Firefly: {
    Payload: {
      'Blind Effect Duration': {
        maxValue: 7.5,
        label: '%',
      },
      Damage: {
        maxValue: 7.5,
        label: '%',
      },
    },
    Propulsion: {
      'Skill Haste': {
        maxValue: 7.5,
        label: '%',
      },
      Speed: {
        maxValue: 10,
        label: '%',
      },
    },
    Targeting: {
      'Max Targets': {
        maxValue: 1,
        label: '+',
      },
    },
  },

  Hive: {
    Drones: {
      Damage: {
        maxValue: 5,
        label: '%',
      },
      Healing: {
        maxValue: 5,
        label: '%',
      },
      'Reviver Armor Repair': {
        maxValue: 10,
        label: '%',
      },
      'Stim Efficiency': {
        maxValue: 10,
        label: '%',
      },
    },
    Launcher: {
      Range: {
        maxValue: 5,
        label: '%',
      },
      'Repair Charges': {
        maxValue: 4,
        label: '+',
      },
      'Stim Charges': {
        maxValue: 4,
        label: '+',
      },
      'Stinger Charges': {
        maxValue: 4,
        label: '+',
      },
    },
    System: {
      Duration: {
        maxValue: 5,
        label: '%',
      },
      Health: {
        maxValue: 10,
        label: '%',
      },
    },
  },

  Pulse: {
    Coil: {
      'Charge Speed': {
        maxValue: 10,
        label: '%',
      },
      'Cone Size': {
        maxValue: 7.5,
        label: '%',
      },
      Radius: {
        maxValue: 10,
        label: '%',
      },
    },
    Housing: {
      'Effect Duration': {
        maxValue: 10,
        label: '%',
      },
      Health: {
        maxValue: 20,
        label: '%',
      },
      'Skill Haste': {
        maxValue: 6,
        label: '%',
      },
    },
  },

  'Seeker Mine': {
    Drive: {
      Damage: {
        maxValue: 5,
        label: '%',
      },
      Radius: {
        maxValue: 5,
        label: '%',
      },
      'Skill Haste': {
        maxValue: 7.5,
        label: '%',
      },
    },
    Payload: {
      Damage: {
        maxValue: 5,
        label: '%',
      },
      Healing: {
        maxValue: 7.5,
        label: '%',
      },
      'Skill Haste': {
        maxValue: 6,
        label: '%',
      },
    },
    Targeting: {
      'Cluster Mines': {
        maxValue: 1,
        label: '+',
      },
      Health: {
        maxValue: 7.5,
        label: '%',
      },
    },
  },

  Shield: {
    'Circuit Board': {
      'Damage Bonus Per Enemy': {
        maxValue: 1,
        label: '%',
      },
      'Deflector Damage': {
        maxValue: 5,
        label: '%',
      },
      'Holstered Regeneration': {
        maxValue: 5,
        label: '%',
      },
      'Shield Health': {
        maxValue: 5,
        label: '%',
      },
    },
    Gyro: {
      'Damage Bonus Per Enemy': {
        maxValue: 5,
        label: '%',
      },
      'Deflector Damage': {
        maxValue: 5,
        label: '%',
      },
      'Holstered Regeneration': {
        maxValue: 5,
        label: '%',
      },
    },
    'Hard Coating': {
      'Active Regeneration': {
        maxValue: 5,
        label: '%',
      },
      'Deflector Damage': {
        maxValue: 5,
        label: '%',
      },
      'Shield Health': {
        maxValue: 5,
        label: '%',
      },
    },
  },

  'Sticky Bomb': {
    Launcher: {
      'Blast Radius': {
        maxValue: 6,
        label: '%',
      },
      Duration: {
        maxValue: 7.5,
        label: '%',
      },
      'Skill Haste': {
        maxValue: 5,
        label: '%',
      },
    },
    Payload: {
      'Blast Radius': {
        maxValue: 6,
        label: '%',
      },
      'Burn Duration': {
        maxValue: 5,
        label: '%',
      },
      Damage: {
        maxValue: 7.5,
        label: '%',
      },
    },
  },

  Trap: {
    Charge: {
      Duration: {
        maxValue: 5,
        label: '%',
      },
    },
    Electronics: {
      Duration: {
        maxValue: 7.5,
        label: '%',
      },
      'Shock Radius': {
        maxValue: 7.5,
        label: '%',
      },
    },
  },

  Turret: {
    'Firing Mechanism': {
      'Burn Damage': {
        maxValue: 5,
        label: '%',
      },
      Damage: {
        maxValue: 5,
        label: '%',
      },
    },
    Housing: {
      Duration: {
        maxValue: 7.5,
        label: '%',
      },
      'Extra Mortar Ammo': {
        maxValue: 1,
        label: '+',
      },
      'Extra Sniper Ammo': {
        maxValue: 1,
        label: '+',
      },
      Health: {
        maxValue: 10,
        label: '%',
      },
    },
    Targeting: {
      Duration: {
        maxValue: 7.5,
        label: '%',
      },
      'Skill Haste': {
        maxValue: 7.5,
        label: '%',
      },
    },
  },
} as const;

type SkillModAttributeStaticValuesMap = typeof skillModAttributeStaticValuesMap;

type SkillModAttributeNames<
  T extends SkillNamesKey,
  U extends SkillSlotsKey<T>
> = {
  [K in keyof SkillModAttributeStaticValuesMap]: {
    [P in keyof SkillModAttributeStaticValuesMap[K]]: P extends U
      ? keyof SkillModAttributeStaticValuesMap[K][P]
      : never;
  }[keyof SkillModAttributeStaticValuesMap[K]];
}[keyof SkillModAttributeStaticValuesMap];

export type SkillModAttributeInputValues<
  T extends SkillNamesKey,
  U extends SkillSlotsKey<T>
> = {
  name: SkillModAttributeNames<T, U>;
  value: number;
};

export type SkillModAttributeStaticValues<
  T extends SkillNamesKey,
  U extends SkillSlotsKey<T>,
  V extends SkillModAttributeNames<T, U>
> = {
  [K in keyof SkillModAttributeStaticValuesMap]: {
    [P in keyof SkillModAttributeStaticValuesMap[K]]: {
      [A in keyof SkillModAttributeStaticValuesMap[K][P]]: A extends V
        ? SkillModAttributeStaticValuesMap[K][P][A]
        : never;
    }[keyof SkillModAttributeStaticValuesMap[K][P]];
  }[keyof SkillModAttributeStaticValuesMap[K]];
}[keyof SkillModAttributeStaticValuesMap];

export type SkillModAttribute<
  T extends SkillNamesKey,
  U extends SkillSlotsKey<T>,
  V extends SkillModAttributeNames<T, U>
> = SkillModAttributeInputValues<T, U> & SkillModAttributeStaticValues<T, U, V>;
