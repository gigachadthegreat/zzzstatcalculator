export interface Stat {
    type: string;
    amount: number;
}
export type attackTypeKey = keyof typeof AttackTypes;
export const AttackTypes = {
    BASIC: "BASIC",
    DASH: "DASH",
    ASSIST: "ASSIST",
    SPECIAL: "SPECIAL",
    EXSPECIAL: "EXSPECIAL",
    CHAIN: "CHAIN",
    ULT: "ULT",
};

export type statTypeKeys = keyof typeof StatType;
export const StatType = {
    CRIT_RATE: "CRIT_RATE",
    CRIT_DAMAGE: "CRIT_DAMAGE",
    ATTACK_PERCENT: "ATTACK_PERCENT",
    DEFENSE_PERCENT: "DEFENSE_PERCENT",
    HP_PERCENT: "HP_PERCENT",
    ATTACK_FLAT: "ATTACK_FLAT",
    DEFENSE_FLAT: "DEFENSE_FLAT",
    HP_FLAT: "HP_FLAT",
    ANOMALY_PROFICIENCY_FLAT: "ANOMALY_PROFICIENCY_FLAT",
    PEN_PERCENT: "PEN_PERCENT",
    PEN_FLAT: "PEN_FLAT",
    ELEMENT_PERCENT: "ELEMENT_PERCENT",
    ANOMALY_MASTERY_PERCENT: "ANOMALY_MASTERY_PERCENT",
    ANOMALY_MASTERY_FLAT: "ANOMALY_MASTERY_FLAT",
    ENERGY_REGEN_PERCENT: "ENERGY_REGEN_PERCENT",
    ENERGY_REGEN_FLAT: "ENERGY_REGEN_FLAT",
    IMPACT_PERCENT: "IMPACT_PERCENT",
    IMPACT_FLAT: "IMPACT_FLAT",
    NONE: "NONE",
} as const;

export const DriveDisks = {
    WoodpeckerElectro: {
        id: 31000,
        mainStat: StatType.CRIT_RATE,
    },
    PufferElectro: {
        id: 31100,
        mainStat: StatType.PEN_PERCENT,
    },
    ShockstarDisco: {
        id: 31200,
        mainStat: StatType.IMPACT_PERCENT,
    },
    FreedomBlues: {
        id: 31300,
        mainStat: StatType.ANOMALY_PROFICIENCY_FLAT,
    },
    HormonePunk: {
        id: 31400,
        mainStat: StatType.ATTACK_PERCENT,
    },
    SoulRocks: {
        id: 31500,
        mainStat: StatType.DEFENSE_PERCENT,
    },
    SwingJazz: {
        id: 31600,
        mainStat: StatType.ENERGY_REGEN_PERCENT,
    },
    ChaosJazz: {
        id: 31800,
        mainStat: StatType.ANOMALY_PROFICIENCY_FLAT,
    },
    ProtoPunk: {
        id: 31900,
        mainStat: StatType.NONE,
    },
    InfernoMetal: {
        id: 32200,
        mainStat: StatType.ELEMENT_PERCENT,
    },
    ChaosMetal: {
        id: 32300,
        mainStat: StatType.ELEMENT_PERCENT,
    },
    ThunderMetal: {
        id: 32400,
        mainStat: StatType.ELEMENT_PERCENT,
    },
    PolarMetal: {
        id: 32500,
        mainStat: StatType.ELEMENT_PERCENT,
    },
    FangedMetal: {
        id: 32600,
        mainStat: StatType.ELEMENT_PERCENT,
    },
    BranchBlade: {
        id: 32700,
        mainStat: StatType.CRIT_DAMAGE,
    },
    AstralVoice: {
        id: 32800,
        mainStat: StatType.ATTACK_PERCENT,
    },
    ShadowHarmony: {
        id: 32900,
        mainStat: StatType.NONE,
    },
    PhaethonsMelody: {
        id: 33000,
        mainStat: StatType.ANOMALY_MASTERY_PERCENT,
    },
    YunkuiTales: {
        id: 33100,
        mainStat: StatType.HP_PERCENT,
    },
    KingOfTheSummit: {
        id: 33200,
        mainStat: StatType.NONE,
    },
    DawnsBlossom: {
        id: 33300,
        mainStat: StatType.NONE,
    },
    MoonlightLulaby: {
        id: 33400,
        mainStat: StatType.ENERGY_REGEN_PERCENT,
    },
    WhiteWaterBallad: {
        id: 33500,
        mainStat: StatType.NONE,
    },
    ShiningAria: {
        id: 33600,
        mainStat: StatType.NONE,
    },
};

