const chemLauncherSlots = {
  agitator: {
    name: 'Agitator Slot',
    mod: null,
  },
  pneumatics: {
    name: 'Pneumatics Slot',
    mod: null,
  },
} as const;

const decoySlots = {
  housing: {
    name: 'Housing Slot',
    mod: null,
  },
  projector: {
    name: 'Projector Slot',
    mod: null,
  },
} as const;

const droneSlots = {
  battery: {
    name: 'Battery Slot',
    mod: null,
  },
  feed: {
    name: 'Feed Slot',
    mod: null,
  },
  hull: {
    name: 'Hull Slot',
    mod: null,
  },
} as const;

const fireflySlots = {
  payload: {
    name: 'Payload Slot',
    mod: null,
  },
  propulsion: {
    name: 'Propulsion Slot',
    mod: null,
  },
  targeting: {
    name: 'Targeting Slot',
    mod: null,
  },
} as const;

const hiveSlots = {
  drones: {
    name: 'Drones Slot',
    mod: null,
  },
  launcher: {
    name: 'Launcher Slot',
    mod: null,
  },
  system: {
    name: 'System Slot',
    mod: null,
  },
} as const;

const pulseSlots = {
  coil: {
    name: 'Coil Slot',
    mod: null,
  },
  housing: {
    name: 'Housing Slot',
    mod: null,
  },
} as const;

const seekerMineSlots = {
  drive: {
    name: 'Drive Slot',
    mod: null,
  },
  payload: {
    name: 'Payload Slot',
    mod: null,
  },
  targeting: {
    name: 'Targeting Slot',
    mod: null,
  },
} as const;

const shieldSlots = {
  circuitBoard: {
    name: 'Circuit Board Slot',
    mod: null,
  },
  gyro: {
    name: 'Gyro Slot',
    mod: null,
  },
  hardCoating: {
    name: 'Hard Coating Slot',
    mod: null,
  },
} as const;

const stickyBombSlots = {
  launcher: {
    name: 'Launcher Slot',
    mod: null,
  },
  payload: {
    name: 'Payload Slot',
    mod: null,
  },
} as const;

const trapSlots = {
  charge: {
    name: 'Charge Slot',
    mod: null,
  },
  electronics: {
    name: 'Electronics Slot',
    mod: null,
  },
} as const;

const turretSlots = {
  firingMechanism: {
    name: 'Firing Mechanism Slot',
    mod: null,
  },
  housing: {
    name: 'Housing Slot',
    mod: null,
  },
  targeting: {
    name: 'Targeting Slot',
    mod: null,
  },
} as const;

export const skillSlots = {
  chemLauncher: chemLauncherSlots,
  decoy: decoySlots,
  drone: droneSlots,
  firefly: fireflySlots,
  hive: hiveSlots,
  pulse: pulseSlots,
  seekerMine: seekerMineSlots,
  shield: shieldSlots,
  stickyBomb: stickyBombSlots,
  trap: trapSlots,
  turret: turretSlots,
} as const;
