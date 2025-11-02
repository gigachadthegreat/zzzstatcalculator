import {
    AnomalyMultipliers,
    type AttackModifiers,
    type Character,
    type CharacterAttacks,
    type SelectedDrives,
    type SeletedSubstats,
} from "../constants/types";
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

export const getMultiplierFromAttack = (
    Attacks: CharacterAttacks[],
    characterName: string,
    Level1Damage: number,
    growthPerLevel: number,
    attackLvl: number
) => {
    const attack = Attacks.find((characterAttacks) => characterAttacks.characterName === characterName);

    if (attack == undefined) throw new Error("Attack not found");

    const attackLvl1Damage = Level1Damage;
    const attackGrowthPerLevel = growthPerLevel;

    return attackLvl1Damage + (attackLvl - 1) * attackGrowthPerLevel;
};

export const getParameterizedStatsAsUrl = (
    attackModifiers: AttackModifiers,

    characterName: string,
    wengineName: string,
    selectedDrives: SelectedDrives,
    selectedSubstats: SeletedSubstats,

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
    additionalElementPercent: number
    // characterLevel: number
) => {
    const params = new URLSearchParams();
    params.set("characterName", characterName);
    params.set("wengineName", wengineName);
    params.set("selectedDrives", JSON.stringify(selectedDrives));
    params.set("selectedSubstats", JSON.stringify(selectedSubstats));

    params.set("attackModifiers", JSON.stringify(attackModifiers));

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
