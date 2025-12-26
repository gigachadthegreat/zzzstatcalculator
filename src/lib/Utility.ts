import { Attacks } from "../constants/AttackStats";
import { Characters } from "../constants/Characters";
import {
    AnomalyMultipliers,
    levelFactorAttacker,
    StatType,
    type AdditionalStats,
    type AttackModifiers,
    type Attack,
    type Character,
    type CharacterAttacks,
    type DriveDisks,
    type Substats,
} from "../constants/types";
import { type Wengine } from "../constants/types";
import { Wengines } from "../constants/Wengines";

export const getCharacterFromName = (name: string, characters: Character[]): Character => {
    const foundCharacter = characters.find((char) => char.name === name);

    if (foundCharacter != undefined) {
        return foundCharacter;
    }
    return characters[0];
};

export const getWengineFromName = (name: string, wengines: Wengine[]): Wengine => {
    const foundWengine = wengines.find((wengine) => wengine.name === name);

    if (foundWengine != undefined) {
        return foundWengine;
    }
    return defaultWengine;
};

export const getSortedList = (names: string[]) => {
    return names.sort((a, b) => {
        return a > b ? 1 : -1;
    });
};

export const getMultiplierFromAttack = (
    Attacks: CharacterAttacks[],
    character: Character,
    Level1Damage: number,
    growthPerLevel: number,
    attackLvl: number
) => {
    const attack = Attacks.find((characterAttacks) => characterAttacks.characterName === character.name);

    if (attack == undefined) throw new Error("Attack not found");

    const attackLvl1Damage = Level1Damage;
    const attackGrowthPerLevel = growthPerLevel;

    return attackLvl1Damage + (attackLvl - 1) * attackGrowthPerLevel;
};

export const Difference = (base: any, update: any) => {
    const difference: any = {};

    Object.keys(update).forEach((key) => {
        if (JSON.stringify(update[key]) !== JSON.stringify(base[key])) {
            difference[key] = update[key];
        }
    });
    return difference;
};

export const AddDifference = (base: any, update: any) => {
    const deepCopy = JSON.parse(JSON.stringify(base));
    Object.keys(update).forEach((key) => {
        deepCopy[key] = update[key];
    });

    return deepCopy;
};

export const getParameterizedStatsAsUrl = (
    attackModifiers: AttackModifiers,

    character: Character,
    wengine: Wengine,
    selectedDrives: DriveDisks,
    selectedSubstats: Substats,

    multiplierValue: number,
    attackUsed: Attack,
    attackLevel: number,

    isCustomMultiplier: boolean,

    isRupture: boolean,
    isAnomaly: boolean,
    anomalyType: keyof typeof AnomalyMultipliers,

    additionalStatsUI: AdditionalStats
) => {

    const params = new URLSearchParams();

    // Only serialize the properties that differ from default to keep the resulting url smaller.
    if (character.name !== defaultCharacter.name) params.set("characterName", character.name);

    if (wengine.name !== defaultWengine.name) params.set("wengineName", wengine.name);

    if (JSON.stringify(selectedDrives) !== JSON.stringify(defaultSelectedDrives)) {
        params.set("selectedDrives", JSON.stringify(Difference(defaultSelectedDrives, selectedDrives)));
    }
    if (JSON.stringify(selectedSubstats) !== JSON.stringify(defaultSelectedSubstats))
        params.set("selectedSubstats", JSON.stringify(Difference(defaultSelectedSubstats, selectedSubstats)));

    if (JSON.stringify(attackModifiers) !== JSON.stringify(defaultAttackModifiers))
        params.set("attackModifiers", JSON.stringify(Difference(defaultAttackModifiers, attackModifiers)));

    if (isCustomMultiplier !== defaultIsCustomMultipler) params.set("multiplierValue", multiplierValue.toString());

    if (attackUsed.attackName !== defaultAttackUsed.attackName) params.set("attackUsed", attackUsed.attackName);

    if (attackLevel !== defaultAttackLevel) params.set("attackLevel", attackLevel.toString());

    if (isCustomMultiplier !== defaultIsCustomMultipler) params.set("isCustomMultiplier", isCustomMultiplier.toString());

    if (isRupture !== defaultIsRupture) params.set("isRupture", isRupture.toString());

    if (isAnomaly !== defaultIsAnomaly) params.set("isAnomaly", isAnomaly.toString());

    if (anomalyType !== defaultAnomalyType) params.set("anomalyType", anomalyType.toString());

    if (JSON.stringify(additionalStatsUI) !== JSON.stringify(defaultAdditionalCombatStats))
        params.set("additionalStatsUI", JSON.stringify(Difference(defaultAdditionalCombatStats, additionalStatsUI)));
    // params.set("characterLevel", characterLevel.toString());

    return `${window.location.origin}${window.location.pathname}?${params.toString()}`;
};

