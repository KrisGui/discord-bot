const chemLauncherAgitatorModAttributesStatic = {
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

const chemLauncherPneumaticsModAttributesStatic = {
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

const decoyHousingModAttributesStatic = {
  health: {
    name: 'Health',
    maxValue: 7.5,
    label: '%',
  },
} as const;

const decoyProjectorModAttributesStatic = {
  duration: {
    name: 'Duration',
    maxValue: 7.5,
    label: '%',
  },
} as const;

const droneBatteryModAttributesStatic = {
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

const droneFeedModAttributesStatic = {
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

const droneHullModAttributesStatic = {
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

const fireflyPayloadModAttributesStatic = {
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

const fireflyPropulsionModAttributesStatic = {
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

const fireflyTargetingModAttributesStatic = {
  maxTargets: {
    name: 'Max Targets',
    maxValue: 1,
    label: '+',
  },
} as const;

const hiveDronesModAttributesStatic = {
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

const hiveLauncherModAttributesStatic = {
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

const hiveSystemModAttributesStatic = {
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

const pulseCoilModAttributesStatic = {
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

const pulseHousingModAttributesStatic = {
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

const seekerMineDriveModAttributesStatic = {
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

const seekerMinePayloadModAttributesStatic = {
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

const seekerMineTargetingModAttributesStatic = {
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

const shieldCircuitBoardModAttributesStatic = {
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

const shieldGyroModAttributesStatic = {
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

const shieldHardCoatingModAttributesStatic = {
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

const stickyBombLauncherModAttributesStatic = {
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

const stickyBombPayloadModAttributesStatic = {
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

const trapChargeModAttributesStatic = {
  duration: {
    name: 'Duration',
    maxValue: 5,
    label: '%',
  },
} as const;

const trapElectronicsModAttributesStatic = {
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

const turretFiringMechanismModAttributesStatic = {
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

const turretHousingModAttributesStatic = {
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

const turretTargetingModAttributesStatic = {
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
    agitator: chemLauncherAgitatorModAttributesStatic,
    pneumatics: chemLauncherPneumaticsModAttributesStatic,
  },
  decoy: {
    housing: decoyHousingModAttributesStatic,
    projector: decoyProjectorModAttributesStatic,
  },
  drone: {
    battery: droneBatteryModAttributesStatic,
    feed: droneFeedModAttributesStatic,
    hull: droneHullModAttributesStatic,
  },
  firefly: {
    payload: fireflyPayloadModAttributesStatic,
    propulsion: fireflyPropulsionModAttributesStatic,
    targeting: fireflyTargetingModAttributesStatic,
  },
  hive: {
    drones: hiveDronesModAttributesStatic,
    launcher: hiveLauncherModAttributesStatic,
    system: hiveSystemModAttributesStatic,
  },
  pulse: {
    coil: pulseCoilModAttributesStatic,
    housing: pulseHousingModAttributesStatic,
  },
  seekerMine: {
    drive: seekerMineDriveModAttributesStatic,
    payload: seekerMinePayloadModAttributesStatic,
    targeting: seekerMineTargetingModAttributesStatic,
  },
  shield: {
    circuitBoard: shieldCircuitBoardModAttributesStatic,
    gyro: shieldGyroModAttributesStatic,
    hardCoating: shieldHardCoatingModAttributesStatic,
  },
  stickyBomb: {
    launcher: stickyBombLauncherModAttributesStatic,
    payload: stickyBombPayloadModAttributesStatic,
  },
  trap: {
    charge: trapChargeModAttributesStatic,
    electronics: trapElectronicsModAttributesStatic,
  },
  turret: {
    firingMechanism: turretFiringMechanismModAttributesStatic,
    housing: turretHousingModAttributesStatic,
    targeting: turretTargetingModAttributesStatic,
  },
} as const;
