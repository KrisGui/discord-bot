import { BaseSkill } from './BaseSkill';

type DecoyVariants = 'Holographic Distraction';

interface DecoyProps {
  displayName: 'Decoy';
  mods: {
    'Skill Mod Slot': DecoyVariants;
    'Housing Slot': unknown | null;
    'Projector Slot': unknown | null;
  };
}

export class Decoy extends BaseSkill<DecoyProps> {
  constructor(props: DecoyProps) {
    super(props)
  }

  getBaseStats(): unknown {
    if (this.props.mods['Skill Mod Slot'] === 'Holographic Distraction') {
      return 'base stats for Holographic Distraction Decoy';
    }
  }
}
