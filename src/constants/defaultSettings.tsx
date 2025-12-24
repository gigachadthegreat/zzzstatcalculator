import { getCharacterFromName, getMultiplierFromAttack, getWengineFromName } from "../lib/Utility";
import { Attacks } from "./AttackStats";
import { Characters } from "./Characters";
import { levelFactorAttacker, StatType, type AttackModifiers, type AttackStats, type SelectedDrives, type SelectedSubstats } from "./types";
import { Wengines } from "./Wengines";

export const defaultCharacterName = Characters[0].name;
export const defaultWengineName = "None";
export const defaultSelectedDrives:SelectedDrives = {
    drive1Enabled: false,
    drive2Enabled: false,
    drive3Enabled: false,
    drive4: StatType.NONE,
    drive5: StatType.NONE,
    drive6: StatType.NONE,
    drive2psc1: StatType.NONE,
    drive2psc2: StatType.NONE,
    drive2psc3: StatType.NONE,
};
export const defaultSelectedSubstats:SelectedSubstats = {
    HP_PERCENT: 0,
    HP_FLAT: 0,
    ATTACK_PERCENT: 0,
    ATTACK_FLAT: 0,
    DEFENSE_PERCENT: 0,
    DEFENSE_FLAT: 0,
    CRIT_RATE: 0,
    CRIT_DAMAGE: 0,
    ANOMALY_PROFICIENCY_FLAT: 0,
    PEN_FLAT: 0,
};

export const defaultAttackModifiers: AttackModifiers = {
    additionalSheerFlat: 0,
    additionalSheerPercent: 0,
    additionalDmgBonusMultiplierAttacker: 0,
    additionalSheerDmgBonusMultiplierAttacker: 0,
    critMode: "avg",
    defenseTarget: 953,
    defenseShred: 0,
    levelFactorAttacker: levelFactorAttacker[60 - 1],
    resTarget: 0,
    resReductionTarget: 0,
    dmgTakenIncrease: 0,
    dmgTakenReduction: 0,
    stunMultiplier: 100,
    resIgnore: 0,
};

export const defaultAttackUsed: AttackStats = Attacks.filter((attack) => attack.characterName === defaultCharacterName)[0].attackStats[0];
export const defaultAttackLevel = 12;
export const defaultAttackMultiplier = getMultiplierFromAttack(
    Attacks,
    defaultCharacterName,
    defaultAttackUsed.Level1Damage,
    defaultAttackUsed.growthPerLevel,
    defaultAttackLevel
);
export const defaultIsCustomMultipler = false;

export const defaultIsRupture = getCharacterFromName(defaultCharacterName, Characters).speciality == "RUPTURE";
export const defaultIsAnomaly = getWengineFromName(defaultWengineName, Wengines).speciality == "ANOMALY";
export const defaultAnomalyType = "Burn";
export const defaultAdditionalStatsUI = {
    additionalHpFlat: 0,
    additionalHpPercent: 0,
    additionalAttackFlat: 0,
    additionalAttackPercent: 0,
    additionalPenPercent: 0,
    additionalPenFlat: 0,
    additionalCritRate: 0,
    additionalCritDamage: 0,
    additionalElementPercent: 0,
    additionalSheerPercent: 0,
    additionalSheerFlat: 0,
};