export type specialityKeys = keyof typeof Speciality;
export const Speciality = {
    ATTACK: "ATTACK",
    ANOMALY: "ANOMALY",
    DEFENSE: "DEFENSE",
    STUN: "STUN",
    SUPPORT: "SUPPORT",
    RUPTURE: "RUPTURE",
} as const;

export interface Stats {
    HP_FLAT: number;
    ATTACK_FLAT: number;
    DEFENSE_FLAT: number;
    CRIT_RATE: number;
    CRIT_DAMAGE: number;
    ELEMENT_PERCENT: number;
    ANOMALY_PROFICIENCY_FLAT: number;
    ANOMALY_MASTERY_FLAT: number;
    PEN_PERCENT: number;
    PEN_FLAT: number;
    IMPACT_FLAT: number;
    ENERGY_REGEN_FLAT: number;
}

export interface AttackModifiers {
    additionalSheerPercent: number,
    additionalSheerFlat: number,
    additionalDmgBonusMultiplierAttacker: number;
    critMode: "avg" | "crit" | "noCrit";
    defenseTarget: number;
    defenseShred: number;
    levelFactorAttacker: number;
    resTarget: number;
    resReductionTarget: number;
    resIgnore: number;
    dmgTakenIncrease: number;
    dmgTakenReduction: number;
    stunMultiplier: number;
    additionalSheerDmgBonusMultiplierAttacker: number;
}

export interface AdditionalStats {
    additionalHpFlat: number;
    additionalHpPercent: number;
    additionalAttackFlat: number;
    additionalAttackPercent: number;
    additionalPenPercent: number;
    additionalPenFlat: number;
    additionalCritRate: number;
    additionalCritDamage: number;
    additionalElementPercent: number;
    additionalSheerPercent: number;
    additionalSheerFlat: number;
}

export interface SelectedDrives {
    drive1Enabled: boolean;
    drive2Enabled: boolean;
    drive3Enabled: boolean;
    drive4: statTypeKeys;
    drive5: statTypeKeys;
    drive6: statTypeKeys;
    drive2psc1: statTypeKeys;
    drive2psc2: statTypeKeys;
    drive2psc3: statTypeKeys;
}

export interface SeletedSubstats {
    HP_PERCENT: number;
    HP_FLAT: number;
    ATTACK_PERCENT: number;
    ATTACK_FLAT: number;
    DEFENSE_PERCENT: number;
    DEFENSE_FLAT: number;
    CRIT_RATE: number;
    CRIT_DAMAGE: number;
    ANOMALY_PROFICIENCY_FLAT: number;
    PEN_FLAT: number;
}

export interface Character {
    name: string;
    id: number;
    speciality: specialityKeys;
    stats: Stats;
}

export interface CharacterAttacks {
    characterName: string;
    attackStats: AttackStats[];
}

export interface AttackStats {
    attackName: string;
    attackType: attackTypeKey;
    Level1Damage: number;
    growthPerLevel: number;
    calculatorType?: string;
}

export interface Wengine {
    name: string;
    id: number;
    speciality: specialityKeys;
    WengineFlatAttack: number;
    WengineStatValue: number;
    WengineStatSelected: statTypeKeys;
}

export type DriveStatRecord<T extends statTypeKeys> = Record<T, number>;

