import {
    AnomalyMultipliers,
    type AdditionalStats,
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
    attackUsed: string,
    attackLevel: number,

    isCustomMultiplier: boolean,

    isRupture: boolean,
    isAnomaly: boolean,
    anomalyType: keyof typeof AnomalyMultipliers,

    additionalStatsUI: AdditionalStats
    // characterLevel: number
) => {
    const params = new URLSearchParams();
    params.set("characterName", characterName);
    params.set("wengineName", wengineName);
    params.set("selectedDrives", JSON.stringify(selectedDrives));
    params.set("selectedSubstats", JSON.stringify(selectedSubstats));

    params.set("attackModifiers", JSON.stringify(attackModifiers));

    params.set("multiplierValue", multiplierValue.toString());
    params.set("attackUsed", attackUsed.toString());
    params.set("attackLevel", attackLevel.toString());

    params.set("isCustomMultiplier", isCustomMultiplier.toString());

    params.set("isRupture", isRupture.toString());
    params.set("isAnomaly", isAnomaly.toString());
    params.set("anomalyType", anomalyType.toString());
    params.set("additionalStatsUI", JSON.stringify(additionalStatsUI));
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
    settings.attackUsed = parseParam("attackUsed", "string");
    settings.attackLevel = parseParam("attackLevel", "number");

    settings.isCustomMultiplier = parseParam("isCustomMultiplier", "boolean");

    settings.isRupture = parseParam("isRupture", "boolean");
    settings.isAnomaly = parseParam("isAnomaly", "boolean");
    settings.anomalyType = parseParam("anomalyType", "string");

    settings.attackModifiers = parseParam("attackModifiers", "json");
    settings.additionalStatsUI = parseParam("additionalStatsUI", "json");



    // Filter out null values so we only return settings that were present in the URL
    return Object.fromEntries(Object.entries(settings).filter(([, value]) => value !== null));
};

