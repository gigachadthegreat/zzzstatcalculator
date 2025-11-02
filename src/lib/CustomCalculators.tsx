import { type AttackModifiers, type Stats } from "../constants/types";

export const EvelynAdditionalActive = (stats: Stats, multiplierValue: number): [Stats, number, AttackModifiers, number] => {
    // returns additional stats to be added later; new mulitpler, additional attack modifiers to be added later, additional damage added to final damage number
    // Evelyn Chain with additinal ability active:
    // UNCONDITIONAL: Add 30% additional damage
    // CONDITIONAL: If CRIT Rate >= 80%, increase Multiplier Value damage by 25%

    let newMulitplier = multiplierValue;
    if (stats.CRIT_RATE >= 80) {
        newMulitplier *= 1.25;
    }
    const newAdditionalAttackModiifers: AttackModifiers = {
        additionalSheerPercent: 0,
        additionalSheerFlat: 0,
        additionalSheerDmgBonusMultiplierAttacker: 0,
        additionalDmgBonusMultiplierAttacker: 30,
        critMode: "avg",
        defenseTarget: 0,
        defenseShred: 0,
        levelFactorAttacker: 0,
        resTarget: 0,
        resReductionTarget: 0,
        dmgTakenIncrease: 0,
        dmgTakenReduction: 0,
        stunMultiplier: 0,
        resIgnore: 0,
    };

    const newAdditionalStats: Stats = {
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

    return [newAdditionalStats, newMulitplier, newAdditionalAttackModiifers, 0];
};

export const ZhuYuanOutOfStun = (stats: Stats, multiplierValue: number): [Stats, number, AttackModifiers, number] => {
    // returns additional stats to be added later; new mulitpler, additional attack modifiers to be added later, additional damage added to final damage number

    const newMulitplier = multiplierValue;

    const newAdditionalAttackModiifers: AttackModifiers = {
        additionalSheerPercent: 0,
        additionalSheerFlat: 0,
        additionalSheerDmgBonusMultiplierAttacker: 0,
        additionalDmgBonusMultiplierAttacker: 40,
        critMode: "avg",
        defenseTarget: 0,
        defenseShred: 0,
        levelFactorAttacker: 0,
        resTarget: 0,
        resReductionTarget: 0,
        dmgTakenIncrease: 0,
        dmgTakenReduction: 0,
        stunMultiplier: 0,
        resIgnore: 0,
    };

    const newAdditionalStats: Stats = {
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

    return [newAdditionalStats, newMulitplier, newAdditionalAttackModiifers, 0];
};

export const ZhuYuanInStun = (stats: Stats, multiplierValue: number): [Stats, number, AttackModifiers, number] => {
    // returns additional stats to be added later; new mulitpler, additional attack modifiers to be added later, additional damage added to final damage number

    const newMulitplier = multiplierValue;

    const newAdditionalAttackModiifers: AttackModifiers = {
        additionalSheerPercent: 0,
        additionalSheerFlat: 0,
        additionalSheerDmgBonusMultiplierAttacker: 0,
        additionalDmgBonusMultiplierAttacker: 80,
        critMode: "avg",
        defenseTarget: 0,
        defenseShred: 0,
        levelFactorAttacker: 0,
        resTarget: 0,
        resReductionTarget: 0,
        dmgTakenIncrease: 0,
        dmgTakenReduction: 0,
        stunMultiplier: 0,
        resIgnore: 0,
    };

    const newAdditionalStats: Stats = {
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

    return [newAdditionalStats, newMulitplier, newAdditionalAttackModiifers, 0];
};

export const YixuanBonus = (stats: Stats, multiplierValue: number): [Stats, number, AttackModifiers, number] => {
    // returns additional stats to be added later; new mulitpler, additional attack modifiers to be added later, additional damage added to final damage number

    const newMulitplier = multiplierValue;

    const newAdditionalAttackModiifers: AttackModifiers = {
        additionalSheerPercent: 0,
        additionalSheerFlat: 0,
        additionalSheerDmgBonusMultiplierAttacker: 0,
        additionalDmgBonusMultiplierAttacker: 60,
        critMode: "avg",
        defenseTarget: 0,
        defenseShred: 0,
        levelFactorAttacker: 0,
        resTarget: 0,
        resReductionTarget: 0,
        dmgTakenIncrease: 0,
        dmgTakenReduction: 0,
        stunMultiplier: 0,
        resIgnore: 0,
    };

    const newAdditionalStats: Stats = {
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

    return [newAdditionalStats, newMulitplier, newAdditionalAttackModiifers, 0];
};

export const YixuanAdditionalActiveStunned = (stats: Stats, multiplierValue: number): [Stats, number, AttackModifiers, number] => {
    // returns additional stats to be added later; new mulitpler, additional attack modifiers to be added later, additional damage added to final damage number

    const newMulitplier = multiplierValue;

    const newAdditionalAttackModiifers: AttackModifiers = {
        additionalSheerPercent: 0,
        additionalSheerFlat: 0,
        additionalSheerDmgBonusMultiplierAttacker: 0,
        additionalDmgBonusMultiplierAttacker: 90,
        critMode: "avg",
        defenseTarget: 0,
        defenseShred: 0,
        levelFactorAttacker: 0,
        resTarget: 0,
        resReductionTarget: 0,
        dmgTakenIncrease: 0,
        dmgTakenReduction: 0,
        stunMultiplier: 0,
        resIgnore: 0,
    };

    const newAdditionalStats: Stats = {
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

    return [newAdditionalStats, newMulitplier, newAdditionalAttackModiifers, 0];
};

export const LuciaHpBonus = (stats: Stats, multiplierValue: number, attackLevel: number): [Stats, number, AttackModifiers, number] => {
    // returns additional stats to be added later; new mulitpler, additional attack modifiers to be added later, additional damage added to final damage number

    const additionalDamageLvl1Multiplier = 37;
    const additionalDamageGrowthPerLevel = 3;

    const newMulitplier = multiplierValue;

    const newAdditionalAttackModiifers: AttackModifiers = {
        additionalSheerPercent: 0,
        additionalSheerFlat: 0,
        additionalSheerDmgBonusMultiplierAttacker: 0,
        additionalDmgBonusMultiplierAttacker: 0,
        critMode: "avg",
        defenseTarget: 0,
        defenseShred: 0,
        levelFactorAttacker: 0,
        resTarget: 0,
        resReductionTarget: 0,
        dmgTakenIncrease: 0,
        dmgTakenReduction: 0,
        stunMultiplier: 0,
        resIgnore: 0,
    };

    const newAdditionalStats: Stats = {
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

    const additionalDamage =
        stats.ANOMALY_PROFICIENCY_FLAT * ((additionalDamageLvl1Multiplier + additionalDamageGrowthPerLevel * attackLevel) / 100);


    return [newAdditionalStats, newMulitplier, newAdditionalAttackModiifers, additionalDamage];
};

export const YanagiEXSpecial = (stats: Stats, multiplierValue: number, attackLevel: number): [Stats, number, AttackModifiers, number] => {
    // returns additional stats to be added later; new mulitpler, additional attack modifiers to be added later, additional damage added to final damage number

    const additionalDamageLvl1Multiplier = 725;
    const additionalDamageGrowthPerLevel = 225;

    const newMulitplier = multiplierValue;

    const newAdditionalAttackModiifers: AttackModifiers = {
        additionalSheerPercent: 0,
        additionalSheerFlat: 0,
        additionalSheerDmgBonusMultiplierAttacker: 0,
        additionalDmgBonusMultiplierAttacker: 0,
        critMode: "avg",
        defenseTarget: 0,
        defenseShred: 0,
        levelFactorAttacker: 0,
        resTarget: 0,
        resReductionTarget: 0,
        dmgTakenIncrease: 0,
        dmgTakenReduction: 0,
        stunMultiplier: 0,
        resIgnore: 0,
    };

    const newAdditionalStats: Stats = {
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

    const additionalDamage =
        stats.ANOMALY_PROFICIENCY_FLAT * ((additionalDamageLvl1Multiplier + additionalDamageGrowthPerLevel * attackLevel) / 100);

    return [newAdditionalStats, newMulitplier, newAdditionalAttackModiifers, additionalDamage];
};

export const YanagiUltimate = (stats: Stats, multiplierValue: number, attackLevel: number): [Stats, number, AttackModifiers, number] => {
    // returns additional stats to be added later; new mulitpler, additional attack modifiers to be added later, additional damage added to final damage number

    const additionalDamageLvl1Multiplier = 730;
    const additionalDamageGrowthPerLevel = 220;

    const newMulitplier = multiplierValue;

    const newAdditionalAttackModiifers: AttackModifiers = {
        additionalSheerPercent: 0,
        additionalSheerFlat: 0,
        additionalSheerDmgBonusMultiplierAttacker: 0,
        additionalDmgBonusMultiplierAttacker: 0,
        critMode: "avg",
        defenseTarget: 0,
        defenseShred: 0,
        levelFactorAttacker: 0,
        resTarget: 0,
        resReductionTarget: 0,
        dmgTakenIncrease: 0,
        dmgTakenReduction: 0,
        stunMultiplier: 0,
        resIgnore: 0,
    };

    const newAdditionalStats: Stats = {
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

    const additionalDamage =
        stats.ANOMALY_PROFICIENCY_FLAT * ((additionalDamageLvl1Multiplier + additionalDamageGrowthPerLevel * attackLevel) / 100);

    return [newAdditionalStats, newMulitplier, newAdditionalAttackModiifers, additionalDamage];
};

export const HarumasaAdditionalActive = (stats: Stats, multiplierValue: number): [Stats, number, AttackModifiers, number] => {
    // returns additional stats to be added later; new mulitpler, additional attack modifiers to be added later, additional damage added to final damage number

    const newMulitplier = multiplierValue;

    const newAdditionalAttackModiifers: AttackModifiers = {
        additionalSheerPercent: 0,
        additionalSheerFlat: 0,
        additionalSheerDmgBonusMultiplierAttacker: 0,
        additionalDmgBonusMultiplierAttacker: 40,
        critMode: "avg",
        defenseTarget: 0,
        defenseShred: 0,
        levelFactorAttacker: 0,
        resTarget: 0,
        resReductionTarget: 0,
        dmgTakenIncrease: 0,
        dmgTakenReduction: 0,
        stunMultiplier: 0,
        resIgnore: 0,
    };

    const newAdditionalStats: Stats = {
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

    return [newAdditionalStats, newMulitplier, newAdditionalAttackModiifers, 0];
};

