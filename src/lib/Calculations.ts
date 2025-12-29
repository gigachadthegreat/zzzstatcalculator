import {
    StatType,
    type Stats as CalculatedStats,
    type Character,
    type Wengine,
    type DriveDisks,
    type Substats,
    DriveStats,
    SheerHpConversionFactor,
    SheerAttackConsersionFactor,
    AnomalyMultipliers,
    type AttackModifiers,
    type Stats,
} from "../constants/types";

export const AddIndividualStatToBase = (_baseStats: CalculatedStats, _statTypeToAdd: string, _statsToAdd: number) => {
    const additionalStats = {
        ATTACK_FLAT: 0,
        DEFENSE_FLAT: 0,
        HP_FLAT: 0,
        CRIT_RATE: 0,
        CRIT_DAMAGE: 0,
        ELEMENT_PERCENT: 0,
        ANOMALY_PROFICIENCY_FLAT: 0,
        ANOMALY_MASTERY_FLAT: 0,
        PEN_PERCENT: 0,
        PEN_FLAT: 0,
        IMPACT_FLAT: 0,
        ENERGY_REGEN_FLAT: 0,
    };

    // Iterate through all properties in _statsToAdd
    switch (_statTypeToAdd) {
        // Flat stats
        case StatType.ATTACK_FLAT:
            additionalStats.ATTACK_FLAT += _statsToAdd;
            break;
        case StatType.DEFENSE_FLAT:
            additionalStats.DEFENSE_FLAT += _statsToAdd;
            break;
        case StatType.HP_FLAT:
            additionalStats.HP_FLAT += _statsToAdd;
            break;
        case StatType.ANOMALY_PROFICIENCY_FLAT:
            additionalStats.ANOMALY_PROFICIENCY_FLAT += _statsToAdd;
            break;
        case StatType.ANOMALY_MASTERY_FLAT:
            additionalStats.ANOMALY_MASTERY_FLAT += _statsToAdd;
            break;
        case StatType.PEN_FLAT:
            additionalStats.PEN_FLAT += _statsToAdd;
            break;
        case StatType.IMPACT_FLAT:
            additionalStats.IMPACT_FLAT += _statsToAdd;
            break;
        case StatType.ENERGY_REGEN_FLAT:
            additionalStats.ENERGY_REGEN_FLAT += _statsToAdd;
            break;
        case StatType.CRIT_RATE:
            additionalStats.CRIT_RATE += _statsToAdd;
            break;
        case StatType.CRIT_DAMAGE:
            additionalStats.CRIT_DAMAGE += _statsToAdd;
            break;
        case StatType.ELEMENT_PERCENT:
            additionalStats.ELEMENT_PERCENT += _statsToAdd;
            break;
        case StatType.PEN_PERCENT:
            additionalStats.PEN_PERCENT += _statsToAdd;
            break;

        // Percentage based stats
        case StatType.ATTACK_PERCENT:
            additionalStats.ATTACK_FLAT += (_baseStats.ATTACK_FLAT * _statsToAdd) / 100;
            break;
        case StatType.DEFENSE_PERCENT:
            additionalStats.DEFENSE_FLAT += (_baseStats.DEFENSE_FLAT * _statsToAdd) / 100;
            break;
        case StatType.HP_PERCENT:
            additionalStats.HP_FLAT += (_baseStats.HP_FLAT * _statsToAdd) / 100;
            break;

        case StatType.ANOMALY_MASTERY_PERCENT:
            additionalStats.ANOMALY_MASTERY_FLAT += (_baseStats.ANOMALY_MASTERY_FLAT * _statsToAdd) / 100;
            break;
        case StatType.ENERGY_REGEN_PERCENT:
            additionalStats.ENERGY_REGEN_FLAT += (_baseStats.ENERGY_REGEN_FLAT * _statsToAdd) / 100;
            break;
        case StatType.IMPACT_PERCENT:
            additionalStats.IMPACT_FLAT += (_baseStats.IMPACT_FLAT * _statsToAdd) / 100;
            break;
        case StatType.NONE:
            break;
    }

    return additionalStats;
};

