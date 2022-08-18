interface SkillModTypes {
  firefly: {
    propulsion: {
      modName: 'Alignment Valve' | 'Hardened Casing' | 'Micro Conduits';
      attribute:
        | {
            name: 'Skill Haste';
            value: number;
            maxValue: 7.5;
            label: '%';
          }
        | {
            name: 'Speed';
            value: number;
            maxValue: 10;
            label: '%';
          };
    };
    payload: {
      modName:
        | 'Propantriol Adhesive'
        | 'Tungsten Compound'
        | 'Vac Pack'
        | 'Dielectric Elastomers';
      attribute:
        | {
            name: 'Blind Effect Duration';
            value: number;
            maxValue: 7.5;
            label: '%';
          }
        | {
            name: 'Damage';
            value: number;
            maxValue: 7.5;
            label: '%';
          };
    };
    targeting: {
      modName: 'Guiding System' | 'Microfiller Resin' | 'RAM Surplus';
      attribute: {
        name: 'Max Targets';
        value: number;
        maxValue: 1;
        label: '+';
      };
    };
  };
  seekerMine: {
    drive: {
      modName:
        | 'Brushless DC-Motor'
        | 'Delivery System Upgrade'
        | 'Mini Electric Motor';
      attribute:
        | {
            name: 'Skill Haste';
            value: number;
            maxValue: 7.5;
            label: '%';
          }
        | {
            name: 'Damage';
            value: number;
            maxValue: 5;
            label: '%';
          }
        | {
            name: 'Radius';
            value: number;
            maxValue: 5;
            label: '%^';
          };
    };
    targeting: {
      modName: 'Ball Bearings' | 'Magnetic Disc' | 'Phosphorus Ingredient';
      attribute:
        | {
            name: 'Cluster Mines';
            value: number;
            maxValue: 1;
            label: '+';
          }
        | {
            name: 'Health';
            value: number;
            maxValue: 7.5;
            label: '%';
          };
    };
    payload: {
      modName:
        | 'Larrea Tridentata Infusion'
        | 'RDX Pellet Payload'
        | 'Russian Doll Protocol'
        | 'Sturdy Piston';
      attribute:
        | {
            name: 'Skill Haste';
            value: number;
            maxValue: 6;
            label: '%';
          }
        | {
            name: 'Healing';
            value: number;
            maxValue: 7.5;
            label: '%';
          }
        | {
            name: 'Damage';
            value: number;
            maxValue: 5;
            label: '%';
          };
    };
  };
  drone: {
    battery: {
      modName:
        | 'Blitzkrieg Blasting Powder'
        | 'Electric Soldering Tool'
        | 'Gimbal Vibration Damping';
      attribute:
        | {
            name: 'Duration';
            value: number;
            maxValue: 7.5;
            label: '%';
          }
        | {
            name: 'Deflector Duration';
            value: number;
            maxValue: 7.5;
            label: '%';
          };
    };
    hull: {
      modName:
        | 'Carbon Fiber Frame'
        | 'Terminal Ballistics'
        | 'Trauma Analyzer'
        | 'Reinforced Rotor Blades'
        | 'Explosive Requisition';
      attribute:
        | {
            name: 'Health';
            value: number;
            maxValue: 10;
            label: '%';
          }
        | {
            name: 'Extra Bombs';
            value: number;
            maxValue: 2;
            label: '+';
          }
        | {
            name: 'Scan Range';
            value: number;
            maxValue: 10;
            label: '%';
          };
    };
    feed: {
      modName: 'Additional Ordinance' | 'Gaffer Tape' | 'Hollow-Point Bullets';
      attribute:
        | {
            name: 'Damage';
            value: number;
            maxValue: 5;
            label: '%';
          }
        | {
            name: 'Damage Reduction';
            value: number;
            maxValue: 7.5;
            label: '%';
          }
        | {
            name: 'Armor Repair';
            value: number;
            maxValue: 7.5;
            label: '%';
          };
    };
  };
  shield: {
    circuitBoard: {
      modName:
        | 'Magnetorestictive Material'
        | 'Smart UHMWPE Lexicon'
        | 'Synthetic Mineral Frame'
        | 'Thermoresponsive Polymer';
      attribute:
        | {
            name: 'Damage Bonus Per Enemy';
            value: number;
            maxValue: 1;
            label: '%';
          }
        | {
            name: 'Holstered Regeneration';
            value: number;
            maxValue: 5;
            label: '%';
          }
        | {
            name: 'Shield Health';
            value: number;
            maxValue: 5;
            label: '%';
          }
        | {
            name: 'Deflector Damage';
            value: number;
            maxValue: 5;
            label: '%';
          };
    };
    hardCoating: {
      modName:
        | 'Adaptive Insulation Foam'
        | 'Cementitious Material'
        | 'Shape-Memory Alloy'
        | 'Titanium Reinforcement';
      attribute:
        | {
            name: 'Active Regeneration';
            value: number;
            maxValue: 5;
            label: '%';
          }
        | {
            name: 'Deflector Damage';
            value: number;
            maxValue: 5;
            label: '%';
          }
        | {
            name: 'Shield Health';
            value: number;
            maxValue: 5;
            label: '%';
          };
    };
    gyro: {
      modName:
        | 'Dielectric Elastomers'
        | 'Liquid Metal Microdroplets'
        | 'Supramolecular Networks'
        | 'Weaved Aramid Fiber';
      attribute:
        | {
            name: 'Holstered Regeneration';
            value: number;
            maxValue: 5;
            label: '%';
          }
        | {
            name: 'Damage Bonus Per Enemy';
            value: number;
            maxValue: 5;
            label: '%';
          }
        | {
            name: 'Deflector Damage';
            value: number;
            maxValue: 5;
            label: '%';
          };
    };
  };
}