export const DriveStats = {
    Drive1HpFlat: 2200,
    Drive2AttackFlat: 316,
    Drive3DefenseFlat: 184,

    Drive4: {
        CRIT_RATE: 24,
        CRIT_DAMAGE: 48,
        ATTACK_PERCENT: 30,
        DEFENSE_PERCENT: 48,
        HP_PERCENT: 30,
        ANOMALY_PROFICIENCY_FLAT: 92,
        NONE: 0,
    } as DriveStatRecord<
        (typeof StatType)[keyof Pick<
            typeof StatType,
            "CRIT_RATE" | "CRIT_DAMAGE" | "ATTACK_PERCENT" | "DEFENSE_PERCENT" | "HP_PERCENT" | "ANOMALY_PROFICIENCY_FLAT" | "NONE"
        >]
    >,
    Drive5: {
        ATTACK_PERCENT: 30,
        DEFENSE_PERCENT: 48,
        HP_PERCENT: 30,
        PEN_PERCENT: 24,
        ELEMENT_PERCENT: 30,
        NONE: 0,
    } as DriveStatRecord<
        (typeof StatType)[keyof Pick<
            typeof StatType,
            "ATTACK_PERCENT" | "DEFENSE_PERCENT" | "HP_PERCENT" | "PEN_PERCENT" | "ELEMENT_PERCENT" | "NONE"
        >]
    >,
    Drive6: {
        ATTACK_PERCENT: 30,
        DEFENSE_PERCENT: 48,
        HP_PERCENT: 30,
        ANOMALY_MASTERY_PERCENT: 30,
        ENERGY_REGEN_PERCENT: 60,
        IMPACT_PERCENT: 18,
        NONE: 0,
    } as DriveStatRecord<
        (typeof StatType)[keyof Pick<
            typeof StatType,
            | "ATTACK_PERCENT"
            | "DEFENSE_PERCENT"
            | "HP_PERCENT"
            | "ANOMALY_MASTERY_PERCENT"
            | "ENERGY_REGEN_PERCENT"
            | "IMPACT_PERCENT"
            | "NONE"
        >]
    >,
    Drive2Psc: {
        HP_PERCENT: 10,
        ATTACK_PERCENT: 10,
        DEFENSE_PERCENT: 16,
        CRIT_RATE: 8,
        CRIT_DAMAGE: 16,
        ELEMENT_PERCENT: 10,
        ANOMALY_PROFICIENCY_FLAT: 30,
        ANOMALY_MASTERY_PERCENT: 8,
        PEN_PERCENT: 8,
        IMPACT_PERCENT: 6,
        ENERGY_REGEN_PERCENT: 20,
        NONE: 0,
    } as DriveStatRecord<
        (typeof StatType)[
            | keyof Pick<
                  typeof StatType,
                  | "HP_PERCENT"
                  | "ATTACK_PERCENT"
                  | "DEFENSE_PERCENT"
                  | "CRIT_RATE"
                  | "CRIT_DAMAGE"
                  | "ELEMENT_PERCENT"
                  | "ANOMALY_PROFICIENCY_FLAT"
                  | "ANOMALY_MASTERY_PERCENT"
                  | "PEN_PERCENT"
                  | "IMPACT_PERCENT"
                  | "ENERGY_REGEN_PERCENT"
              >
            | "NONE"]
    >,

    SubstatValues: {
        HP_PERCENT: 3,
        HP_FLAT: 112,
        ATTACK_PERCENT: 3,
        ATTACK_FLAT: 19,
        DEFENSE_PERCENT: 4.8,
        DEFENSE_FLAT: 15,
        CRIT_RATE: 2.4,
        CRIT_DAMAGE: 4.8,
        ANOMALY_PROFICIENCY_FLAT: 9,
        PEN_FLAT: 9,
        NONE: 0,
    } as DriveStatRecord<
        statTypeKeys &
            (
                | "HP_PERCENT"
                | "HP_FLAT"
                | "ATTACK_PERCENT"
                | "ATTACK_FLAT"
                | "DEFENSE_PERCENT"
                | "DEFENSE_FLAT"
                | "CRIT_RATE"
                | "CRIT_DAMAGE"
                | "ANOMALY_PROFICIENCY_FLAT"
                | "PEN_FLAT"
                | "NONE"
            )
    >,
};

export const numberOfPossibleSubstats = 54;
export const SheerHpConversionFactor = 0.1;
export const SheerAttackConsersionFactor = 0.3;

export const levelFactorAttacker = [
    50, 54, 58, 62, 66, 71, 76, 82, 88, 94, 100, 107, 114, 121, 129, 137, 145, 153, 162, 172, 181, 191, 201, 211, 222, 233, 245, 256, 268,
    281, 293, 306, 319, 333, 347, 361, 375, 390, 405, 421, 436, 452, 469, 485, 502, 519, 537, 555, 573, 592, 610, 629, 649, 669, 689, 709,
    730, 751, 772, 794,
];

export const AnomalyMultipliers = {
    Burn: 10,
    Shock: 12.5,
    Corruption: 12.5,
    Shatter: 5.0,
    Assault: 7.13,
};
