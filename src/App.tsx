import StatCalculator from "./components/StatCalculator";
import DamageCalculator from "./components/DamageCalculator";
import {
    StatType,
    type Stats,
    type SelectedDrives,
    type SeletedSubstats,
    AnomalyMultipliers,
    type statTypeKeys,
    type AttackModifiers,
    levelFactorAttacker,
    type AttackStats,
    DriveDisks,
    type AdditionalStats,
} from "./constants/types";
import { useState, useEffect, useRef } from "react";
import {
    getCharacterFromName,
    getMultiplierFromAttack,
    getParameterizedStatsAsUrl,
    getsettingsFromUrl,
    getWengineFromName,
    getEnkaData,
} from "./lib/Utility";
import { Characters } from "./constants/Characters";
import { Wengines } from "./constants/Wengines";
import { calculateStats, calculateSheer } from "./lib/Calculations";
import Results from "./components/Results";
import { Attacks } from "./constants/AttackStats";

import { DiskIds, StatIds } from "./constants/GameIds";
import Spinner from "./components/Spinner";

function App() {
    const imgRef = useRef<HTMLImageElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (imgRef.current) {
                const scrollY = -window.scrollY / 15;
                imgRef.current.style.transform = `translateY(${scrollY}px) `;
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const settings = getsettingsFromUrl();
        if (Object.keys(settings).length > 0) {
            if (settings.characterName) setCharacterName(settings.characterName);
            if (settings.wengineName) setWengineName(settings.wengineName);
            if (settings.selectedDrives) setSelectedDrives(settings.selectedDrives as SelectedDrives);
            if (settings.selectedSubstats) setSelectedSubstats(settings.selectedSubstats as SeletedSubstats);
            if (settings.attackModifiers != null) setAttackModifiers(settings.attackModifiers);

            if (settings.multiplierValue != null) setMultiplier(settings.multiplierValue);
            if (settings.attackUsed != null)
                setAttackUsed(
                    Attacks.filter((attack) => attack.characterName === settings.characterName)[0].attackStats.filter(
                        (attack) => attack.attackName === settings.attackUsed
                    )[0]
                );
            if (settings.attackLevel != null) setAttackLevel(settings.attackLevel);

            if (settings.isCustomMultiplier != null) setIsCustomMultiplier(settings.isCustomMultiplier);

            if (settings.isRupture != null) setIsRupture(settings.isRupture);
            if (settings.isAnomaly != null) setIsAnomaly(settings.isAnomaly);
            if (settings.anomalyType != null) setAnomalyType(settings.anomalyType);
            if (settings.additionalStatsUI != null) setAdditionalStatsUI(settings.additionalStatsUI);

            // if (settings.characterLevel != null) setCharacterLevel(settings.characterLevel);

            setCalculatedStats(
                calculateStats(
                    getCharacterFromName(settings.characterName, Characters),
                    getWengineFromName(settings.wengineName, Wengines),
                    settings.selectedDrives,
                    settings.selectedSubstats
                )
            );
        }
    }, []);

    const [showEnkaOverlay, setShowEnkaOverlay] = useState<boolean>(false);
    const [characterName, setCharacterName] = useState<string>(Characters[0].name);
    const [wengineName, setWengineName] = useState<string>("None");
    const [selectedDrives, setSelectedDrives] = useState<SelectedDrives>({
        drive1Enabled: false,
        drive2Enabled: false,
        drive3Enabled: false,
        drive4: StatType.NONE,
        drive5: StatType.NONE,
        drive6: StatType.NONE,
        drive2psc1: StatType.NONE,
        drive2psc2: StatType.NONE,
        drive2psc3: StatType.NONE,
    });
    const [selectedSubstats, setSelectedSubstats] = useState<SeletedSubstats>({
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
    });

    const [calculatedStats, setCalculatedStats] = useState<Stats>(
        calculateStats(
            getCharacterFromName(characterName, Characters),
            getWengineFromName(wengineName, Wengines),
            selectedDrives,
            selectedSubstats
        )
    );

    // Damage Calculator State
    const [attackUsed, setAttackUsed] = useState<AttackStats>(
        Attacks.filter((attack) => attack.characterName === characterName)[0].attackStats[0]
    );
    const [attackLevel, setAttackLevel] = useState<number>(12);
    const [multiplier, setMultiplier] = useState<number>(
        getMultiplierFromAttack(Attacks, characterName, attackUsed.Level1Damage, attackUsed.growthPerLevel, attackLevel)
    );
    const [isCustomMultiplier, setIsCustomMultiplier] = useState<boolean>(false);

    const [isRupture, setIsRupture] = useState<boolean>(getCharacterFromName(characterName, Characters).speciality == "RUPTURE");
    const [isAnomaly, setIsAnomaly] = useState<boolean>(getCharacterFromName(characterName, Characters).speciality == "ANOMALY");
    const [anomalyType, setAnomalyType] = useState<keyof typeof AnomalyMultipliers>("Burn");

    const [additionalStatsUI, setAdditionalStatsUI] = useState<AdditionalStats>({
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
    });

    const [enkaCharacters, setEnkaCharacters] = useState<any[]>([]);
    const [enkaPlayerName, setEnkaPlayer] = useState();
    const [loadingEnkaDataSpinner, setLoadingEnkaDataSpinner] = useState<boolean>(false);

    const [attackModifiers, setAttackModifiers] = useState<AttackModifiers>({
        additionalSheerDmgBonusMultiplierAttacker: 0,
        additionalDmgBonusMultiplierAttacker: 0,
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
    });

    const [additionalStats, setAdditionalStats] = useState<Stats>({
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
    });

    useEffect(() => {
        setAdditionalStats({
            HP_FLAT: calculatedStats.HP_FLAT * (additionalStatsUI.additionalHpPercent / 100) + additionalStatsUI.additionalHpFlat,
            ATTACK_FLAT:
                calculatedStats.ATTACK_FLAT * (additionalStatsUI.additionalAttackPercent / 100) + additionalStatsUI.additionalAttackFlat,
            DEFENSE_FLAT: 0,
            CRIT_RATE: additionalStatsUI.additionalCritRate,
            CRIT_DAMAGE: additionalStatsUI.additionalCritDamage,
            ELEMENT_PERCENT: additionalStatsUI.additionalElementPercent,
            ANOMALY_PROFICIENCY_FLAT: 0,
            ANOMALY_MASTERY_FLAT: 0,
            PEN_PERCENT: additionalStatsUI.additionalPenPercent,
            PEN_FLAT: additionalStatsUI.additionalPenFlat,
            IMPACT_FLAT: 0,
            ENERGY_REGEN_FLAT: 0,
        });
    }, [calculatedStats, additionalStatsUI, characterName]);

    const handeCharacterChange = (newCharacterName: string) => {
        setCharacterName(() => {
            const calculatedStats = calculateStats(
                getCharacterFromName(newCharacterName, Characters),
                getWengineFromName(wengineName, Wengines),
                selectedDrives,
                selectedSubstats
            );
            setCalculatedStats(calculatedStats);

            setIsRupture(getCharacterFromName(newCharacterName, Characters).speciality == "RUPTURE");
            setIsAnomaly(getCharacterFromName(newCharacterName, Characters).speciality == "ANOMALY");

            setAttackUsed(Attacks.filter((attack) => attack.characterName === newCharacterName)[0].attackStats[0]);

            return newCharacterName;
        });
    };

    const handeWengineChange = (newWengineName: string) => {
        setWengineName(() => {
            const calculatedStats = calculateStats(
                getCharacterFromName(characterName, Characters),
                getWengineFromName(newWengineName, Wengines),
                selectedDrives,
                selectedSubstats
            );
            setCalculatedStats(calculatedStats);

            return newWengineName;
        });
    };

    const handleDriveChange = (drivePosition: keyof SelectedDrives, driveValue: statTypeKeys | boolean) => {
        setSelectedDrives((prev) => {
            if (!prev) return prev;
            const newDrives = { ...prev, [drivePosition]: driveValue };

            const calculatedStats = calculateStats(
                getCharacterFromName(characterName, Characters),
                getWengineFromName(wengineName, Wengines),
                newDrives,
                selectedSubstats
            );
            setCalculatedStats(calculatedStats);

            return newDrives;
        });
    };

    const handleSubstatChange = (stat: string, count: number) => {
        setSelectedSubstats((prev) => {
            if (!prev) return prev;
            const newSubstats = { ...prev, [stat]: count };

            const calculatedStats = calculateStats(
                getCharacterFromName(characterName, Characters),
                getWengineFromName(wengineName, Wengines),
                selectedDrives,
                newSubstats
            );
            setCalculatedStats(calculatedStats);

            return newSubstats;
        });
    };

    const resetEveryState = () => {
        const newCharacterName = Characters[0].name;
        const newWengineName = "None";
        const newSelectedDrives = {
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
        const newSelectedSubstats = {
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

        setCharacterName(newCharacterName);
        setWengineName(newWengineName);
        setSelectedDrives(newSelectedDrives);

        setSelectedSubstats(newSelectedSubstats);

        // Damage Calculator State
        setAttackModifiers({
            additionalDmgBonusMultiplierAttacker: 0,
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
            additionalSheerDmgBonusMultiplierAttacker: 0,
        });

        setAttackLevel(12);
        setMultiplier(getMultiplierFromAttack(Attacks, characterName, attackUsed.Level1Damage, attackUsed.growthPerLevel, attackLevel));
        setIsCustomMultiplier(false);

        setIsRupture(getCharacterFromName(newCharacterName, Characters).speciality == "RUPTURE");
        setIsAnomaly(getWengineFromName(newWengineName, Wengines).speciality == "ANOMALY");
        setAnomalyType("Burn");
        setAdditionalStatsUI({
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
        });

        setCalculatedStats(
            calculateStats(
                getCharacterFromName(newCharacterName, Characters),
                getWengineFromName(newWengineName, Wengines),
                newSelectedDrives,
                newSelectedSubstats
            )
        );

        const newUrl = window.location.origin + window.location.pathname + window.location.hash;
        window.history.replaceState(null, "", newUrl);
    };
    const handleKeyDown = async (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            setLoadingEnkaDataSpinner(true);
            if (isNaN(Number(event.currentTarget.value))) {
                // TODO: Display to user that this is unacceptable!!!!! HERETIC!!!
                return;
            }
            const result = (await getEnkaData(event.currentTarget.value)).PlayerInfo;

            setEnkaPlayer(result.SocialDetail); // TODO: Create and write Enka Data into proper data structure, instead of just dumping it into a state.
            setEnkaCharacters(result.ShowcaseDetail.AvatarList);
            setLoadingEnkaDataSpinner(false);
        }
    };

    const getDriveMainStatType = (statId: number) => {
        const driveMainStatEntry = Object.entries(StatIds).find(([key, val]) => Number(key) === Number(statId));

        if (!driveMainStatEntry) {
            console.warn("Unknown substat id (no matching entry in SubstatIds):", statId);
            return StatType.NONE;
        }

        const keyName = driveMainStatEntry[1];

        // StatType is a const object; index it safely and fall back to NONE
        return (StatType as Record<string, string>)[keyName] ?? StatType.NONE;
    };

    const handleEnkaCharacterSelect = (character: any) => {
        const _characterName = Characters.find((char) => char.id === character.Id)?.name || Characters[0].name
        setCharacterName(_characterName);
        setWengineName(
            Wengines.find((wengine) => wengine.id === (character.Weapon ? character.Weapon.Id : "-1"))?.name ||
                Wengines[Wengines.length - 1].name
        );

        // HANDLE DISK DRIVES
        const disk1 = character.EquippedList.find((disk: any) => disk.Slot === 1);
        const disk2 = character.EquippedList.find((disk: any) => disk.Slot === 2);
        const disk3 = character.EquippedList.find((disk: any) => disk.Slot === 3);
        const disk4 = character.EquippedList.find((disk: any) => disk.Slot === 4);
        const disk5 = character.EquippedList.find((disk: any) => disk.Slot === 5);
        const disk6 = character.EquippedList.find((disk: any) => disk.Slot === 6);

        const drive4MainStatId = disk4?.Equipment?.MainPropertyList?.[0]?.PropertyId
            ? parseInt(disk4.Equipment.MainPropertyList[0].PropertyId)
            : undefined;
        const drive5MainStatId = disk5?.Equipment?.MainPropertyList?.[0]?.PropertyId
            ? parseInt(disk5.Equipment.MainPropertyList[0].PropertyId)
            : undefined;
        const drive6MainStatId = disk6?.Equipment?.MainPropertyList?.[0]?.PropertyId
            ? parseInt(disk6.Equipment.MainPropertyList[0].PropertyId)
            : undefined;

        const driveIds = [];
        // Normalize disk IDs to the nearest lower hundred (e.g. 33341 -> 33300)
        driveIds.push(
            disk1?.Equipment?.MainPropertyList?.[0]?.PropertyId
                ? (Math.floor(parseInt(disk1.Equipment.Id, 10) / 100) * 100).toString()
                : undefined
        );
        driveIds.push(
            disk2?.Equipment?.MainPropertyList?.[0]?.PropertyId
                ? (Math.floor(parseInt(disk2.Equipment.Id, 10) / 100) * 100).toString()
                : undefined
        );
        driveIds.push(
            disk3?.Equipment?.MainPropertyList?.[0]?.PropertyId
                ? (Math.floor(parseInt(disk3.Equipment.Id, 10) / 100) * 100).toString()
                : undefined
        );
        driveIds.push(
            disk4?.Equipment?.MainPropertyList?.[0]?.PropertyId
                ? (Math.floor(parseInt(disk4.Equipment.Id, 10) / 100) * 100).toString()
                : undefined
        );
        driveIds.push(
            disk5?.Equipment?.MainPropertyList?.[0]?.PropertyId
                ? (Math.floor(parseInt(disk5.Equipment.Id, 10) / 100) * 100).toString()
                : undefined
        );
        driveIds.push(
            disk6?.Equipment?.MainPropertyList?.[0]?.PropertyId
                ? (Math.floor(parseInt(disk6.Equipment.Id, 10) / 100) * 100).toString()
                : undefined
        );

        const map = new Map();

        for (const driveId of driveIds) {
            if (driveId) {
                const currentCount = map.get(driveId) || 0;
                map.set(driveId, currentCount + 1);
            }
        }

        const twoPscEffect = [];
        for (const [driveId, count] of map.entries()) {
            if (count >= 2) {
                const twoPieceIds = Number(Object.entries(DiskIds).find(([key, val]) => Number(key) === Number(driveId))[0]);
                twoPscEffect.push(Object.entries(DriveDisks).find(([key, val]) => Number(val.id) === twoPieceIds)[1].mainStat);
            }
        }

        const drives = {
            drive1Enabled: character.EquippedList.some((disk: any) => disk.Slot === 1),
            drive2Enabled: character.EquippedList.some((disk: any) => disk.Slot === 2),
            drive3Enabled: character.EquippedList.some((disk: any) => disk.Slot === 3),
            drive4: drive4MainStatId ? getDriveMainStatType(drive4MainStatId) : StatType.NONE,
            drive5: drive5MainStatId ? getDriveMainStatType(drive5MainStatId) : StatType.NONE,
            drive6: drive6MainStatId ? getDriveMainStatType(drive6MainStatId) : StatType.NONE,
            drive2psc1: twoPscEffect[0] ?? StatType.NONE,
            drive2psc2: twoPscEffect[1] ?? StatType.NONE,
            drive2psc3: twoPscEffect[2] ?? StatType.NONE,
        };
        setSelectedDrives(drives);

        // HANDLE SUBSTATS
        const substatMap = new Map<string, number>();
        const diskSlots = [disk1, disk2, disk3, disk4, disk5, disk6];

        for (const disk of diskSlots) {
            if (disk != undefined)
                for (const substat of disk.Equipment.RandomPropertyList) {
                    const substatId = Number(substat.PropertyId);
                    // Look up the substat key from StatIds
                    const substatEntry = Object.entries(StatIds).find(([key]) => Number(key) === substatId)[1];
                    const substatCount = substat.PropertyLevel;
                    const currentCount = substatMap.get(substatEntry) || 0;
                    substatMap.set(substatEntry, currentCount + substatCount);
                }
        }

        // Build selectedSubstats object from the accumulated map
        const newSubstats: SeletedSubstats = {
            HP_PERCENT: substatMap.get("HP_PERCENT") || 0,
            HP_FLAT: substatMap.get("HP_FLAT") || 0,
            ATTACK_PERCENT: substatMap.get("ATTACK_PERCENT") || 0,
            ATTACK_FLAT: substatMap.get("ATTACK_FLAT") || 0,
            DEFENSE_PERCENT: substatMap.get("DEFENSE_PERCENT") || 0,
            DEFENSE_FLAT: substatMap.get("DEFENSE_FLAT") || 0,
            CRIT_RATE: substatMap.get("CRIT_RATE") || 0,
            CRIT_DAMAGE: substatMap.get("CRIT_DAMAGE") || 0,
            ANOMALY_PROFICIENCY_FLAT: substatMap.get("ANOMALY_PROFICIENCY_FLAT") || 0,
            PEN_FLAT: substatMap.get("PEN_FLAT") || 0,
        };
        setSelectedSubstats(newSubstats);

        const calculatedStats = calculateStats(
            getCharacterFromName(_characterName, Characters),
            getWengineFromName(
                Wengines.find((wengine) => wengine.id === (character.Weapon ? character.Weapon.Id : "-1"))?.name ||
                    Wengines[Wengines.length - 1].name,
                Wengines
            ),
            drives,
            newSubstats
        );

        setCalculatedStats(calculatedStats);
        const _attackUsed = Attacks.filter(
            (attack) => attack.characterName === _characterName
        )[0].attackStats[0];

        console.log(_attackUsed)
        setAttackUsed(_attackUsed);

        setMultiplier(
            getMultiplierFromAttack(
                Attacks,
                _characterName,
                attackUsed.Level1Damage,
                attackUsed.growthPerLevel,
                attackLevel
            )
        );

        setShowEnkaOverlay(false);
    };

    return (
        <div className={`relative min-h-screen  text-gray-800 dark:bg-slate-950 dark:text-gray-200`}>
            {showEnkaOverlay ? (
                <div className="absolute z-50 w-full h-full">
                    <div className="absolute w-full h-full opacity-80 z-50 bg-black"></div>
                    <div className="fixed w-full h-full flex justify-center items-center z-60">
                        <div className="opacity-100 w-150 p-2 border rounded bg-gray-50 dark:bg-slate-800 dark:border-slate-600 flex flex-col">
                            <div
                                className="cursor-pointer hover:bg-gray-900 rounded-sm ml-auto py-2 px-3 text-xl font-bold"
                                onClick={() => setShowEnkaOverlay(false)}
                            >
                                &#x2715;
                            </div>

                            <div>
                                <input
                                    className="w-full p-2 border rounded bg-white dark:bg-slate-700 dark:border-slate-600"
                                    type="number"
                                    onKeyDown={handleKeyDown}
                                ></input>
                                <br />
                                {loadingEnkaDataSpinner ? <Spinner /> : <></>}
                                <div className="items-center">
                                    <div className="w-full m-2 text-3xl  text-gray-900 dark:text-gray-100 text-center">
                                        {enkaPlayerName?.ProfileDetail?.Nickname}
                                    </div>
                                    <div className="w-full m-2 text-xl  text-gray-900 dark:text-gray-100 text-center">
                                        &nbsp;{enkaPlayerName?.Desc}
                                    </div>
                                </div>

                                <div>
                                    {enkaCharacters.map((enkaCharacter) => {
                                        return (
                                            <div
                                                className="p-2 text-3xl  text-gray-900 dark:text-gray-100 cursor-pointer hover:bg-gray-900"
                                                key={enkaCharacter.Id}
                                                onClick={() => handleEnkaCharacterSelect(enkaCharacter)}
                                            >
                                                {Characters.find((character) => character.id === enkaCharacter.Id)?.name.toString()}
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <></>
            )}
            <header className="bg-white shadow sticky top-0 z-30 dark:bg-slate-900 dark:border-b dark:border-slate-800">
                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">ZZZ Stat Calculator</h1>

                    <div className="space-x-5">
                        <button
                            className="right-5 cursor-pointer px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors"
                            onClick={() => resetEveryState()}
                        >
                            Reset everything
                        </button>

                        <button
                            className="right-5 cursor-pointer px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors"
                            onClick={async () => {
                                setShowEnkaOverlay(true);
                            }}
                        >
                            Import Data from enka.network
                        </button>

                        <button
                            className="cursor-pointer px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
                            onClick={() =>
                                navigator.clipboard.writeText(
                                    getParameterizedStatsAsUrl(
                                        attackModifiers,
                                        characterName,
                                        wengineName,
                                        selectedDrives,
                                        selectedSubstats,
                                        multiplier,
                                        attackUsed.attackName,
                                        attackLevel,
                                        isCustomMultiplier,
                                        isRupture,
                                        isAnomaly,
                                        anomalyType,
                                        additionalStatsUI
                                    )
                                )
                            }
                        >
                            Copy Build Link
                        </button>
                    </div>
                </div>
            </header>

            <div
                className="z-0 absolute inset-0 bg-[url(/assets/images/background.webp)] bg-cover bg-center z-10 pointer-events-none opacity-50 blur-sm -left-100"
                aria-hidden="true"
            />

            <div className="grid grid-cols-5 ">
                {/* Character Image */}
                <div className="pt-15">
                    <img
                        ref={imgRef}
                        className={` w-3/5  left-25 z-10 scale-700 top-135 sticky`} //top-135
                        src={import.meta.env.BASE_URL + `/assets/images/Characters/${characterName}.webp`}
                        alt="character avatar"
                    />
                </div>
                <div className="col-span-3 z-20">
                    <main className="max-w-9xl mx-auto py-6 sm:px-6 lg:px-8 ">
                        <div className="space-y-8">
                            <div className="bg-white shadow-md rounded-lg p-6 dark:bg-slate-900">
                                <StatCalculator
                                    characterName={characterName}
                                    wengineName={wengineName}
                                    selectedDrives={selectedDrives}
                                    selectedSubstats={selectedSubstats}
                                    onCharacterChange={(characterName) => handeCharacterChange(characterName)}
                                    onWengineChange={(wengineName) => handeWengineChange(wengineName)}
                                    onDriveChange={(drivePosition, driveValue) => handleDriveChange(drivePosition, driveValue)}
                                    onSubstatChange={(stat, value) => handleSubstatChange(stat, value)}
                                />
                            </div>

                            <div className="bg-white shadow-md rounded-lg p-6 dark:bg-slate-900">
                                <Results
                                    header="Character Stats"
                                    calculatedStats={calculatedStats}
                                    additionalStats={additionalStats}
                                    isRupture={getCharacterFromName(characterName, Characters).speciality == "RUPTURE" || isRupture}
                                    additionalSheer={
                                        additionalStatsUI.additionalSheerFlat +
                                        calculateSheer(calculatedStats.HP_FLAT, calculatedStats.ATTACK_FLAT) *
                                            (additionalStatsUI.additionalSheerPercent / 100)
                                    }
                                />
                            </div>

                            <div className="bg-white shadow-md rounded-lg p-6 dark:bg-slate-900">
                                <DamageCalculator
                                    calculatedStats={calculatedStats}
                                    characterName={characterName}
                                    attackModifiers={attackModifiers}
                                    setAttackModifiers={(value) => setAttackModifiers(value)}
                                    attackUsed={attackUsed}
                                    setAttackUsed={(value) => setAttackUsed(value)}
                                    attackLevel={attackLevel}
                                    setAttackLevel={(value) => setAttackLevel(value)}
                                    multiplier={multiplier}
                                    setMultiplier={(value) => setMultiplier(value)}
                                    isCustomMultiplier={isCustomMultiplier}
                                    setIsCustomMultiplier={(value) => setIsCustomMultiplier(value)}
                                    isRupture={isRupture}
                                    setIsRupture={(value) => setIsRupture(value)}
                                    isAnomaly={isAnomaly}
                                    setIsAnomaly={(value) => setIsAnomaly(value)}
                                    anomalyType={anomalyType}
                                    setAnomalyType={(value) => setAnomalyType(value)}
                                    additionalStatsUI={additionalStatsUI}
                                    setAdditionalStatsUI={(value) => setAdditionalStatsUI(value)}
                                />
                            </div>
                        </div>
                    </main>
                </div>
            </div>

            {/* "Report and Issue" button */}
            <div
                className="z-10 fixed bottom-5 right-5 cursor-pointer rounded-full bg-gray-500 px-4 py-2 text-white shadow-lg transition-colors hover:bg-gray-600"
                onClick={() => window.open("https://github.com/gigachadthegreat/zzzstatcalculator/issues")}
            >
                Report an issue
            </div>
        </div>
    );
}

export default App;
