import { BaseSkill } from './BaseSkill';

type StickyBombVariants = 'Burn' | 'EMP' | 'Explosive';

interface StickyBombProps {
  displayName: 'Sticky Bomb';
  mods: {
    'Skill Mod Slot': StickyBombVariants;
    'Launcher Slot': unknown | null;
    'Payload Slot': unknown | null;
  };
}

export class StickyBomb extends BaseSkill<StickyBombProps> {
  constructor(props: StickyBombProps) {
    super(props);
  }

  getBaseStats(): unknown {
    if (this.props.mods['Skill Mod Slot'] === 'Burn') {
      return 'base stats for Burn Sticky Bomb';
    }

    if (this.props.mods['Skill Mod Slot'] === 'EMP') {
      return 'base states for EMP Sticky Bomb';
    }

    if (this.props.mods['Skill Mod Slot'] === 'Explosive') {
      return 'base stats for Explosive Sticky Bomb';
    }
  }
}
