export enum ChemLauncherAgitatorModNames {
  'Cell Penetrating Peptide',
  'Chromatics Training',
  'Feed Strip',
  'Imbued Metal String',
  'Piranha Solution',
  'PVA Polymer Coating',
  'Slip Fit Tube',
}

export enum ChemLauncherPneumaticsModNames {
  'Disintegrating Links',
  'Ecotoxicology Research',
  'Hydrochloric Infusion',
  'Liquid Nitrogen Cooling System',
  'Pharmacokinetic Enhancer',
  'Ultra-Thin Cartridges',
}

export enum DecoyHousingModNames {
  'Decoy Housing Shell',
};

export enum DecoyProjectorModNames {
  'Decoy Projector Internals',
};

export enum DroneBatteryModNames {
  'Blitzkrieg Blasting Powder',
  'Electric Soldering Tool',
  'Gimbal Vibration Damping',
};

export enum DroneFeedModNames {
  'Additional Ordinance',
  'Gaffer Tape',
  'Hollow-Point Bullets',
};

export enum DroneHullModNames {
  'Carbon Fiber Frame',
  'Explosive Requisition',
  'Freedom Package',
  'Reinforced Rotor Blades',
  'Terminal Ballistics',
  'Trauma Analyzer',
};

export enum FireflyPayloadModNames {
  'Dielectric Elastomers',
  'Propantriol Adhesive',
  'Tungsten Compound',
  'Vac Pack',
};

export enum FireflyPropulsionModNames {
  'Alignment Valve',
  'Hardened Casing',
  'Micro Conduits',
};

export enum FireflyTargetingModNames {
  'Guiding System',
  'Microfiller Resin',
  'RAM Surplus',
};

export enum HiveDronesModNames {
  'Experimental Blend',
  'Extra Payload',
  'Radar Signal Antennas',
};

export enum HiveLauncherModNames {
  'Cooling Vents',
  'Internal Storage',
  'Nitroglycerin Mixture',
  'Steel Harness',
};

export enum HiveSystemModNames {
  'Backpack Battery',
  'Network Firewall',
  'Polycarbonate Housing',
  'Swarm Conrol',
};

export enum PulseCoilModNames {
  'Distributed Architecture',
  'Unstable Oscillator',
};

export enum PulseHousingModNames {
  'Atmospheric Analyzer',
  'Exploded Blueprint',
  'Heating Mantle',
  'Super Glue',
};

export enum SeekerMineDriveModNames {
  'Brushless DC-Motor',
  'Delivery System Upgrade',
  'Mini Electric Motor',
};

export enum SeekerMineTargetingModNames {
  'Ball Bearings',
  'Magnetic Disc',
  'Phosphorus Ingredient',
};

export enum SeekerMinePayloadModNames {
  'Larrea Tridentata Infusion',
  'RDX Pellet Payload',
  'Russian Doll Protocol',
  'Sturdy Piston',
};

export enum ShieldCircuitBoardModNames {
  'Magnetorestictive Material',
  'Smart UHMWPE Lexicon',
  'Synthetic Mineral Frame',
  'Thermoresponsive Polymer',
};

export enum ShieldGyroModNames {
  'Dielectric Elastomers',
  'Liquid Metal Microdroplets',
  'Supramolecular Networks',
  'Weaved Aramid Fiber',
};

export enum ShieldHardCoatingModNames {
  'Adaptive Insulation Foam',
  'Cementitious Material',
  'Shape-Memory Alloy',
  'Titanium Reinforcement',
};

export enum StickyBombLauncherModNames {
  'Improved Sticky Launcher',
};

export enum StickyBombPayloadModNames {
  'Improved Sticky Payload',
};

export enum TrapChargeModNames {
  'Trap Charge Improvement',
};

export enum TrapElectronicsModNames {
  'Trap Electronics Improvement',
  'Trap Electronics Upgrade',
};

export enum TurretFiringMechanismModNames {
  'Cyclone Magazine',
  'Lubrication Gel',
  'Magnetic Rail',
};

export enum TurretHousingModNames {
  'Ammo Box',
  'Organic Circuits',
  'Spare Parts',
  'Weather Coating',
};

export enum TurretTargetingModNames {
  'Carbon Fiber Barrel',
  'Multi-Tool',
  'SHD CPU V.2',
};

export const skillModNames = {
  chemLauncher: {
    agitator: ChemLauncherAgitatorModNames,
    pneumatics: ChemLauncherPneumaticsModNames,
  },
  decoy: {
    housing: DecoyHousingModNames,
    projector: DecoyProjectorModNames,
  },
  drone: {
    battery: DroneBatteryModNames,
    feed: DroneFeedModNames,
    hull: DroneHullModNames,
  },
  firefly: {
    payload: FireflyPayloadModNames,
    propulsion: FireflyPropulsionModNames,
    targeting: FireflyTargetingModNames,
  },
  hive: {
    drones: HiveDronesModNames,
    launcher: HiveLauncherModNames,
    system: HiveSystemModNames,
  },
  pulse: {
    coil: PulseCoilModNames,
    housing: PulseHousingModNames,
  },
  seekerMine: {
    drive: SeekerMineDriveModNames,
    payload: SeekerMinePayloadModNames,
    targeting: SeekerMineTargetingModNames,
  },
  shield: {
    circuitBoard: ShieldCircuitBoardModNames,
    gyro: ShieldGyroModNames,
    hardCoating: ShieldHardCoatingModNames,
  },
  stickyBomb: {
    launcher: StickyBombLauncherModNames,
    payload: StickyBombPayloadModNames,
  },
  trap: {
    charge: TrapChargeModNames,
    electronics: TrapElectronicsModNames,
  },
  turret: {
    firingMechanism: TurretFiringMechanismModNames,
    housing: TurretHousingModNames,
    targeting: TurretTargetingModNames,
  },
} as const;
