const chemLauncherAgitatorModAttributes = {
  burnStrength: {
    name: 'Burn Strength',
    maxValue: 7.5,
    label: '%',
  },
  damage: {
    name: 'Damage',
    maxValue: 5,
    label: '%',
  },
  ensnareDuration: {
    name: 'Ensnare Duration',
    maxValue: 10,
    label: '%',
  },
  ensnareHealth: {
    name: 'Ensnare Health',
    maxValue: 18.6,
    label: '%',
  },
  heal: {
    name: 'Heal',
    maxValue: 7.5,
    label: '%',
  },
} as const;

const chemLauncherPneumaticsModAttributes = {
  ammo: {
    name: 'Ammo',
    maxValue: 1,
    label: '+',
  },
  duration: {
    name: 'Duration',
    maxValue: 7.5,
    label: '%',
  },
  radius: {
    name: 'Radius',
    maxValue: 7.5,
    label: '%',
  },
  skillHaste: {
    name: 'Skill Haste',
    maxValue: 7.5,
    label: '%',
  },
} as const;

const decoyHousingModAttributes = {
  health: {
    name: 'Health',
    maxValue: 7.5,
    label: '%',
  },
} as const;

const decoyProjectorModAttributes = {
  duration: {
    name: 'Duration',
    maxValue: 7.5,
    label: '%',
  },
} as const;

const droneBatteryModAttributes = {
  deflectorDuration: {
    name: 'Deflector Duration',
    maxValue: 7.5,
    label: '%',
  },
  duration: {
    name: 'Duration',
    maxValue: 7.5,
    label: '%',
  },
} as const;

const droneFeedModAttributes = {
  armorRepair: {
    name: 'Armor Repair',
    maxValue: 7.5,
    label: '%',
  },
  damage: {
    name: 'Damage',
    maxValue: 5,
    label: '%',
  },
  damageReduction: {
    name: 'Damage Reduction',
    maxValue: 7.5,
    label: '%',
  },
} as const;

const droneHullModAttributes = {
  extraBombs: {
    name: 'Extra Bombs',
    maxValue: 2,
    label: '+',
  },
  health: {
    name: 'Health',
    maxValue: 10,
    label: '%',
  },
  scanRange: {
    name: 'Scan Range',
    maxValue: 10,
    label: '%',
  },
} as const;

const fireflyPayloadModAttributes = {
  blindEffectDuration: {
    name: 'Blind Effect Duration',
    maxValue: 7.5,
    label: '%',
  },
  damage: {
    name: 'Damage',
    maxValue: 7.5,
    label: '%',
  },
} as const;

const fireflyPropulsionModAttributes = {
  skillHaste: {
    name: 'Skill Haste',
    maxValue: 7.5,
    label: '%',
  },
  speed: {
    name: 'Speed',
    maxValue: 10,
    label: '%',
  },
} as const;

const fireflyTargetingModAttributes = {
  maxTargets: {
    name: 'Max Targets',
    maxValue: 1,
    label: '+',
  },
} as const;

const hiveDronesModAttributes = {
  damage: {
    name: 'Damage',
    maxValue: 5,
    label: '%',
  },
  healing: {
    name: 'Healing',
    maxValue: 5,
    label: '%',
  },
  reviverArmorRepair: {
    name: 'Reviver Armor Repair',
    maxValue: 10,
    label: '%',
  },
  stimEfficiency: {
    name: 'Stim Efficiency',
    maxValue: 10,
    label: '%',
  },
} as const;

const hiveLauncherModAttributes = {
  range: {
    name: 'Range',
    maxValue: 5,
    label: '%',
  },
  repairCharges: {
    name: 'Repair Charges',
    maxValue: 4,
    label: '+',
  },
  stimCharges: {
    name: 'Stim Charges',
    maxValue: 4,
    label: '+',
  },
  stingerCharges: {
    name: 'Stinger Charges',
    maxValue: 4,
    label: '+',
  },
} as const;

const hiveSystemModAttributes = {
  duration: {
    name: 'Duration',
    maxValue: 5,
    label: '%',
  },
  health: {
    name: 'Health',
    maxValue: 10,
    label: '%',
  },
} as const;

const pulseCoilModAttributes = {
  chargeSpeed: {
    name: 'Charge Speed',
    maxValue: 10,
    label: '%',
  },
  coneSize: {
    name: 'Cone Size',
    maxValue: 7.5,
    label: '%',
  },
  radius: {
    name: 'Radius',
    maxValue: 10,
    label: '%',
  },
} as const;

const pulseHousingModAttributes = {
  effectDuration: {
    name: 'Effect Duration',
    maxValue: 10,
    label: '%',
  },
  health: {
    name: 'Health',
    maxValue: 20,
    label: '%',
  },
  skillHaste: {
    name: 'Skill Haste',
    maxValue: 6,
    label: '%',
  },
} as const;

const seekerMineDriveModAttributes = {
  damage: {
    name: 'Damage',
    maxValue: 5,
    label: '%',
  },
  radius: {
    name: 'Radius',
    maxValue: 5,
    label: '%',
  },
  skillHaste: {
    name: 'Skill Haste',
    maxValue: 7.5,
    label: '%',
  },
} as const;

const seekerMinePayloadModAttributes = {
  damage: {
    name: 'Damage',
    maxValue: 5,
    label: '%',
  },
  healing: {
    name: 'Healing',
    maxValue: 7.5,
    label: '%',
  },
  skillHaste: {
    name: 'Skill Haste',
    maxValue: 6,
    label: '%',
  },
} as const;

