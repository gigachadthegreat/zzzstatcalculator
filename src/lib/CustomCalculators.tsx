import { type AttackModifiers, type Stats } from "../constants/types";

export const EvelynAdditionalActive = (stats: Stats, multiplierValue: number): [Stats, number, AttackModifiers] => {
    // Evelyn Chain with additinal ability active:
    // UNCONDITIONAL: Add 30% additional damage
    // CONDITIONAL: If CRIT Rate >= 80%, increase Multiplier Value damage by 25%

    let newMulitplier = multiplierValue
    if (stats.CRIT_RATE >= 80) {
        newMulitplier *= 1.25;
    }
    let newAdditionalAttackModiifers: AttackModifiers = {
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

    let newAdditionalStats: Stats = {
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



    return [newAdditionalStats, newMulitplier, newAdditionalAttackModiifers];
};
