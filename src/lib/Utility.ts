import { AnomalyMultipliers, type Character, type CharacterAttacks, type SelectedDrives, type SeletedSubstats } from "../constants/types";
import { type Wengine } from "../constants/types";

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
    return wengines[0];
};

export const getSortedList = (names: string[]) => {
    return names.sort((a, b) => {
        return a > b ? 1 : -1;
    });
};








export const getMultiplierFromAttack = (Attacks: CharacterAttacks[], characterName: string, attackName: string, attackLvl: number) => {
    const attack = Attacks.find((characterAttacks) => characterAttacks.characterName === characterName);

    if (attack == undefined) throw new Error("Attack not found");

    const attackLvl1Damage = attack.attackStats.find((attack) => attack.attackName === attackName)?.Level1Damage ?? 0;
    const attackGrowthPerLevel = attack.attackStats.find((attack) => attack.attackName === attackName)?.growthPerLevel ?? 0;

    return attackLvl1Damage + (attackLvl-1) * attackGrowthPerLevel;
};



export const getParameterizedStatsAsUrl = (
    characterName: string,
    wengineName: string,
    selectedDrives: SelectedDrives,
    selectedSubstats: SeletedSubstats,

    defTarget: number,
    resTarget: number,
    resReductionTarget: number,
    dmgTakenIncrease: number,
    dmgTakenReduction: number,
    defenseShred: number,
    stunMultiplier: number,
    resIgnore: number,
    additionalDmgBonusMultiplierAttacker: number,
    additionalSheerDmgBonusMultiplierAttacker: number,
    critMode: string,
    multiplierValue: number,
    isRupture: boolean,
    isAnomaly: boolean,
    anomalyType: keyof typeof AnomalyMultipliers,

    additionalHpFlat: number,
    additionalHpPercent: number,
    additionalAttackFlat: number,
    additionalAttackPercent: number,
    additionalPenPercent: number,
    additionalPenFlat: number,
    additionalCritRate: number,
    additionalCritDamage: number,
    additionalElementPercent: number,
    additionalSheerFlat: number,
    additionalSheerPercent: number
    // characterLevel: number
) => {
    const params = new URLSearchParams();
    params.set("characterName", characterName);
    params.set("wengineName", wengineName);
    params.set("selectedDrives", JSON.stringify(selectedDrives));
    params.set("selectedSubstats", JSON.stringify(selectedSubstats));
    params.set("defTarget", defTarget.toString());
    params.set("resTarget", resTarget.toString());
    params.set("resReductionTarget", resReductionTarget.toString());
    params.set("dmgTakenIncrease", dmgTakenIncrease.toString());
    params.set("dmgTakenReduction", dmgTakenReduction.toString());
    params.set("defenseShred", defenseShred.toString());
    params.set("stunMultiplier", stunMultiplier.toString());
    params.set("resIgnore", resIgnore.toString());
    params.set("additionalDmgBonusMultiplierAttacker", additionalDmgBonusMultiplierAttacker.toString());
    params.set("additionalSheerDmgBonusMultiplierAttacker", additionalSheerDmgBonusMultiplierAttacker.toString());
    params.set("critMode", critMode);
    params.set("multiplierValue", multiplierValue.toString());
    params.set("isRupture", isRupture.toString());
    params.set("isAnomaly", isAnomaly.toString());
    params.set("anomalyType", anomalyType.toString());
    params.set("additionalHpFlat", additionalHpFlat.toString());
    params.set("additionalHpPercent", additionalHpPercent.toString());
    params.set("additionalAttackFlat", additionalAttackFlat.toString());
    params.set("additionalAttackPercent", additionalAttackPercent.toString());
    params.set("additionalPenPercent", additionalPenPercent.toString());
    params.set("additionalPenFlat", additionalPenFlat.toString());
    params.set("additionalCritRate", additionalCritRate.toString());
    params.set("additionalCritDamage", additionalCritDamage.toString());
    params.set("additionalElementPercent", additionalElementPercent.toString());
    params.set("additionalSheerFlat", additionalSheerFlat.toString());
    params.set("additionalSheerPercent", additionalSheerPercent.toString());
    // params.set("characterLevel", characterLevel.toString());

    return `${window.location.origin}${window.location.pathname}?${params.toString()}`;
};

export const getsettingsFromUrl = () => {
    const params = new URLSearchParams(window.location.search);
    const settings: { [key: string]: any } = {};

    const parseParam = (key: string, type: "string" | "number" | "boolean" | "json") => {
        const value = params.get(key);
        if (value === null) return null;
        switch (type) {
            case "number":
                return Number(value);
            case "boolean":
                return value === "true";
            case "json":
                try {
                    return JSON.parse(value);
                } catch {
                    return null;
                }
            case "string":
            default:
                return value;
        }
    };

    settings.characterName = parseParam("characterName", "string");
    settings.wengineName = parseParam("wengineName", "string");
    settings.selectedDrives = parseParam("selectedDrives", "json");
    settings.selectedSubstats = parseParam("selectedSubstats", "json");
    settings.defTarget = parseParam("defTarget", "number");
    settings.resTarget = parseParam("resTarget", "number");
    settings.resReductionTarget = parseParam("resReductionTarget", "number");
    settings.dmgTakenIncrease = parseParam("dmgTakenIncrease", "number");
    settings.dmgTakenReduction = parseParam("dmgTakenReduction", "number");
    settings.defenseShred = parseParam("defenseShred", "number");
    settings.stunMultiplier = parseParam("stunMultiplier", "number");
    settings.resIgnore = parseParam("resIgnore", "number");
    settings.additionalDmgBonusMultiplierAttacker = parseParam("additionalDmgBonusMultiplierAttacker", "number");
    settings.additionalSheerDmgBonusMultiplierAttacker = parseParam("additionalSheerDmgBonusMultiplierAttacker", "number");
    settings.critMode = parseParam("critMode", "string");
    settings.multiplierValue = parseParam("multiplierValue", "number");
    settings.isRupture = parseParam("isRupture", "boolean");
    settings.isAnomaly = parseParam("isAnomaly", "boolean");
    settings.anomalyType = parseParam("anomalyType", "string");

    settings.additionalHpFlat = parseParam("additionalHpFlat", "number");
    settings.additionalHpPercent = parseParam("additionalHpPercent", "number");
    settings.additionalAttackFlat = parseParam("additionalAttackFlat", "number");
    settings.additionalAttackPercent = parseParam("additionalAttackPercent", "number");
    settings.additionalPenPercent = parseParam("additionalPenPercent", "number");
    settings.additionalPenFlat = parseParam("additionalPenFlat", "number");
    settings.additionalCritRate = parseParam("additionalCritRate", "number");
    settings.additionalCritDamage = parseParam("additionalCritDamage", "number");
    settings.additionalElementPercent = parseParam("additionalElementPercent", "number");
    settings.additionalSheerFlat = parseParam("additionalSheerFlat", "number");
    settings.additionalSheerPercent = parseParam("additionalSheerPercent", "number");
    // settings.characterLevel = parseParam("characterLevel", "number");

    // Filter out null values so we only return settings that were present in the URL
    return Object.fromEntries(Object.entries(settings).filter(([, value]) => value !== null));
};
