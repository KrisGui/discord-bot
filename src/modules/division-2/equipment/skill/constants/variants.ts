export const chemLauncherVariants = {
  firestarter: { name: 'Firestarter', attributes: {} },
  oxidizer: { name: 'Oxidizer', attributes: {} },
  reinforcer: { name: 'Reinforcer', attributes: {} },
  riotFoam: { name: 'Riot Foam', attributes: {} },
} as const;

export const decoyVariants = {
  holographicDistraction: { name: 'Holographic Distraction', attributes: {} },
} as const;

export const droneVariants = {
  bombadier: { name: 'Bombadier', attributes: {} },
  defender: { name: 'Defender', attributes: {} },
  fixer: { name: 'Fixer', attributes: {} },
  striker: { name: 'Striker', attributes: {} },
  tactician: { name: 'Tactician', attributes: {} },
} as const;

export const fireflyVariants = {
  blinder: { name: 'Blinder', attributes: {} },
  burster: { name: 'Burster', attributes: {} },
  demolisher: { name: 'Demolisher', attributes: {} },
} as const;

export const hiveVariants = {
  artificer: { name: 'Artificer', attributes: {} },
  booster: { name: 'Booster', attributes: {} },
  restorer: { name: 'Restorer', attributes: {} },
  reviver: { name: 'Reviver', attributes: {} },
  stinger: { name: 'Stinger', attributes: {} },
} as const;

export const pulseVariants = {
  achilles: { name: 'Achilles', attributes: {} },
  bamshee: { name: 'Banshee', attributes: {} },
  jammer: { name: 'Jammer', attributes: {} },
  remote: { name: 'Remote', attributes: {} },
  scanner: { name: 'Scanner', attributes: {} },
} as const;

export const seekerMineVariants = {
  airburst: { name: 'Airburst', attributes: {} },
  cluster: { name: 'Cluster', attributes: {} },
  explosive: { name: 'Explosive', attributes: {} },
  mender: { name: 'Mender', attributes: {} },
} as const;

export const shieldVariants = {
  bulwark: { name: 'Bulwark', attributes: {} },
  crusader: { name: 'Crusader', attributes: {} },
  deflector: { name: 'Deflector', attributes: {} },
  striker: { name: 'Striker', attributes: {} },
} as const;

export const stickyBombVariants = {
  burn: { name: 'Burn', attributes: {} },
  emp: { name: 'EMP', attributes: {} },
  explosive: { name: 'Explosive', attributes: {} },
} as const;

export const trapVariants = {
  repair: { name: 'Repair', attributes: {} },
  shock: { name: 'Shock', attributes: {} },
  shrapnel: { name: 'Shrapnel', attributes: {} },
} as const;

export const turretVariants = {
  artillery: { name: 'Artillery', attributes: {} },
  assault: { name: 'Assault', attributes: {} },
  incinerator: { name: 'Incinerator', attributes: {} },
  sniper: { name: 'Sniper', attributes: {} },
} as const;

export const skillVariants = {
  chemLauncher: chemLauncherVariants,
  decoy: decoyVariants,
  drone: droneVariants,
  firefly: fireflyVariants,
  hive: hiveVariants,
  pulse: pulseVariants,
  seekerMine: seekerMineVariants,
  shield: shieldVariants,
  stickyBomb: stickyBombVariants,
  trap: trapVariants,
  turret: turretVariants,
} as const;