export const AddNewStatsToBaseStats = (_baseStats: CalculatedStats, _statsToAdd: CalculatedStats) => {
    const finalStats: CalculatedStats = {
        HP_FLAT: 0,
        ATTACK_FLAT: 0,
        DEFENSE_FLAT: 0,
        CRIT_RATE: 0,
        CRIT_DAMAGE: 0,
        ELEMENT_PERCENT: 0,
        ANOMALY_PROFICIENCY_FLAT: 0,
        ANOMALY_MASTERY_FLAT: 0,
        PEN_PERCENT: 0,
        PEN_FLAT: 0,
        IMPACT_FLAT: 0,
        ENERGY_REGEN_FLAT: 0,
    };
    // Iterate through all properties in _statsToAdd
    (Object.keys(_baseStats) as Array<keyof CalculatedStats>).forEach((stat) => {
        finalStats[stat] = _baseStats[stat] + _statsToAdd[stat];
    });

    return finalStats;
};

export const calculateStats = (character: Character, wengine: Wengine, drives: DriveDisks, substatsSt: Substats) => {
    let baseStats = JSON.parse(JSON.stringify(character.stats));
    let finalStats = JSON.parse(JSON.stringify(character.stats));

    const wengineMainAdditionalStats = AddIndividualStatToBase(baseStats, StatType.ATTACK_FLAT, wengine.WengineFlatAttack);
    baseStats = AddNewStatsToBaseStats(baseStats, wengineMainAdditionalStats); // Wengine Base Stat is always added to character stats before any other calculation. Therefore it's included in further percentage additions.
    const wengineSecondaryAdditionalStats = AddIndividualStatToBase(baseStats, wengine.WengineStatSelected, wengine.WengineStatValue);

    const drive1AdditionalStats = AddIndividualStatToBase(baseStats, StatType.HP_FLAT, DriveStats.Drive1HpFlat);
    const drive2AdditionalStats = AddIndividualStatToBase(baseStats, StatType.ATTACK_FLAT, DriveStats.Drive2AttackFlat);
    const drive3AdditionalStats = AddIndividualStatToBase(baseStats, StatType.DEFENSE_FLAT, DriveStats.Drive3DefenseFlat);

    const drive4AdditionalStats = AddIndividualStatToBase(
        baseStats,
        drives.drive4,
        drives.drive4 in DriveStats.Drive4 ? DriveStats.Drive4[drives.drive4 as keyof typeof DriveStats.Drive4] : 0
    );
    const drive5AdditionalStats = AddIndividualStatToBase(
        baseStats,
        drives.drive5,
        drives.drive5 in DriveStats.Drive5 ? DriveStats.Drive5[drives.drive5 as keyof typeof DriveStats.Drive5] : 0
    );
    const drive6AdditionalStats = AddIndividualStatToBase(
        baseStats,
        drives.drive6,
        drives.drive6 in DriveStats.Drive6 ? DriveStats.Drive6[drives.drive6 as keyof typeof DriveStats.Drive6] : 0
    );

    const drive2PscAdditionalStat1 = AddIndividualStatToBase(
        baseStats,
        drives.drive2psc1,
        drives.drive2psc1 in DriveStats.Drive2Psc ? DriveStats.Drive2Psc[drives.drive2psc1 as keyof typeof DriveStats.Drive2Psc] : 0
    );
    const drive2PscAdditionalStat2 = AddIndividualStatToBase(
        baseStats,
        drives.drive2psc2,
        drives.drive2psc2 in DriveStats.Drive2Psc ? DriveStats.Drive2Psc[drives.drive2psc2 as keyof typeof DriveStats.Drive2Psc] : 0
    );

    const drive2PscAdditionalStat3 = AddIndividualStatToBase(
        baseStats,
        drives.drive2psc3,
        drives.drive2psc3 in DriveStats.Drive2Psc ? DriveStats.Drive2Psc[drives.drive2psc3 as keyof typeof DriveStats.Drive2Psc] : 0
    );

    finalStats = AddNewStatsToBaseStats(baseStats, wengineSecondaryAdditionalStats);

    finalStats = drives.drive1Enabled ? AddNewStatsToBaseStats(finalStats, drive1AdditionalStats) : finalStats;
    finalStats = drives.drive2Enabled ? AddNewStatsToBaseStats(finalStats, drive2AdditionalStats) : finalStats;
    finalStats = drives.drive3Enabled ? AddNewStatsToBaseStats(finalStats, drive3AdditionalStats) : finalStats;

    finalStats = AddNewStatsToBaseStats(finalStats, drive4AdditionalStats);
    finalStats = AddNewStatsToBaseStats(finalStats, drive5AdditionalStats);
    finalStats = AddNewStatsToBaseStats(finalStats, drive6AdditionalStats);

    finalStats = AddNewStatsToBaseStats(finalStats, drive2PscAdditionalStat1);
    finalStats = AddNewStatsToBaseStats(finalStats, drive2PscAdditionalStat2);
    finalStats = AddNewStatsToBaseStats(finalStats, drive2PscAdditionalStat3);

    let additionalStatsFromSubstats = {
        HP_FLAT: 0,
        ATTACK_FLAT: 0,
        DEFENSE_FLAT: 0,
        CRIT_RATE: 0,
        CRIT_DAMAGE: 0,
        ELEMENT_PERCENT: 0,
        ANOMALY_PROFICIENCY_FLAT: 0,
        ANOMALY_MASTERY_FLAT: 0,
        PEN_PERCENT: 0,
        PEN_FLAT: 0,
        IMPACT_FLAT: 0,
        ENERGY_REGEN_FLAT: 0,
    };

    Object.entries(substatsSt).forEach((subStat) => {
        const additionalStatsFromSubstats2 = AddIndividualStatToBase(
            baseStats,
            subStat[0],
            DriveStats.SubstatValues[subStat[0] as keyof typeof DriveStats.SubstatValues] * subStat[1]
        );

        additionalStatsFromSubstats = AddNewStatsToBaseStats(additionalStatsFromSubstats, additionalStatsFromSubstats2);
    });

    finalStats = AddNewStatsToBaseStats(finalStats, additionalStatsFromSubstats);

    return finalStats;
};

