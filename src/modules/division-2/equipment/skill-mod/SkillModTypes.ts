interface SkillModTypes {
  trap: {
    charge: {
      modName: 'Trap Charge Improvement';
      attribute: {
        name: 'Duration';
        maxValue: 5;
        label: '%';
      };
    };
    electronics: {
      modName: 'Trap Electronics Improvement' | 'Trap Electronics Upgrade';
      attribute:
        | {
            name: 'Shock Radius';
            maxValue: 7.5;
            label: '%';
          }
        | {
            name: 'Duration';
            maxValue: 7.5;
            label: '%';
          };
    };
  };
  decoy: {
    housing: {
      modName: 'Decoy Housing Shell';
      attibute: {
        name: 'Health';
        maxValue: 7.5;
        label: '%';
      };
    };
    projector: {
      modName: 'Decoy Projector Internals';
      attribute: {
        name: 'Duration';
        maxValue: 7.5;
        label: '%';
      };
    };
  };
  pulse: {
    coil: {
      modName: 'Distributed Architecture' | 'Unstable Oscillator';
      attribute:
        | {
            name: 'Radius';
            maxValue: 10;
            label: '%';
          }
        | {
            name: 'Charge Speed';
            maxValue: 10;
            label: '%';
          }
        | {
            name: 'Cone Size';
            maxValue: 7.5;
            label: '%';
          };
    };
    housing: {
      modName:
        | 'Atmospheric Analyzer'
        | 'Heating Mantle'
        | 'Super Glue'
        | 'Exploded Blueprint';
      attribute:
        | {
            name: 'Effect Duration';
            maxValue: 10;
            label: '%';
          }
        | {
            name: 'Skill Haste';
            maxValue: 6;
            label: '%';
          }
        | {
            name: 'Health';
            maxValue: 20;
            label: '%';
          };
    };
  };
  turret: {
    firingMechanism: {
      modName: 'Cyclone Magazine' | 'Lubrication Gel' | 'Magnetic Rail';
      attribute:
        | {
            name: 'Damage';
            maxValue: 5;
            label: '%';
          }
        | {
            name: 'Burn Damage';
            maxValue: 5;
            label: '%';
          };
    };
    housing: {
      modName:
        | 'Ammo Box'
        | 'Organic Circuits'
        | 'Spare Parts'
        | 'Weather Coating';
      attribute:
        | {
            name: 'Duration';
            maxValue: 7.5;
            label: '%';
          }
        | {
            name: 'Extra Mortar Ammo';
            maxValue: 1;
            label: '+';
          }
        | {
            name: 'Extra Sniper Ammo';
            maxValue: 1;
            label: '+';
          }
        | {
            name: 'Health';
            maxValue: 10;
            label: '%';
          };
    };
    targeting: {
      modName: 'Carbon Fiber Barrel' | 'Multi-Tool' | 'SHD CPU V.2';
      attribute:
        | {
            name: 'Duration';
            maxValue: 7.5;
            label: '%';
          }
        | {
            name: 'Skill Haste';
            maxValue: 7.5;
            label: '%';
          };
    };
  };
  hive: {
    drones: {
      modName: 'Experimental Blend' | 'Extra Payload' | 'Radar Signal Antennas';
      attribute:
        | {
            name: 'Stim Efficiency';
            maxValue: 10;
            label: '%';
          }
        | {
            name: 'Healing';
            maxValue: 5;
            label: '%';
          }
        | {
            name: 'Reviver Armor Repair';
            maxValue: 10;
            label: '%';
          }
        | {
            name: 'Damage';
            maxValue: 5;
            label: '%';
          };
    };
    launcher: {
      modName:
        | 'Cooling Vents'
        | 'Internal Storage'
        | 'Nitroglycerin Mixture'
        | 'Steel Harness';
      attribute:
        | {
            name: 'Range';
            maxValue: 5;
            label: '%';
          }
        | {
            name: 'Repair Charges';
            maxValue: 4;
            label: '+';
          }
        | {
            name: 'Stinger Charges';
            maxValue: 4;
            label: '+';
          }
        | {
            name: 'Stim Charges';
            maxValue: 4;
            label: '+';
          };
    };
    system: {
      modName:
        | 'Backpack Battery'
        | 'Network Firewall'
        | 'Polycarbonate Housing'
        | 'Swarm Conrol';
      attribute:
        | {
            name: 'Health';
            maxValue: 10;
            label: '%';
          }
        | {
            name: 'Duration';
            maxValue: 5;
            label: '%';
          };
    };
  };
  chemLauncher: {
    agitator: {
      modName:
        | 'Cell Penetrating Peptide'
        | 'Imbued Metal String'
        | 'Slip Fit Tube'
        | 'Piranha Solution'
        | 'PVA Polymer Coating'
        | 'Chromatics Training'
        | 'Feed Strip';
      attribute:
        | {
            name: 'Ensnare Duration';
            maxValue: 10;
            label: '%';
          }
        | {
            name: 'Heal';
            maxValue: 7.5;
            label: '%';
          }
        | {
            name: 'Ensnare Health';
            maxValue: 18.6;
            label: '%';
          }
        | {
            name: 'Burn Strength';
            maxValue: 7.5;
            label: '%';
          }
        | {
            name: 'Damage';
            maxValue: 5;
            label: '%';
          };
    };
    pneumatics: {
      modName:
        | 'Disintegrating Links'
        | 'Ecotoxicology Research'
        | 'Hydrochloric Infusion'
        | 'Liquid Nitrogen Cooling System'
        | 'Ultra-Thin Cartridges'
        | 'Pharmacokinetic Enhancer';
      attribute:
        | { name: 'Ammo'; maxValue: 1; label: '+' }
        | {
            name: 'Duration';
            maxValue: 7.5;
            label: '%';
          }
        | {
            name: 'Skill Haste';
            maxValue: 7.5;
            label: '%';
          }
        | {
            name: 'Radius';
            maxValue: 7.5;
            label: '%';
          };
    };
  };
  firefly: {
    propulsion: {
      modName: 'Alignment Valve' | 'Hardened Casing' | 'Micro Conduits';
      attribute:
        | {
            name: 'Skill Haste';
            maxValue: 7.5;
            label: '%';
          }
        | {
            name: 'Speed';
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
            maxValue: 7.5;
            label: '%';
          }
        | {
            name: 'Damage';
            maxValue: 7.5;
            label: '%';
          };
    };
    targeting: {
      modName: 'Guiding System' | 'Microfiller Resin' | 'RAM Surplus';
      attribute: {
        name: 'Max Targets';
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
            maxValue: 7.5;
            label: '%';
          }
        | {
            name: 'Damage';
            maxValue: 5;
            label: '%';
          }
        | {
            name: 'Radius';
            maxValue: 5;
            label: '%^';
          };
    };
    targeting: {
      modName: 'Ball Bearings' | 'Magnetic Disc' | 'Phosphorus Ingredient';
      attribute:
        | {
            name: 'Cluster Mines';
            maxValue: 1;
            label: '+';
          }
        | {
            name: 'Health';
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
            maxValue: 6;
            label: '%';
          }
        | {
            name: 'Healing';
            maxValue: 7.5;
            label: '%';
          }
        | {
            name: 'Damage';
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
            maxValue: 7.5;
            label: '%';
          }
        | {
            name: 'Deflector Duration';
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
            maxValue: 10;
            label: '%';
          }
        | {
            name: 'Extra Bombs';
            maxValue: 2;
            label: '+';
          }
        | {
            name: 'Scan Range';
            maxValue: 10;
            label: '%';
          };
    };
    feed: {
      modName: 'Additional Ordinance' | 'Gaffer Tape' | 'Hollow-Point Bullets';
      attribute:
        | {
            name: 'Damage';
            maxValue: 5;
            label: '%';
          }
        | {
            name: 'Damage Reduction';
            maxValue: 7.5;
            label: '%';
          }
        | {
            name: 'Armor Repair';
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
            maxValue: 1;
            label: '%';
          }
        | {
            name: 'Holstered Regeneration';
            maxValue: 5;
            label: '%';
          }
        | {
            name: 'Shield Health';
            maxValue: 5;
            label: '%';
          }
        | {
            name: 'Deflector Damage';
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
            maxValue: 5;
            label: '%';
          }
        | {
            name: 'Deflector Damage';
            maxValue: 5;
            label: '%';
          }
        | {
            name: 'Shield Health';
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
            maxValue: 5;
            label: '%';
          }
        | {
            name: 'Damage Bonus Per Enemy';
            maxValue: 5;
            label: '%';
          }
        | {
            name: 'Deflector Damage';
            maxValue: 5;
            label: '%';
          };
    };
  };
}
