const ChemLauncherVariants = {
  firestarter: { name: 'Firestarter', stats: {} },
  oxidizer: { name: 'Oxidizer', stats: {} },
  reinforcer: { name: 'Reinforcer', stats: {} },
  riotFoam: { name: 'Riot Foam', stats: {} },
} as const;

const DecoyVariants = {
  holographicDistraction: { name: 'Holographic Distraction', stats: {} },
} as const;

const DroneVariants = {
  bombadier: { name: 'Bombadier', stats: {} },
  defender: { name: 'Defender', stats: {} },
  fixer: { name: 'Fixer', stats: {} },
  striker: { name: 'Striker', stats: {} },
  tactician: { name: 'Tactician', stats: {} },
} as const;

const FireflyVariants = {
  blinder: { name: 'Blinder', stats: {} },
  burster: { name: 'Burster', stats: {} },
  demolisher: { name: 'Demolisher', stats: {} },
} as const;

const HiveVariants = {
  artificer: { name: 'Artificer', stats: {} },
  booster: { name: 'Booster', stats: {} },
  restorer: { name: 'Restorer', stats: {} },
  reviver: { name: 'Reviver', stats: {} },
  stinger: { name: 'Stinger', stats: {} },
} as const;

const PulseVariants = {
  achilles: { name: 'Achilles', stats: {} },
  bamshee: { name: 'Banshee', stats: {} },
  jammer: { name: 'Jammer', stats: {} },
  remote: { name: 'Remote', stats: {} },
  scanner: { name: 'Scanner', stats: {} },
} as const;

const SeekerMineVariants = {
  airburst: { name: 'Airburst', stats: {} },
  cluster: { name: 'Cluster', stats: {} },
  explosive: { name: 'Explosive', stats: {} },
  mender: { name: 'Mender', stats: {} },
} as const;

const ShieldVariants = {
  bulwark: { name: 'Bulwark', stats: {} },
  crusader: { name: 'Crusader', stats: {} },
  deflector: { name: 'Deflector', stats: {} },
  striker: { name: 'Striker', stats: {} },
} as const;

const StickyBombVariants = {
  burn: { name: 'Burn', stats: {} },
  emp: { name: 'EMP', stats: {} },
  explosive: { name: 'Explosive', stats: {} },
} as const;

const TrapVariants = {
  repair: { name: 'Repair', stats: {} },
  shock: { name: 'Shock', stats: {} },
  shrapnel: { name: 'Shrapnel', stats: {} },
} as const;

const TurretVariants = {
  artillery: { name: 'Artillery', stats: {} },
  assault: { name: 'Assault', stats: {} },
  incinerator: { name: 'Incinerator', stats: {} },
  sniper: { name: 'Sniper', stats: {} },
} as const;

export const skillVariants = {
  chemLauncher: ChemLauncherVariants,
  decoy: DecoyVariants,
  drone: DroneVariants,
  firefly: FireflyVariants,
  hive: HiveVariants,
  pulse: PulseVariants,
  seekerMine: SeekerMineVariants,
  shield: ShieldVariants,
  stickyBomb: StickyBombVariants,
  trap: TrapVariants,
  turret: TurretVariants,
} as const;