export const getsettingsFromUrl = () => {
    const params = new URLSearchParams(window.location.search);
    const settings: { [key: string]: any } = {};

    const parseParam = (key: string, type: "string" | "number" | "boolean" | "json", defaultValue: any) => {
        const value = params.get(key);
        if (value === null) return defaultValue;
        switch (type) {
            case "number":
                return Number(value);
            case "boolean":
                return value === "true";
            case "json":
                try {
                    return JSON.parse(value);
                } catch {
                    return defaultValue;
                }
            case "string":
            default:
                return value;
        }
    };

    settings.characterName = parseParam("characterName", "string", defaultCharacter.name);
    settings.wengineName = parseParam("wengineName", "string", defaultWengine);
    settings.selectedDrives = AddDifference(defaultSelectedDrives, parseParam("selectedDrives", "json", defaultSelectedDrives) || {});
    settings.selectedSubstats = AddDifference(
        defaultSelectedSubstats,
        parseParam("selectedSubstats", "json", defaultSelectedSubstats) || {}
    );

    settings.multiplierValue = parseParam("multiplierValue", "number", defaultAttackMultiplier);
    settings.attackUsed = parseParam("attackUsed", "string", defaultAttackUsed.attackName);
    settings.attackLevel = parseParam("attackLevel", "number", defaultAttackLevel);

    settings.isCustomMultiplier = parseParam("isCustomMultiplier", "boolean", defaultIsCustomMultipler);

    settings.isRupture = parseParam("isRupture", "boolean", defaultIsRupture);
    settings.isAnomaly = parseParam("isAnomaly", "boolean", defaultIsAnomaly);
    settings.anomalyType = parseParam("anomalyType", "string", defaultAnomalyType);

    settings.attackModifiers = AddDifference(defaultAttackModifiers, parseParam("attackModifiers", "json", defaultAttackModifiers) || {});
    settings.additionalStatsUI = AddDifference(
        defaultAdditionalCombatStats,
        parseParam("additionalStatsUI", "json", defaultAdditionalCombatStats) || {}
    );

    // Filter out null values so we only return settings that were present in the URL
    return Object.fromEntries(Object.entries(settings).filter(([, value]) => value !== null));
};

export const getEnkaData = async (id: number) => {
    // beeceptor mock API for development/testing. Rate limited. Just use the above setTimeout one
    // return (await fetch(`https://zzzenka.free.beeceptor.com/${id}`)).json();

    // Production API using ENKA. Using allorigins as a proxy to bypass CORS issues. I want to keep this in a single react app. The only way to circumvent CORS is to use a separate backend which makes the actual request to ENKA.
    const enkaUrl = `https://enka.network/api/zzz/uid/${id}`;
    const res = await fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(enkaUrl)}`);
    return res;
};

export const defaultCharacter = Characters[0];
export const defaultWengine = Wengines.filter(wengine => wengine.name === "None")[0];
export const defaultSelectedDrives: DriveDisks = {
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
export const defaultSelectedSubstats: Substats = {
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

export const defaultAttackUsed = Attacks.filter((attack) => attack.characterName === defaultCharacter.name)[0].attack[0];
export const defaultAttackLevel = 12;
export const defaultAttackMultiplier = getMultiplierFromAttack(
    Attacks,
    defaultCharacter,
    defaultAttackUsed.Level1Damage,
    defaultAttackUsed.growthPerLevel,

    defaultAttackLevel
);
export const defaultIsCustomMultipler = false;

export const defaultIsRupture = defaultCharacter.speciality == "RUPTURE";
export const defaultIsAnomaly = defaultWengine.speciality == "ANOMALY";
export const defaultAnomalyType = "Burn";
export const defaultAdditionalCombatStats = {
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
