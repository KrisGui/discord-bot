import {
  chemLauncherSlots,
  decoySlots,
  droneSlots,
  fireflySlots,
  hiveSlots,
  pulseSlots,
  seekerMineSlots,
  shieldSlots,
  stickyBombSlots,
  trapSlots,
  turretSlots,
} from './slots';
import {
  chemLauncherVariants,
  decoyVariants,
  droneVariants,
  fireflyVariants,
  hiveVariants,
  pulseVariants,
  seekerMineVariants,
  shieldVariants,
  stickyBombVariants,
  trapVariants,
  turretVariants,
} from './variants';

const skillMap = {
  chemLauncher: {
    name: 'Chem Launcher',
    variants: chemLauncherVariants,
    slots: chemLauncherSlots,
  },
  decoy: { name: 'Decoy', variants: decoyVariants, slots: decoySlots },
  drone: { name: 'Drone', variants: droneVariants, slots: droneSlots },
  firefly: {
    name: 'Firefly',
    variants: fireflyVariants,
    slots: fireflySlots,
  },
  hive: { name: 'Hive', variants: hiveVariants, slots: hiveSlots },
  pulse: { name: 'Pulse', variants: pulseVariants, slots: pulseSlots },
  seekerMine: {
    name: 'Seeker Mine',
    variants: seekerMineVariants,
    slots: seekerMineSlots,
  },
  shield: {
    name: 'Shield',
    variants: shieldVariants,
    slots: shieldSlots,
  },
  stickyBomb: {
    name: 'Sticky Bomb',
    variants: stickyBombVariants,
    slots: stickyBombSlots,
  },
  trap: { name: 'Trap', variants: trapVariants, slots: trapSlots },
  turret: {
    name: 'Turret',
    variants: turretVariants,
    slots: turretSlots,
  },
} as const;