const seekerMineTargetingModAttributes = {
  clusterMines: {
    name: 'Cluster Mines',
    maxValue: 1,
    label: '+',
  },
  health: {
    name: 'Health',
    maxValue: 7.5,
    label: '%',
  },
} as const;

const shieldCircuitBoardModAttributes = {
  damageBonusPerEnemy: {
    name: 'Damage Bonus Per Enemy',
    maxValue: 1,
    label: '%',
  },
  deflectorDamage: {
    name: 'Deflector Damage',
    maxValue: 5,
    label: '%',
  },
  holsteredRegeneration: {
    name: 'Holstered Regeneration',
    maxValue: 5,
    label: '%',
  },
  shieldHealth: {
    name: 'Shield Health',
    maxValue: 5,
    label: '%',
  },
} as const;

const shieldGyroModAttributes = {
  damageBonusPerEnemy: {
    name: 'Damage Bonus Per Enemy',
    maxValue: 5,
    label: '%',
  },
  deflectorDamage: {
    name: 'Deflector Damage',
    maxValue: 5,
    label: '%',
  },
  holsteredRegeneration: {
    name: 'Holstered Regeneration',
    maxValue: 5,
    label: '%',
  },
} as const;

const shieldHardCoatingModAttributes = {
  activeRegeneration: {
    name: 'Active Regeneration',
    maxValue: 5,
    label: '%',
  },
  deflectorDamage: {
    name: 'Deflector Damage',
    maxValue: 5,
    label: '%',
  },
  shieldHealth: {
    name: 'Shield Health',
    maxValue: 5,
    label: '%',
  },
} as const;

const stickyBombLauncherModAttributes = {
  blastRadius: {
    name: 'Blast Radius',
    maxValue: 6,
    label: '%',
  },
  duration: {
    name: 'Duration',
    maxValue: 7.5,
    label: '%',
  },
  skillHaste: {
    name: 'Skill Haste',
    maxValue: 5,
    label: '%',
  },
} as const;

const stickyBombPayloadModAttributes = {
  blastRadius: {
    name: 'Blast Radius',
    maxValue: 6,
    label: '%',
  },
  burnDuration: {
    name: 'Burn Duration',
    maxValue: 5,
    label: '%',
  },
  damage: {
    name: 'Damage',
    maxValue: 7.5,
    label: '%',
  },
} as const;

const trapChargeModAttributes = {
  duration: {
    name: 'Duration',
    maxValue: 5,
    label: '%',
  },
} as const;

const trapElectronicsModAttributes = {
  duration: {
    name: 'Duration',
    maxValue: 7.5,
    label: '%',
  },
  shockRadius: {
    name: 'Shock Radius',
    maxValue: 7.5,
    label: '%',
  },
} as const;

const turretFiringMechanismModAttributes = {
  burnDamage: {
    name: 'Burn Damage',
    maxValue: 5,
    label: '%',
  },
  damage: {
    name: 'Damage',
    maxValue: 5,
    label: '%',
  },
} as const;

const turretHousingModAttributes = {
  duration: {
    name: 'Duration',
    maxValue: 7.5,
    label: '%',
  },
  extraMortarAmmo: {
    name: 'Extra Mortar Ammo',
    maxValue: 1,
    label: '+',
  },
  extraSniperAmmo: {
    name: 'Extra Sniper Ammo',
    maxValue: 1,
    label: '+',
  },
  health: {
    name: 'Health',
    maxValue: 10,
    label: '%',
  },
} as const;

const turretTargetingModAttributes = {
  duration: {
    name: 'Duration',
    maxValue: 7.5,
    label: '%',
  },
  skillHaste: {
    name: 'Skill Haste',
    maxValue: 7.5,
    label: '%',
  },
} as const;

export const skillModAttributes = {
  chemLauncher: {
    agitator: chemLauncherAgitatorModAttributes,
    pneumatics: chemLauncherPneumaticsModAttributes,
  },
  decoy: {
    housing: decoyHousingModAttributes,
    projector: decoyProjectorModAttributes,
  },
  drone: {
    battery: droneBatteryModAttributes,
    feed: droneFeedModAttributes,
    hull: droneHullModAttributes,
  },
  firefly: {
    payload: fireflyPayloadModAttributes,
    propulsion: fireflyPropulsionModAttributes,
    targeting: fireflyTargetingModAttributes,
  },
  hive: {
    drones: hiveDronesModAttributes,
    launcher: hiveLauncherModAttributes,
    system: hiveSystemModAttributes,
  },
  pulse: {
    coil: pulseCoilModAttributes,
    housing: pulseHousingModAttributes,
  },
  seekerMine: {
    drive: seekerMineDriveModAttributes,
    payload: seekerMinePayloadModAttributes,
    targeting: seekerMineTargetingModAttributes,
  },
  shield: {
    circuitBoard: shieldCircuitBoardModAttributes,
    gyro: shieldGyroModAttributes,
    hardCoating: shieldHardCoatingModAttributes,
  },
  stickyBomb: {
    launcher: stickyBombLauncherModAttributes,
    payload: stickyBombPayloadModAttributes,
  },
  trap: {
    charge: trapChargeModAttributes,
    electronics: trapElectronicsModAttributes,
  },
  turret: {
    firingMechanism: turretFiringMechanismModAttributes,
    housing: turretHousingModAttributes,
    targeting: turretTargetingModAttributes,
  },
} as const;
