import {
  chemLauncherAgitatorModData,
  chemLauncherPneumaticsModData,
  decoyHousingModData,
  decoyProjectorModData,
  droneBatteryModData,
  droneFeedModData,
  droneHullModData,
  fireflyPayloadModData,
  fireflyPropulsionModData,
  fireflyTargetingModData,
  hiveDronesModData,
  hiveLauncherModData,
  hiveSystemModData,
  pulseCoilModData,
  pulseHousingModData,
  seekerMineDriveModData,
  seekerMinePayloadModData,
  seekerMineTargetingModData,
  shieldCircuitBoardModData,
  shieldGyroModData,
  shieldHardCoatingModData,
  sitckyBombLauncherModData,
  stickyBombPayloadModData,
  trapChargeModData,
  trapElectronicsModData,
  turretFiringMechanismModData,
  turretHousingModData,
  turretTargetingModData,
} from '../../skill-mod/constants';

export const chemLauncherSlots = {
  agitator: {
    name: 'Agitator Slot',
    mod: null,
    modData: chemLauncherAgitatorModData,
  },
  pneumatics: {
    name: 'Pneumatics Slot',
    mod: null,
    modData: chemLauncherPneumaticsModData,
  },
} as const;

export const decoySlots = {
  housing: {
    name: 'Housing Slot',
    mod: null,
    modData: decoyHousingModData,
  },
  projector: {
    name: 'Projector Slot',
    mod: null,
    modData: decoyProjectorModData,
  },
} as const;

export const droneSlots = {
  battery: {
    name: 'Battery Slot',
    mod: null,
    modData: droneBatteryModData,
  },
  feed: {
    name: 'Feed Slot',
    mod: null,
    modData: droneFeedModData,
  },
  hull: {
    name: 'Hull Slot',
    mod: null,
    modData: droneHullModData,
  },
} as const;

export const fireflySlots = {
  payload: {
    name: 'Payload Slot',
    mod: null,
    modData: fireflyPayloadModData,
  },
  propulsion: {
    name: 'Propulsion Slot',
    mod: null,
    modData: fireflyPropulsionModData,
  },
  targeting: {
    name: 'Targeting Slot',
    mod: null,
    modData: fireflyTargetingModData,
  },
} as const;

export const hiveSlots = {
  drones: {
    name: 'Drones Slot',
    mod: null,
    modData: hiveDronesModData,
  },
  launcher: {
    name: 'Launcher Slot',
    mod: null,
    modData: hiveLauncherModData,
  },
  system: {
    name: 'System Slot',
    mod: null,
    modData: hiveSystemModData,
  },
} as const;

export const pulseSlots = {
  coil: {
    name: 'Coil Slot',
    mod: null,
    modData: pulseCoilModData,
  },
  housing: {
    name: 'Housing Slot',
    mod: null,
    modData: pulseHousingModData,
  },
} as const;

export const seekerMineSlots = {
  drive: {
    name: 'Drive Slot',
    mod: null,
    modData: seekerMineDriveModData,
  },
  payload: {
    name: 'Payload Slot',
    mod: null,
    modData: seekerMinePayloadModData,
  },
  targeting: {
    name: 'Targeting Slot',
    mod: null,
    modData: seekerMineTargetingModData,
  },
} as const;

export const shieldSlots = {
  circuitBoard: {
    name: 'Circuit Board Slot',
    mod: null,
    modData: shieldCircuitBoardModData,
  },
  gyro: {
    name: 'Gyro Slot',
    mod: null,
    modData: shieldGyroModData,
  },
  hardCoating: {
    name: 'Hard Coating Slot',
    mod: null,
    modData: shieldHardCoatingModData,
  },
} as const;

export const stickyBombSlots = {
  launcher: {
    name: 'Launcher Slot',
    mod: null,
    modData: sitckyBombLauncherModData,
  },
  payload: {
    name: 'Payload Slot',
    mod: null,
    modData: stickyBombPayloadModData,
  },
} as const;

export const trapSlots = {
  charge: {
    name: 'Charge Slot',
    mod: null,
    modData: trapChargeModData,
  },
  electronics: {
    name: 'Electronics Slot',
    mod: null,
    modData: trapElectronicsModData,
  },
} as const;

export const turretSlots = {
  firingMechanism: {
    name: 'Firing Mechanism Slot',
    mod: null,
    modData: turretFiringMechanismModData,
  },
  housing: {
    name: 'Housing Slot',
    mod: null,
    modData: turretHousingModData,
  },
  targeting: {
    name: 'Targeting Slot',
    mod: null,
    modData: turretTargetingModData,
  },
} as const;

/** -------old--------------------------------------- */

const ChemLauncherSlots = {
  agitator: { name: 'Agitator Slot', mod: null },
  pneumatics: { name: 'Pneumatics Slot', mod: null },
} as const;

const DecoySlots = {
  housing: { name: 'Housing Slot', mod: null },
  projector: { name: 'Projector Slot', mod: null },
} as const;

const DroneSlots = {
  battery: { name: 'Battery Slot', mod: null },
  feed: { name: 'Feed Slot', mod: null },
  hull: { name: 'Hull Slot', mod: null },
} as const;

const FireflySlots = {
  payload: { name: 'Payload Slot', mod: null },
  propulsion: { name: 'Propulsion Slot', mod: null },
  targeting: { name: 'Targeting Slot', mod: null },
} as const;

const HiveSlots = {
  drones: { name: 'Drones Slot', mod: null },
  launcher: { name: 'Launcher Slot', mod: null },
  system: { name: 'System Slot', mod: null },
} as const;

const PulseSlots = {
  coil: { name: 'Coil Slot', mod: null },
  housing: { name: 'Housing Slot', mod: null },
} as const;

const SeekerMineSlots = {
  drive: { name: 'Drive Slot', mod: null },
  payload: { name: 'Payload Slot', mod: null },
  targeting: { name: 'Targeting Slot', mod: null },
} as const;

const ShieldSlots = {
  circuitBoard: { name: 'Circuit Board Slot', mod: null },
  gyro: { name: 'Gyro Slot', mod: null },
  hardCoating: { name: 'Hard Coating Slot', mod: null },
} as const;

const StickyBombSlots = {
  launcher: { name: 'Launcher Slot', mod: null },
  payload: { name: 'Payload Slot', mod: null },
} as const;

const TrapSlots = {
  charge: { name: 'Charge Slot', mod: null },
  electronics: { name: 'Electronics Slot', mod: null },
} as const;

const TurretSlots = {
  firingMechanism: { name: 'Firing Mechanism Slot', mod: null },
  housing: { name: 'Housing Slot', mod: null },
  targeting: { name: 'Targeting Slot', mod: null },
} as const;

export const skillSlots = {
  chemLauncher: ChemLauncherSlots,
  decoy: DecoySlots,
  drone: DroneSlots,
  firefly: FireflySlots,
  hive: HiveSlots,
  pulse: PulseSlots,
  seekerMine: SeekerMineSlots,
  shield: ShieldSlots,
  stickyBomb: StickyBombSlots,
  trap: TrapSlots,
  turret: TurretSlots,
} as const;