export const calculatedmgTakenMultiplierTarget = (dmgTakenIncrease: number, dmgTakenReduction: number) => {
    return 1 + dmgTakenIncrease / 100 - dmgTakenReduction / 100;
};

export const calculateResMultiplier = (resTarget: number, resReductionTarget: number, resIgnore: number) => {
    return 1 - resTarget / 100 + resReductionTarget / 100 + resIgnore / 100;
};
export const calculateDefenseMultiplier = (
    levelFactor: number,
    defTarget: number,
    defenseShred: number,
    penPercent: number,
    penFlat: number
) => {

    const finalDef = Math.max(defTarget * (1 - defenseShred / 100) * (1 - penPercent / 100) - (penFlat ?? 0), 0);
    return levelFactor / (finalDef + levelFactor);
};

export const critMultiplierAttacker = (critMode: "avg" | "crit" | "noCrit", critRate: number, critdamage: number) => {
    switch (critMode) {
        case "avg":
            return 1 + (Math.min(critRate, 100) / 100) * (critdamage / 100);
        case "crit":
            return 1 + critdamage / 100;
        case "noCrit":
            return 1;
        default:
            return 1;
    }
};

export const dmgBonusMultiplierAttacker = (elementPercent: number, additionalDmgBonusMultiplierAttacker: number) => {
    return elementPercent / 100 + additionalDmgBonusMultiplierAttacker / 100 + 1;
};

export const calculateBaseSheerDamage = (
    multiplierValue: number,
    hpFlat: number,
    attackFlat: number,
    additionalSheerPercentage: number,
    additionalSheerFlat: number
) => {
    return (multiplierValue / 100) * (calculateSheer(hpFlat, attackFlat) * (1 + additionalSheerPercentage / 100) + additionalSheerFlat);
};

export const calculateSheer = (hp: number, attack: number) => {
    return hp * SheerHpConversionFactor + attack * SheerAttackConsersionFactor;
};

