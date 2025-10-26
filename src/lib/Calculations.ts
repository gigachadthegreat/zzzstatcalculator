import {
    StatType,
    type Stats as CalculatedStats,
    type Character,
    type Wengine,
    type SelectedDrives,
    type SeletedSubstats,
    DriveStats,
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

export const calculateStats = (
    character: Character,
    wengineSt: Wengine,
    drives: SelectedDrives,
    substatsSt: SeletedSubstats
) => {
    let baseStats = JSON.parse(JSON.stringify(character.stats));
    let finalStats = JSON.parse(JSON.stringify(character.stats));

    const wengineMainAdditionalStats = AddIndividualStatToBase(
        baseStats,
        StatType.ATTACK_FLAT,
        wengineSt.WengineFlatAttack
    );
    baseStats = AddNewStatsToBaseStats(baseStats, wengineMainAdditionalStats); // Wengine Base Stat is always added to character stats before any other calculation. Therefore it's included in further percentage additions.
    const wengineSecondaryAdditionalStats = AddIndividualStatToBase(
        baseStats,
        wengineSt.WengineStatSelected,
        wengineSt.WengineStatValue
    );

    const drive1AdditionalStats = AddIndividualStatToBase(baseStats, StatType.HP_FLAT, DriveStats.Drive1HpFlat);
    const drive2AdditionalStats = AddIndividualStatToBase(baseStats, StatType.ATTACK_FLAT, DriveStats.Drive2AttackFlat);
    const drive3AdditionalStats = AddIndividualStatToBase(
        baseStats,
        StatType.DEFENSE_FLAT,
        DriveStats.Drive3DefenseFlat
    );

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
        drives.drive2psc1 in DriveStats.Drive2Psc1
            ? DriveStats.Drive2Psc1[drives.drive2psc1 as keyof typeof DriveStats.Drive2Psc1]
            : 0
    );
    const drive2PscAdditionalStat2 = AddIndividualStatToBase(
        baseStats,
        drives.drive2psc2,
        drives.drive2psc2 in DriveStats.Drive2Psc2
            ? DriveStats.Drive2Psc2[drives.drive2psc2 as keyof typeof DriveStats.Drive2Psc2]
            : 0
    );

    const drive2PscAdditionalStat3 = AddIndividualStatToBase(
        baseStats,
        drives.drive2psc3,
        drives.drive2psc3 in DriveStats.Drive2Psc3
            ? DriveStats.Drive2Psc3[drives.drive2psc3 as keyof typeof DriveStats.Drive2Psc3]
            : 0
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
