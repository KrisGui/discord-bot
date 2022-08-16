import { BaseSkill } from './BaseSkill';

type ChemLauncherVariants =
  | 'Reinforcer'
  | 'Firestarter'
  | 'Riot Foam'
  | 'Oxidizer';

interface ChemLauncherProps {
  displayName: 'Chem Launcher';
  mods: {
    'Skill Mod Slot': ChemLauncherVariants;
    'Agitator Slot': unknown | null;
    'Pneumatics Slot': unknown | null;
  };
}

export class ChemLauncher extends BaseSkill<ChemLauncherProps> {
  constructor(props: ChemLauncherProps) {
    super(props);
  }

  getBaseStats(): unknown {
    if (this.props.mods['Skill Mod Slot'] === 'Reinforcer') {
      return 'base stats for Reinforcer Chem Launcher';
    }

    if (this.props.mods['Skill Mod Slot'] === 'Firestarter') {
      return 'base stats for Firestarter Chem Launcher';
    }

    if (this.props.mods['Skill Mod Slot'] === 'Riot Foam') {
      return 'base stats for Riot Foam Chem Launcher';
    }

    if (this.props.mods['Skill Mod Slot'] === 'Oxidizer') {
      return 'base stats for Oxidizer Chem Launcher';
    }
  }
}