export const calculateBaseDamage = (multiplierValue: number, attackFlat: number) => {
    return (multiplierValue / 100) * attackFlat;
};

export const calculateAnomalyLevelMultiplier = () => {
    return 1 + (1 / 59) * (60 - 1);
};

export const calculateAnomalyProficiencyMultiplier = (anomalyProficiency: number) => {
    return anomalyProficiency * 0.01;
};

export const calculateAnomalyBaseDamage = (anomalyType: keyof typeof AnomalyMultipliers, attackFlat: number) => {
    return AnomalyMultipliers[anomalyType] * attackFlat;
};

export const calculateDamageDealt = (multiplierValue: number, stats: Stats, attackModifiers: AttackModifiers, additionalDamage: number) => {
    return (
        calculateBaseDamage(multiplierValue, stats.ATTACK_FLAT) *
            dmgBonusMultiplierAttacker(stats.ELEMENT_PERCENT, attackModifiers.additionalDmgBonusMultiplierAttacker) *
            critMultiplierAttacker(attackModifiers.critMode, stats.CRIT_RATE, stats.CRIT_DAMAGE) *
            calculateDefenseMultiplier(
                attackModifiers.levelFactorAttacker,
                attackModifiers.defenseTarget,
                attackModifiers.defenseShred,
                stats.PEN_PERCENT,
                stats.PEN_FLAT
            ) *
            calculateResMultiplier(attackModifiers.resTarget, attackModifiers.resReductionTarget, attackModifiers.resIgnore) *
            calculatedmgTakenMultiplierTarget(attackModifiers.dmgTakenIncrease, attackModifiers.dmgTakenReduction) *
            (attackModifiers.stunMultiplier / 100) +
        additionalDamage
    );
};

export const calculateSheerDamageDealt = (
    multiplierValue: number,
    stats: Stats,
    attackModifiers: AttackModifiers,
    additionalDamage: number,

) => {
    return (
        calculateBaseSheerDamage(
            multiplierValue,
            stats.HP_FLAT,
            stats.ATTACK_FLAT,
            attackModifiers.additionalSheerPercent,
            attackModifiers.additionalSheerFlat
        ) *
            dmgBonusMultiplierAttacker(stats.ELEMENT_PERCENT, attackModifiers.additionalDmgBonusMultiplierAttacker) *
            critMultiplierAttacker(attackModifiers.critMode, stats.CRIT_RATE, stats.CRIT_DAMAGE) *
            calculateResMultiplier(attackModifiers.resTarget, attackModifiers.resReductionTarget, attackModifiers.resIgnore) *
            calculatedmgTakenMultiplierTarget(attackModifiers.dmgTakenIncrease, attackModifiers.dmgTakenReduction) *
            (attackModifiers.stunMultiplier / 100) *
            (attackModifiers.additionalSheerDmgBonusMultiplierAttacker / 100 + 1) +
        additionalDamage
    );
};

export const calculateAnomalyDamageDealt = (
    anomalyType: keyof typeof AnomalyMultipliers,
    stats: Stats,
    attackModifiers: AttackModifiers,
    additionalDamage: number
) => {
    return (
        calculateAnomalyBaseDamage(anomalyType, stats.ATTACK_FLAT) *
            calculateAnomalyProficiencyMultiplier(stats.ANOMALY_PROFICIENCY_FLAT) *
            calculateAnomalyLevelMultiplier() *
            dmgBonusMultiplierAttacker(stats.ELEMENT_PERCENT, attackModifiers.additionalDmgBonusMultiplierAttacker) *
            calculateDefenseMultiplier(
                attackModifiers.levelFactorAttacker,
                attackModifiers.defenseTarget,
                attackModifiers.defenseShred,
                stats.PEN_PERCENT,
                stats.PEN_FLAT
            ) *
            calculateResMultiplier(attackModifiers.resTarget, attackModifiers.resReductionTarget, attackModifiers.resIgnore) *
            calculatedmgTakenMultiplierTarget(attackModifiers.dmgTakenIncrease, attackModifiers.dmgTakenReduction) *
            (attackModifiers.stunMultiplier / 100) +
        additionalDamage
    );
};