export const getEnkaData = async (id: number) => {
    // Mocked Enka data for testing purposes. Returns promise which resolves after 3 seconds.
    return new Promise<any>((resolve) => {
        setTimeout(() => {
            resolve({
                PlayerInfo: {
                    ShowcaseDetail: {
                        AvatarList: [
                            {
                                EquippedList: [
                                    {
                                        Slot: 2,
                                        Equipment: {
                                            RandomPropertyList: [
                                                { PropertyId: 20103, PropertyLevel: 1, PropertyValue: 240 },
                                                { PropertyId: 11103, PropertyLevel: 1, PropertyValue: 112 },
                                                { PropertyId: 21103, PropertyLevel: 3, PropertyValue: 480 },
                                                { PropertyId: 12102, PropertyLevel: 3, PropertyValue: 300 },
                                            ],
                                            MainPropertyList: [{ PropertyId: 12103, PropertyLevel: 1, PropertyValue: 79 }],
                                            IsAvailable: false,
                                            IsLocked: true,
                                            IsTrash: false,
                                            Id: 31142,
                                            Level: 15,
                                            Uid: 3900,
                                            BreakLevel: 5,
                                            Exp: 0,
                                        },
                                    },
                                    {
                                        Slot: 3,
                                        Equipment: {
                                            RandomPropertyList: [
                                                { PropertyId: 11102, PropertyLevel: 1, PropertyValue: 300 },
                                                { PropertyId: 21103, PropertyLevel: 3, PropertyValue: 480 },
                                                { PropertyId: 31203, PropertyLevel: 2, PropertyValue: 9 },
                                                { PropertyId: 12102, PropertyLevel: 3, PropertyValue: 300 },
                                            ],
                                            MainPropertyList: [{ PropertyId: 13103, PropertyLevel: 1, PropertyValue: 46 }],
                                            IsAvailable: false,
                                            IsLocked: true,
                                            IsTrash: false,
                                            Id: 31043,
                                            Level: 15,
                                            Uid: 5100,
                                            BreakLevel: 5,
                                            Exp: 0,
                                        },
                                    },
                                    {
                                        Slot: 4,
                                        Equipment: {
                                            RandomPropertyList: [
                                                { PropertyId: 31203, PropertyLevel: 3, PropertyValue: 9 },
                                                { PropertyId: 20103, PropertyLevel: 3, PropertyValue: 240 },
                                                { PropertyId: 11103, PropertyLevel: 1, PropertyValue: 112 },
                                                { PropertyId: 13102, PropertyLevel: 1, PropertyValue: 480 },
                                            ],
                                            MainPropertyList: [{ PropertyId: 21103, PropertyLevel: 1, PropertyValue: 1200 }],
                                            IsAvailable: false,
                                            IsLocked: true,
                                            IsTrash: false,
                                            Id: 31144,
                                            Level: 15,
                                            Uid: 3743,
                                            BreakLevel: 5,
                                            Exp: 0,
                                        },
                                    },
                                    {
                                        Slot: 5,
                                        Equipment: {
                                            RandomPropertyList: [
                                                { PropertyId: 20103, PropertyLevel: 1, PropertyValue: 240 },
                                                { PropertyId: 23203, PropertyLevel: 1, PropertyValue: 9 },
                                                { PropertyId: 21103, PropertyLevel: 3, PropertyValue: 480 },
                                                { PropertyId: 31203, PropertyLevel: 4, PropertyValue: 9 },
                                            ],
                                            MainPropertyList: [{ PropertyId: 23103, PropertyLevel: 1, PropertyValue: 600 }],
                                            IsAvailable: false,
                                            IsLocked: true,
                                            IsTrash: false,
                                            Id: 31145,
                                            Level: 15,
                                            Uid: 3864,
                                            BreakLevel: 5,
                                            Exp: 0,
                                        },
                                    },
                                    {
                                        Slot: 6,
                                        Equipment: {
                                            RandomPropertyList: [
                                                { PropertyId: 11102, PropertyLevel: 3, PropertyValue: 300 },
                                                { PropertyId: 21103, PropertyLevel: 1, PropertyValue: 480 },
                                                { PropertyId: 20103, PropertyLevel: 2, PropertyValue: 240 },
                                                { PropertyId: 23203, PropertyLevel: 2, PropertyValue: 9 },
                                            ],
                                            MainPropertyList: [{ PropertyId: 12102, PropertyLevel: 1, PropertyValue: 750 }],
                                            IsAvailable: false,
                                            IsLocked: false,
                                            IsTrash: false,
                                            Id: 31046,
                                            Level: 15,
                                            Uid: 4577,
                                            BreakLevel: 5,
                                            Exp: 0,
                                        },
                                    },
                                ],
                                SkillLevelList: [
                                    { Level: 12, Index: 0 },
                                    { Level: 11, Index: 1 },
                                    { Level: 11, Index: 2 },
                                    { Level: 12, Index: 3 },
                                    { Level: 7, Index: 5 },
                                    { Level: 11, Index: 6 },
                                ],
                                TalentToggleList: [false, false, false, false, false, false],
                                ClaimedRewardList: [1, 3, 5],
                                WeaponEffectState: 1,
                                IsFavorite: true,
                                IsUpgradeUnlocked: false,
                                Id: 1321,
                                Level: 60,
                                PromotionLevel: 6,
                                Exp: 0,
                                SkinId: 0,
                                TalentLevel: 0,
                                UpgradeId: 0,
                                CoreSkillEnhancement: 6,
                                WeaponUid: 2970,
                                ObtainmentTimestamp: 1739361974,
                                Weapon: {
                                    IsAvailable: false,
                                    IsLocked: true,
                                    Id: 14104,
                                    Level: 60,
                                    Uid: 2970,
                                    BreakLevel: 5,
                                    Exp: 0,
                                    UpgradeLevel: 1,
                                },
                            },
                            {
                                EquippedList: [
                                    {
                                        Slot: 1,
                                        Equipment: {
                                            RandomPropertyList: [
                                                { PropertyId: 21103, PropertyLevel: 5, PropertyValue: 480 },
                                                { PropertyId: 20103, PropertyLevel: 1, PropertyValue: 240 },
                                                { PropertyId: 31203, PropertyLevel: 2, PropertyValue: 9 },
                                                { PropertyId: 12103, PropertyLevel: 1, PropertyValue: 19 },
                                            ],
                                            MainPropertyList: [{ PropertyId: 11103, PropertyLevel: 1, PropertyValue: 550 }],
                                            IsAvailable: false,
                                            IsLocked: true,
                                            IsTrash: false,
                                            Id: 31241,
                                            Level: 15,
                                            Uid: 4561,
                                            BreakLevel: 5,
                                            Exp: 0,
                                        },
                                    },
                                    {
                                        Slot: 2,
                                        Equipment: {
                                            RandomPropertyList: [
                                                { PropertyId: 23203, PropertyLevel: 3, PropertyValue: 9 },
                                                { PropertyId: 13102, PropertyLevel: 1, PropertyValue: 480 },
                                                { PropertyId: 20103, PropertyLevel: 3, PropertyValue: 240 },
                                                { PropertyId: 11102, PropertyLevel: 1, PropertyValue: 300 },
                                            ],
                                            MainPropertyList: [{ PropertyId: 12103, PropertyLevel: 1, PropertyValue: 79 }],
                                            IsAvailable: false,
                                            IsLocked: true,
                                            IsTrash: false,
                                            Id: 33242,
                                            Level: 15,
                                            Uid: 3959,
                                            BreakLevel: 5,
                                            Exp: 0,
                                        },
                                    },
                                    {
                                        Slot: 3,
                                        Equipment: {
                                            RandomPropertyList: [
                                                { PropertyId: 13102, PropertyLevel: 2, PropertyValue: 480 },
                                                { PropertyId: 12102, PropertyLevel: 2, PropertyValue: 300 },
                                                { PropertyId: 20103, PropertyLevel: 3, PropertyValue: 240 },
                                                { PropertyId: 31203, PropertyLevel: 1, PropertyValue: 9 },
                                            ],
                                            MainPropertyList: [{ PropertyId: 13103, PropertyLevel: 1, PropertyValue: 46 }],
                                            IsAvailable: false,
                                            IsLocked: true,
                                            IsTrash: false,
                                            Id: 33243,
                                            Level: 15,
                                            Uid: 3049,
                                            BreakLevel: 5,
                                            Exp: 0,
                                        },
                                    },
                                    {
                                        Slot: 4,
                                        Equipment: {
                                            RandomPropertyList: [
                                                { PropertyId: 13102, PropertyLevel: 2, PropertyValue: 480 },
                                                { PropertyId: 21103, PropertyLevel: 2, PropertyValue: 480 },
                                                { PropertyId: 31203, PropertyLevel: 4, PropertyValue: 9 },
                                                { PropertyId: 11103, PropertyLevel: 1, PropertyValue: 112 },
                                            ],
                                            MainPropertyList: [{ PropertyId: 20103, PropertyLevel: 1, PropertyValue: 600 }],
                                            IsAvailable: false,
                                            IsLocked: true,
                                            IsTrash: false,
                                            Id: 33244,
                                            Level: 15,
                                            Uid: 4243,
                                            BreakLevel: 5,
                                            Exp: 0,
                                        },
                                    },
                                    {
                                        Slot: 5,
                                        Equipment: {
                                            RandomPropertyList: [
                                                { PropertyId: 13102, PropertyLevel: 3, PropertyValue: 480 },
                                                { PropertyId: 13103, PropertyLevel: 2, PropertyValue: 15 },
                                                { PropertyId: 23203, PropertyLevel: 2, PropertyValue: 9 },
                                                { PropertyId: 20103, PropertyLevel: 2, PropertyValue: 240 },
                                            ],
                                            MainPropertyList: [{ PropertyId: 23103, PropertyLevel: 1, PropertyValue: 600 }],
                                            IsAvailable: false,
                                            IsLocked: true,
                                            IsTrash: false,
                                            Id: 33245,
                                            Level: 15,
                                            Uid: 2914,
                                            BreakLevel: 5,
                                            Exp: 0,
                                        },
                                    },
                                    {
                                        Slot: 6,
                                        Equipment: {
                                            RandomPropertyList: [
                                                { PropertyId: 12103, PropertyLevel: 1, PropertyValue: 19 },
                                                { PropertyId: 20103, PropertyLevel: 1, PropertyValue: 240 },
                                                { PropertyId: 12102, PropertyLevel: 3, PropertyValue: 300 },
                                                { PropertyId: 11102, PropertyLevel: 3, PropertyValue: 300 },
                                            ],
                                            MainPropertyList: [{ PropertyId: 12202, PropertyLevel: 1, PropertyValue: 450 }],
                                            IsAvailable: false,
                                            IsLocked: false,
                                            IsTrash: false,
                                            Id: 31246,
                                            Level: 15,
                                            Uid: 4544,
                                            BreakLevel: 5,
                                            Exp: 0,
                                        },
                                    },
                                ],
                                SkillLevelList: [
                                    { Level: 10, Index: 0 },
                                    { Level: 11, Index: 1 },
                                    { Level: 7, Index: 2 },
                                    { Level: 10, Index: 3 },
                                    { Level: 7, Index: 5 },
                                    { Level: 9, Index: 6 },
                                ],
                                TalentToggleList: [false, false, false, false, false, false],
                                ClaimedRewardList: [1, 3, 5],
                                WeaponEffectState: 0,
                                IsFavorite: true,
                                IsUpgradeUnlocked: false,
                                Id: 1161,
                                Level: 60,
                                PromotionLevel: 6,
                                Exp: 0,
                                SkinId: 0,
                                TalentLevel: 0,
                                UpgradeId: 0,
                                CoreSkillEnhancement: 6,
                                WeaponUid: 6686,
                                ObtainmentTimestamp: 1747228659,
                                Weapon: {
                                    IsAvailable: false,
                                    IsLocked: true,
                                    Id: 14148,
                                    Level: 60,
                                    Uid: 6686,
                                    BreakLevel: 5,
                                    Exp: 0,
                                    UpgradeLevel: 1,
                                },
                            },
                            {
                                EquippedList: [
                                    {
                                        Slot: 1,
                                        Equipment: {
                                            RandomPropertyList: [
                                                { PropertyId: 12102, PropertyLevel: 4, PropertyValue: 300 },
                                                { PropertyId: 12103, PropertyLevel: 2, PropertyValue: 19 },
                                                { PropertyId: 23203, PropertyLevel: 1, PropertyValue: 9 },
                                                { PropertyId: 21103, PropertyLevel: 1, PropertyValue: 480 },
                                            ],
                                            MainPropertyList: [{ PropertyId: 11103, PropertyLevel: 1, PropertyValue: 550 }],
                                            IsAvailable: false,
                                            IsLocked: true,
                                            IsTrash: false,
                                            Id: 32841,
                                            Level: 15,
                                            Uid: 3255,
                                            BreakLevel: 5,
                                            Exp: 0,
                                        },
                                    },
                                    {
                                        Slot: 2,
                                        Equipment: {
                                            RandomPropertyList: [
                                                { PropertyId: 20103, PropertyLevel: 1, PropertyValue: 240 },
                                                { PropertyId: 31203, PropertyLevel: 1, PropertyValue: 9 },
                                                { PropertyId: 13102, PropertyLevel: 4, PropertyValue: 480 },
                                                { PropertyId: 12102, PropertyLevel: 3, PropertyValue: 300 },
                                            ],
                                            MainPropertyList: [{ PropertyId: 12103, PropertyLevel: 1, PropertyValue: 79 }],
                                            IsAvailable: false,
                                            IsLocked: false,
                                            IsTrash: false,
                                            Id: 32842,
                                            Level: 15,
                                            Uid: 3033,
                                            BreakLevel: 5,
                                            Exp: 0,
                                        },
                                    },
                                    {
                                        Slot: 3,
                                        Equipment: {
                                            RandomPropertyList: [
                                                { PropertyId: 31203, PropertyLevel: 1, PropertyValue: 9 },
                                                { PropertyId: 11103, PropertyLevel: 2, PropertyValue: 112 },
                                                { PropertyId: 12103, PropertyLevel: 2, PropertyValue: 19 },
                                                { PropertyId: 12102, PropertyLevel: 4, PropertyValue: 300 },
                                            ],
                                            MainPropertyList: [{ PropertyId: 13103, PropertyLevel: 1, PropertyValue: 46 }],
                                            IsAvailable: false,
                                            IsLocked: true,
                                            IsTrash: false,
                                            Id: 32843,
                                            Level: 15,
                                            Uid: 3047,
                                            BreakLevel: 5,
                                            Exp: 0,
                                        },
                                    },
                                    {
                                        Slot: 4,
                                        Equipment: {
                                            RandomPropertyList: [
                                                { PropertyId: 13103, PropertyLevel: 1, PropertyValue: 15 },
                                                { PropertyId: 11103, PropertyLevel: 2, PropertyValue: 112 },
                                                { PropertyId: 31203, PropertyLevel: 1, PropertyValue: 9 },
                                                { PropertyId: 13102, PropertyLevel: 4, PropertyValue: 480 },
                                            ],
                                            MainPropertyList: [{ PropertyId: 12102, PropertyLevel: 1, PropertyValue: 750 }],
                                            IsAvailable: false,
                                            IsLocked: false,
                                            IsTrash: false,
                                            Id: 31644,
                                            Level: 15,
                                            Uid: 1714,
                                            BreakLevel: 5,
                                            Exp: 0,
                                        },
                                    },
                                    {
                                        Slot: 5,
                                        Equipment: {
                                            RandomPropertyList: [
                                                { PropertyId: 13102, PropertyLevel: 2, PropertyValue: 480 },
                                                { PropertyId: 11103, PropertyLevel: 2, PropertyValue: 112 },
                                                { PropertyId: 23203, PropertyLevel: 2, PropertyValue: 9 },
                                                { PropertyId: 20103, PropertyLevel: 2, PropertyValue: 240 },
                                            ],
                                            MainPropertyList: [{ PropertyId: 12102, PropertyLevel: 1, PropertyValue: 750 }],
                                            IsAvailable: false,
                                            IsLocked: false,
                                            IsTrash: false,
                                            Id: 32845,
                                            Level: 15,
                                            Uid: 981,
                                            BreakLevel: 5,
                                            Exp: 0,
                                        },
                                    },
                                    {
                                        Slot: 6,
                                        Equipment: {
                                            RandomPropertyList: [
                                                { PropertyId: 21103, PropertyLevel: 3, PropertyValue: 480 },
                                                { PropertyId: 23203, PropertyLevel: 2, PropertyValue: 9 },
                                                { PropertyId: 31203, PropertyLevel: 2, PropertyValue: 9 },
                                                { PropertyId: 13103, PropertyLevel: 2, PropertyValue: 15 },
                                            ],
                                            MainPropertyList: [{ PropertyId: 30502, PropertyLevel: 1, PropertyValue: 1500 }],
                                            IsAvailable: false,
                                            IsLocked: false,
                                            IsTrash: false,
                                            Id: 31646,
                                            Level: 15,
                                            Uid: 4332,
                                            BreakLevel: 5,
                                            Exp: 0,
                                        },
                                    },
                                ],
                                SkillLevelList: [
                                    { Level: 1, Index: 0 },
                                    { Level: 12, Index: 1 },
                                    { Level: 1, Index: 2 },
                                    { Level: 7, Index: 3 },
                                    { Level: 7, Index: 5 },
                                    { Level: 1, Index: 6 },
                                ],
                                TalentToggleList: [false, false, false, false, false, false],
                                ClaimedRewardList: [1, 3, 5],
                                WeaponEffectState: 1,
                                IsFavorite: true,
                                IsUpgradeUnlocked: false,
                                Id: 1311,
                                Level: 60,
                                PromotionLevel: 6,
                                Exp: 0,
                                SkinId: 0,
                                TalentLevel: 0,
                                UpgradeId: 0,
                                CoreSkillEnhancement: 6,
                                WeaponUid: 2995,
                                ObtainmentTimestamp: 1737568192,
                                Weapon: {
                                    IsAvailable: false,
                                    IsLocked: true,
                                    Id: 14131,
                                    Level: 60,
                                    Uid: 2995,
                                    BreakLevel: 5,
                                    Exp: 0,
                                    UpgradeLevel: 1,
                                },
                            },
                            {
                                EquippedList: [
                                    {
                                        Slot: 1,
                                        Equipment: {
                                            RandomPropertyList: [
                                                { PropertyId: 13103, PropertyLevel: 1, PropertyValue: 15 },
                                                { PropertyId: 21103, PropertyLevel: 3, PropertyValue: 480 },
                                                { PropertyId: 11102, PropertyLevel: 3, PropertyValue: 300 },
                                                { PropertyId: 23203, PropertyLevel: 1, PropertyValue: 9 },
                                            ],
                                            MainPropertyList: [{ PropertyId: 11103, PropertyLevel: 1, PropertyValue: 550 }],
                                            IsAvailable: false,
                                            IsLocked: true,
                                            IsTrash: false,
                                            Id: 33141,
                                            Level: 15,
                                            Uid: 5224,
                                            BreakLevel: 5,
                                            Exp: 0,
                                        },
                                    },
                                    {
                                        Slot: 2,
                                        Equipment: {
                                            RandomPropertyList: [
                                                { PropertyId: 11102, PropertyLevel: 3, PropertyValue: 300 },
                                                { PropertyId: 21103, PropertyLevel: 1, PropertyValue: 480 },
                                                { PropertyId: 20103, PropertyLevel: 3, PropertyValue: 240 },
                                                { PropertyId: 23203, PropertyLevel: 1, PropertyValue: 9 },
                                            ],
                                            MainPropertyList: [{ PropertyId: 12103, PropertyLevel: 1, PropertyValue: 79 }],
                                            IsAvailable: false,
                                            IsLocked: false,
                                            IsTrash: false,
                                            Id: 32742,
                                            Level: 15,
                                            Uid: 1551,
                                            BreakLevel: 5,
                                            Exp: 0,
                                        },
                                    },
                                    {
                                        Slot: 3,
                                        Equipment: {
                                            RandomPropertyList: [
                                                { PropertyId: 12102, PropertyLevel: 1, PropertyValue: 300 },
                                                { PropertyId: 21103, PropertyLevel: 2, PropertyValue: 480 },
                                                { PropertyId: 20103, PropertyLevel: 2, PropertyValue: 240 },
                                                { PropertyId: 11102, PropertyLevel: 3, PropertyValue: 300 },
                                            ],
                                            MainPropertyList: [{ PropertyId: 13103, PropertyLevel: 1, PropertyValue: 46 }],
                                            IsAvailable: false,
                                            IsLocked: true,
                                            IsTrash: false,
                                            Id: 33143,
                                            Level: 15,
                                            Uid: 3934,
                                            BreakLevel: 5,
                                            Exp: 0,
                                        },
                                    },
                                    {
                                        Slot: 4,
                                        Equipment: {
                                            RandomPropertyList: [
                                                { PropertyId: 21103, PropertyLevel: 3, PropertyValue: 480 },
                                                { PropertyId: 13102, PropertyLevel: 3, PropertyValue: 480 },
                                                { PropertyId: 12102, PropertyLevel: 2, PropertyValue: 300 },
                                                { PropertyId: 13103, PropertyLevel: 1, PropertyValue: 15 },
                                            ],
                                            MainPropertyList: [{ PropertyId: 20103, PropertyLevel: 1, PropertyValue: 600 }],
                                            IsAvailable: false,
                                            IsLocked: true,
                                            IsTrash: false,
                                            Id: 33144,
                                            Level: 15,
                                            Uid: 2891,
                                            BreakLevel: 5,
                                            Exp: 0,
                                        },
                                    },
                                    {
                                        Slot: 5,
                                        Equipment: {
                                            RandomPropertyList: [
                                                { PropertyId: 12102, PropertyLevel: 1, PropertyValue: 300 },
                                                { PropertyId: 21103, PropertyLevel: 3, PropertyValue: 480 },
                                                { PropertyId: 31203, PropertyLevel: 3, PropertyValue: 9 },
                                                { PropertyId: 12103, PropertyLevel: 1, PropertyValue: 19 },
                                            ],
                                            MainPropertyList: [{ PropertyId: 31903, PropertyLevel: 1, PropertyValue: 750 }],
                                            IsAvailable: false,
                                            IsLocked: true,
                                            IsTrash: false,
                                            Id: 32745,
                                            Level: 15,
                                            Uid: 1094,
                                            BreakLevel: 5,
                                            Exp: 0,
                                        },
                                    },
                                    {
                                        Slot: 6,
                                        Equipment: {
                                            RandomPropertyList: [
                                                { PropertyId: 20103, PropertyLevel: 3, PropertyValue: 240 },
                                                { PropertyId: 23203, PropertyLevel: 1, PropertyValue: 9 },
                                                { PropertyId: 21103, PropertyLevel: 2, PropertyValue: 480 },
                                                { PropertyId: 12102, PropertyLevel: 2, PropertyValue: 300 },
                                            ],
                                            MainPropertyList: [{ PropertyId: 11102, PropertyLevel: 1, PropertyValue: 750 }],
                                            IsAvailable: false,
                                            IsLocked: true,
                                            IsTrash: false,
                                            Id: 33146,
                                            Level: 15,
                                            Uid: 5016,
                                            BreakLevel: 5,
                                            Exp: 0,
                                        },
                                    },
                                ],
                                SkillLevelList: [
                                    { Level: 12, Index: 0 },
                                    { Level: 12, Index: 1 },
                                    { Level: 10, Index: 2 },
                                    { Level: 12, Index: 3 },
                                    { Level: 7, Index: 5 },
                                    { Level: 10, Index: 6 },
                                ],
                                TalentToggleList: [false, false, false, false, false, false],
                                ClaimedRewardList: [1, 3, 5],
                                WeaponEffectState: 1,
                                IsFavorite: true,
                                IsUpgradeUnlocked: false,
                                Id: 1371,
                                Level: 60,
                                PromotionLevel: 6,
                                Exp: 0,
                                SkinId: 3113711,
                                TalentLevel: 0,
                                UpgradeId: 0,
                                CoreSkillEnhancement: 6,
                                WeaponUid: 2829,
                                ObtainmentTimestamp: 1749205597,
                                Weapon: {
                                    IsAvailable: false,
                                    IsLocked: true,
                                    Id: 14137,
                                    Level: 60,
                                    Uid: 2829,
                                    BreakLevel: 5,
                                    Exp: 0,
                                    UpgradeLevel: 1,
                                },
                            },
                            {
                                EquippedList: [
                                    {
                                        Slot: 1,
                                        Equipment: {
                                            RandomPropertyList: [
                                                { PropertyId: 20103, PropertyLevel: 2, PropertyValue: 240 },
                                                { PropertyId: 11102, PropertyLevel: 3, PropertyValue: 300 },
                                                { PropertyId: 21103, PropertyLevel: 2, PropertyValue: 480 },
                                                { PropertyId: 31203, PropertyLevel: 1, PropertyValue: 9 },
                                            ],
                                            MainPropertyList: [{ PropertyId: 11103, PropertyLevel: 1, PropertyValue: 550 }],
                                            IsAvailable: false,
                                            IsLocked: true,
                                            IsTrash: false,
                                            Id: 33441,
                                            Level: 15,
                                            Uid: 5142,
                                            BreakLevel: 5,
                                            Exp: 0,
                                        },
                                    },
                                    {
                                        Slot: 2,
                                        Equipment: {
                                            RandomPropertyList: [
                                                { PropertyId: 21103, PropertyLevel: 3, PropertyValue: 480 },
                                                { PropertyId: 11103, PropertyLevel: 2, PropertyValue: 112 },
                                                { PropertyId: 11102, PropertyLevel: 3, PropertyValue: 300 },
                                                { PropertyId: 13102, PropertyLevel: 1, PropertyValue: 480 },
                                            ],
                                            MainPropertyList: [{ PropertyId: 12103, PropertyLevel: 1, PropertyValue: 79 }],
                                            IsAvailable: false,
                                            IsLocked: true,
                                            IsTrash: false,
                                            Id: 33442,
                                            Level: 15,
                                            Uid: 4494,
                                            BreakLevel: 5,
                                            Exp: 0,
                                        },
                                    },
                                    {
                                        Slot: 3,
                                        Equipment: {
                                            RandomPropertyList: [
                                                { PropertyId: 11102, PropertyLevel: 4, PropertyValue: 300 },
                                                { PropertyId: 21103, PropertyLevel: 1, PropertyValue: 480 },
                                                { PropertyId: 31203, PropertyLevel: 1, PropertyValue: 9 },
                                                { PropertyId: 20103, PropertyLevel: 2, PropertyValue: 240 },
                                            ],
                                            MainPropertyList: [{ PropertyId: 13103, PropertyLevel: 1, PropertyValue: 46 }],
                                            IsAvailable: false,
                                            IsLocked: false,
                                            IsTrash: false,
                                            Id: 33443,
                                            Level: 15,
                                            Uid: 5547,
                                            BreakLevel: 5,
                                            Exp: 0,
                                        },
                                    },
                                    {
                                        Slot: 4,
                                        Equipment: {
                                            RandomPropertyList: [
                                                { PropertyId: 20103, PropertyLevel: 1, PropertyValue: 240 },
                                                { PropertyId: 11103, PropertyLevel: 2, PropertyValue: 112 },
                                                { PropertyId: 13102, PropertyLevel: 4, PropertyValue: 480 },
                                                { PropertyId: 23203, PropertyLevel: 1, PropertyValue: 9 },
                                            ],
                                            MainPropertyList: [{ PropertyId: 11102, PropertyLevel: 1, PropertyValue: 750 }],
                                            IsAvailable: false,
                                            IsLocked: false,
                                            IsTrash: false,
                                            Id: 31044,
                                            Level: 15,
                                            Uid: 3765,
                                            BreakLevel: 5,
                                            Exp: 0,
                                        },
                                    },
                                    {
                                        Slot: 5,
                                        Equipment: {
                                            RandomPropertyList: [
                                                { PropertyId: 13102, PropertyLevel: 3, PropertyValue: 480 },
                                                { PropertyId: 23203, PropertyLevel: 2, PropertyValue: 9 },
                                                { PropertyId: 20103, PropertyLevel: 1, PropertyValue: 240 },
                                                { PropertyId: 21103, PropertyLevel: 2, PropertyValue: 480 },
                                            ],
                                            MainPropertyList: [{ PropertyId: 11102, PropertyLevel: 1, PropertyValue: 750 }],
                                            IsAvailable: false,
                                            IsLocked: true,
                                            IsTrash: false,
                                            Id: 33445,
                                            Level: 15,
                                            Uid: 5441,
                                            BreakLevel: 5,
                                            Exp: 0,
                                        },
                                    },
                                    {
                                        Slot: 6,
                                        Equipment: {
                                            RandomPropertyList: [
                                                { PropertyId: 20103, PropertyLevel: 2, PropertyValue: 240 },
                                                { PropertyId: 11103, PropertyLevel: 2, PropertyValue: 112 },
                                                { PropertyId: 13103, PropertyLevel: 4, PropertyValue: 15 },
                                                { PropertyId: 21103, PropertyLevel: 1, PropertyValue: 480 },
                                            ],
                                            MainPropertyList: [{ PropertyId: 11102, PropertyLevel: 1, PropertyValue: 750 }],
                                            IsAvailable: false,
                                            IsLocked: true,
                                            IsTrash: false,
                                            Id: 31046,
                                            Level: 15,
                                            Uid: 1315,
                                            BreakLevel: 5,
                                            Exp: 0,
                                        },
                                    },
                                ],
                                SkillLevelList: [
                                    { Level: 10, Index: 0 },
                                    { Level: 12, Index: 1 },
                                    { Level: 8, Index: 2 },
                                    { Level: 10, Index: 3 },
                                    { Level: 7, Index: 5 },
                                    { Level: 10, Index: 6 },
                                ],
                                TalentToggleList: [false, false, false, false, false, false],
                                ClaimedRewardList: [1, 3, 5],
                                WeaponEffectState: 1,
                                IsFavorite: false,
                                IsUpgradeUnlocked: false,
                                Id: 1451,
                                Level: 60,
                                PromotionLevel: 6,
                                Exp: 0,
                                SkinId: 0,
                                TalentLevel: 0,
                                UpgradeId: 0,
                                CoreSkillEnhancement: 6,
                                WeaponUid: 5615,
                                ObtainmentTimestamp: 1760513728,
                                Weapon: {
                                    IsAvailable: false,
                                    IsLocked: true,
                                    Id: 14145,
                                    Level: 60,
                                    Uid: 5615,
                                    BreakLevel: 5,
                                    Exp: 0,
                                    UpgradeLevel: 1,
                                },
                            },
                            {
                                EquippedList: [
                                    {
                                        Slot: 1,
                                        Equipment: {
                                            RandomPropertyList: [
                                                { PropertyId: 23203, PropertyLevel: 2, PropertyValue: 9 },
                                                { PropertyId: 13102, PropertyLevel: 2, PropertyValue: 480 },
                                                { PropertyId: 20103, PropertyLevel: 3, PropertyValue: 240 },
                                                { PropertyId: 31203, PropertyLevel: 2, PropertyValue: 9 },
                                            ],
                                            MainPropertyList: [{ PropertyId: 11103, PropertyLevel: 1, PropertyValue: 550 }],
                                            IsAvailable: false,
                                            IsLocked: false,
                                            IsTrash: false,
                                            Id: 33241,
                                            Level: 15,
                                            Uid: 2901,
                                            BreakLevel: 5,
                                            Exp: 0,
                                        },
                                    },
                                    {
                                        Slot: 2,
                                        Equipment: {
                                            RandomPropertyList: [
                                                { PropertyId: 21103, PropertyLevel: 2, PropertyValue: 480 },
                                                { PropertyId: 13102, PropertyLevel: 4, PropertyValue: 480 },
                                                { PropertyId: 20103, PropertyLevel: 2, PropertyValue: 240 },
                                                { PropertyId: 23203, PropertyLevel: 1, PropertyValue: 9 },
                                            ],
                                            MainPropertyList: [{ PropertyId: 12103, PropertyLevel: 1, PropertyValue: 79 }],
                                            IsAvailable: false,
                                            IsLocked: true,
                                            IsTrash: false,
                                            Id: 31042,
                                            Level: 15,
                                            Uid: 3012,
                                            BreakLevel: 5,
                                            Exp: 0,
                                        },
                                    },
                                    {
                                        Slot: 3,
                                        Equipment: {
                                            RandomPropertyList: [
                                                { PropertyId: 23203, PropertyLevel: 1, PropertyValue: 9 },
                                                { PropertyId: 20103, PropertyLevel: 4, PropertyValue: 240 },
                                                { PropertyId: 11103, PropertyLevel: 2, PropertyValue: 112 },
                                                { PropertyId: 12102, PropertyLevel: 2, PropertyValue: 300 },
                                            ],
                                            MainPropertyList: [{ PropertyId: 13103, PropertyLevel: 1, PropertyValue: 46 }],
                                            IsAvailable: false,
                                            IsLocked: true,
                                            IsTrash: false,
                                            Id: 33243,
                                            Level: 15,
                                            Uid: 3358,
                                            BreakLevel: 5,
                                            Exp: 0,
                                        },
                                    },
                                    {
                                        Slot: 4,
                                        Equipment: {
                                            RandomPropertyList: [
                                                { PropertyId: 12102, PropertyLevel: 3, PropertyValue: 300 },
                                                { PropertyId: 12103, PropertyLevel: 1, PropertyValue: 19 },
                                                { PropertyId: 11102, PropertyLevel: 2, PropertyValue: 300 },
                                                { PropertyId: 21103, PropertyLevel: 2, PropertyValue: 480 },
                                            ],
                                            MainPropertyList: [{ PropertyId: 20103, PropertyLevel: 1, PropertyValue: 600 }],
                                            IsAvailable: false,
                                            IsLocked: true,
                                            IsTrash: false,
                                            Id: 33244,
                                            Level: 15,
                                            Uid: 4278,
                                            BreakLevel: 5,
                                            Exp: 0,
                                        },
                                    },
                                    {
                                        Slot: 5,
                                        Equipment: {
                                            RandomPropertyList: [
                                                { PropertyId: 13103, PropertyLevel: 2, PropertyValue: 15 },
                                                { PropertyId: 11103, PropertyLevel: 2, PropertyValue: 112 },
                                                { PropertyId: 20103, PropertyLevel: 2, PropertyValue: 240 },
                                                { PropertyId: 21103, PropertyLevel: 2, PropertyValue: 480 },
                                            ],
                                            MainPropertyList: [{ PropertyId: 12102, PropertyLevel: 1, PropertyValue: 750 }],
                                            IsAvailable: false,
                                            IsLocked: true,
                                            IsTrash: false,
                                            Id: 31045,
                                            Level: 15,
                                            Uid: 1199,
                                            BreakLevel: 5,
                                            Exp: 0,
                                        },
                                    },
                                    {
                                        Slot: 6,
                                        Equipment: {
                                            RandomPropertyList: [
                                                { PropertyId: 20103, PropertyLevel: 1, PropertyValue: 240 },
                                                { PropertyId: 21103, PropertyLevel: 1, PropertyValue: 480 },
                                                { PropertyId: 23203, PropertyLevel: 3, PropertyValue: 9 },
                                                { PropertyId: 12103, PropertyLevel: 3, PropertyValue: 19 },
                                            ],
                                            MainPropertyList: [{ PropertyId: 30502, PropertyLevel: 1, PropertyValue: 1500 }],
                                            IsAvailable: false,
                                            IsLocked: false,
                                            IsTrash: false,
                                            Id: 33246,
                                            Level: 15,
                                            Uid: 6688,
                                            BreakLevel: 5,
                                            Exp: 0,
                                        },
                                    },
                                ],
                                SkillLevelList: [
                                    { Level: 11, Index: 0 },
                                    { Level: 12, Index: 1 },
                                    { Level: 8, Index: 2 },
                                    { Level: 12, Index: 3 },
                                    { Level: 7, Index: 5 },
                                    { Level: 11, Index: 6 },
                                ],
                                TalentToggleList: [false, false, false, false, false, false],
                                ClaimedRewardList: [1, 3, 5],
                                WeaponEffectState: 1,
                                IsFavorite: false,
                                IsUpgradeUnlocked: false,
                                Id: 1481,
                                Level: 60,
                                PromotionLevel: 6,
                                Exp: 0,
                                SkinId: 0,
                                TalentLevel: 0,
                                UpgradeId: 0,
                                CoreSkillEnhancement: 6,
                                WeaponUid: 671,
                                ObtainmentTimestamp: 1764147212,
                                Weapon: {
                                    IsAvailable: false,
                                    IsLocked: true,
                                    Id: 14110,
                                    Level: 60,
                                    Uid: 671,
                                    BreakLevel: 5,
                                    Exp: 0,
                                    UpgradeLevel: 1,
                                },
                            },
                        ],
                    },
                    SocialDetail: {
                        MedalList: [
                            { JNJGABNIHMA: false, Value: 9, MedalScore: 9, MedalIcon: 3001, MedalType: 3 },
                            { JNJGABNIHMA: false, Value: 6, MedalScore: 6, MedalIcon: 1002, MedalType: 1 },
                        ],
                        ProfileDetail: {
                            TitleInfo: { Args: [], Title: 3800138, FullTitle: 0 },
                            Nickname: "Tea",
                            AvatarId: 2021,
                            Level: 60,
                            Uid: 1504839124,
                            Title: 0,
                            ProfileId: 3231321,
                            PlatformType: 3,
                            CallingCardId: 3321011,
                        },
                        Desc: "chat, am i cooked?",
                    },
                },
                uid: "1504839124",
                ttl: 6,
            });
        }, 3000);
    });

    // beeceptor mock API for development/testing. Rate limited. Just use the above setTimeout one
    // return (await fetch(`https://zzzenka.free.beeceptor.com/${id}`)).json();

    // Production API using ENKA. Using allorigins as a proxy to bypass CORS issues. I want to keep this in a single react app. The only way to circumvent CORS is to use a separate backend which makes the actual request to ENKA.
    // const enkaUrl = `https://enka.network/api/zzz/uid/${id}`
    // const res = JSON.parse((await (await fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(enkaUrl)}`)).json()).contents)
    // console.log(res)
    // return res
};
