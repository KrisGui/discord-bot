import { BaseSkill } from './BaseSkill';

type SeekerMineVariants = 'Explosive' | 'Airburst' | 'Cluster' | 'Mender';

interface SeekerMineProps {
  displayName: 'Seeker Mine';
  mods: {
    'Skill Mod Slot': SeekerMineVariants;
    'Drive Slot': unknown | null;
    'Targeting Slot': unknown | null;
    'Payload Slot': unknown | null;
  };
}

export class SeekerMine extends BaseSkill<SeekerMineProps> {
  constructor(props: SeekerMineProps) {
    super(props);
  }

  getBaseStats(): unknown {
    if (this.props.mods['Skill Mod Slot'] === 'Explosive') {
      return 'base stats for Explosive Seeker Mine';
    }

    if (this.props.mods['Skill Mod Slot'] === 'Airburst') {
      return 'base stats for Airburst Seeker Mine';
    }

    if (this.props.mods['Skill Mod Slot'] === 'Cluster') {
      return 'base stats for Cluster Seeker Mine';
    }

    if (this.props.mods['Skill Mod Slot'] === 'Mender') {
      return 'base stats for Mender Seeker Mine';
    }
  }
}
