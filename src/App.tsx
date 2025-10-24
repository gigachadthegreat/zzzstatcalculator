import StatCalculator from "./components/StatCalculator";
import DamageCalculator from "./components/DamageCalculator";
import { StatType, type Stats, type SelectedDrives, type SeletedSubstats, AnomalyMultipliers, type statTypeKeys } from "./constants/types";
import { useState, useEffect, useRef } from "react";
import { calculateSheer, getCharacterFromName, getParameterizedStatsAsUrl, getsettingsFromUrl, getWengineFromName } from "./lib/Utility";
import { Characters } from "./constants/Characters";
import { Wengines } from "./constants/Wengines";
import { calculateStats } from "./lib/Calculations";
import Results from "./components/Results";

function App() {
    const imgRef = useRef<HTMLImageElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (imgRef.current) {
                const scrollY = -window.scrollY/15;
                console.log(scrollY)

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
            if (settings.defTarget != null) setDefTarget(settings.defTarget);
            if (settings.resTarget != null) setResTarget(settings.resTarget);
            if (settings.resReductionTarget != null) setResReductionTarget(settings.resReductionTarget);
            if (settings.dmgTakenIncrease != null) setDmgTakenIncrease(settings.dmgTakenIncrease);
            if (settings.dmgTakenReduction != null) setDmgTakenReduction(settings.dmgTakenReduction);
            if (settings.defenseShred != null) setDefenseShred(settings.defenseShred);
            if (settings.stunMultiplier != null) setStunMultiplier(settings.stunMultiplier);
            if (settings.resIgnore != null) setResIgnore(settings.resIgnore);
            if (settings.additionalDmgBonusMultiplierAttacker != null)
                setAdditionalDmgBonusMultiplierAttacker(settings.additionalDmgBonusMultiplierAttacker);
            if (settings.additionalSheerDmgBonusMultiplierAttacker != null)
                setAdditionalSheerDmgBonusMultiplierAttacker(settings.additionalSheerDmgBonusMultiplierAttacker);
            if (settings.critMode) setCritMode(settings.critMode as "avg" | "crit" | "noCrit");
            if (settings.multiplierValue != null) setMultiplierValue(settings.multiplierValue);
            if (settings.isRupture != null) setIsRupture(settings.isRupture);
            if (settings.isAnomaly != null) setIsAnomaly(settings.isAnomaly);
            if (settings.anomalyType != null) setAnomalyType(settings.anomalyType);
            if (settings.additionalHpFlat != null) setAdditionalHpFlat(settings.additionalHpFlat);
            if (settings.additionalHpPercent != null) setAdditionalHpPercent(settings.additionalHpPercent);
            if (settings.additionalAttackFlat != null) setAdditionalAttackFlat(settings.additionalAttackFlat);
            if (settings.additionalAttackPercent != null) setAdditionalAttackPercent(settings.additionalAttackPercent);
            if (settings.additionalPenPercent != null) setAdditionalPenPercent(settings.additionalPenPercent);
            if (settings.additionalPenFlat != null) setAdditionalPenFlat(settings.additionalPenFlat);
            if (settings.additionalCritRate != null) setAdditionalCritRate(settings.additionalCritRate);
            if (settings.additionalCritDamage != null) setAdditionalCritDamage(settings.additionalCritDamage);
            if (settings.additionalElementPercent != null) setAdditionalElementPercent(settings.additionalElementPercent);
            if (settings.additionalSheerFlat != null) setAdditionalSheerFlat(settings.additionalSheerFlat);
            if (settings.additionalSheerPercent != null) setAdditionalSheerPercent(settings.additionalSheerPercent);
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

    const [characterName, setCharacterName] = useState<string>(Characters[0].name);
    const [wengineName, setWengineName] = useState<string>("None");
    const [selectedDrives, setSelectedDrives] = useState<SelectedDrives>({
        drive1Enabled: false,
        drive2Enabled: false,
        drive3Enabled: false,
        drive4: StatType.NONE,
        drive5: StatType.NONE,
        drive6: StatType.NONE,
        drive2psc: StatType.NONE,
        drive4psc: StatType.NONE,
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
    const [defTarget, setDefTarget] = useState(953);
    const [resTarget, setResTarget] = useState(0);
    const [resReductionTarget, setResReductionTarget] = useState(0);
    const [dmgTakenIncrease, setDmgTakenIncrease] = useState(0);
    const [dmgTakenReduction, setDmgTakenReduction] = useState(0);
    const [defenseShred, setDefenseShred] = useState(0);
    const [stunMultiplier, setStunMultiplier] = useState(100);
    const [resIgnore, setResIgnore] = useState(0);
    const [additionalDmgBonusMultiplierAttacker, setAdditionalDmgBonusMultiplierAttacker] = useState(0);
    const [additionalSheerDmgBonusMultiplierAttacker, setAdditionalSheerDmgBonusMultiplierAttacker] = useState(0);
    const [critMode, setCritMode] = useState<"avg" | "crit" | "noCrit">("avg");
    const [multiplierValue, setMultiplierValue] = useState<number>(100);
    const [isRupture, setIsRupture] = useState<boolean>(getCharacterFromName(characterName, Characters).speciality == "RUPTURE");
    const [isAnomaly, setIsAnomaly] = useState<boolean>(getCharacterFromName(characterName, Characters).speciality == "ANOMALY");
    const [anomalyType, setAnomalyType] = useState<keyof typeof AnomalyMultipliers>("Burn");
    const [additionalHpFlat, setAdditionalHpFlat] = useState(0);
    const [additionalHpPercent, setAdditionalHpPercent] = useState(0);
    const [additionalAttackFlat, setAdditionalAttackFlat] = useState(0);
    const [additionalAttackPercent, setAdditionalAttackPercent] = useState(0);
    const [additionalPenPercent, setAdditionalPenPercent] = useState(0);
    const [additionalPenFlat, setAdditionalPenFlat] = useState(0);
    const [additionalCritRate, setAdditionalCritRate] = useState(0);
    const [additionalCritDamage, setAdditionalCritDamage] = useState(0);
    const [additionalElementPercent, setAdditionalElementPercent] = useState(0);
    const [additionalSheerFlat, setAdditionalSheerFlat] = useState(0);
    const [additionalSheerPercent, setAdditionalSheerPercent] = useState(0);
    // const [characterLevel, setCharacterLevel] = useState(60);

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
            HP_FLAT: calculatedStats.HP_FLAT * (additionalHpPercent / 100) + additionalHpFlat,
            ATTACK_FLAT: calculatedStats.ATTACK_FLAT * (additionalAttackPercent / 100) + additionalAttackFlat,
            DEFENSE_FLAT: 0,
            CRIT_RATE: additionalCritRate,
            CRIT_DAMAGE: additionalCritDamage,
            ELEMENT_PERCENT: additionalElementPercent,
            ANOMALY_PROFICIENCY_FLAT: 0,
            ANOMALY_MASTERY_FLAT: 0,
            PEN_PERCENT: additionalPenPercent,
            PEN_FLAT: additionalPenFlat,
            IMPACT_FLAT: 0,
            ENERGY_REGEN_FLAT: 0,
        });
    }, [
        calculatedStats,
        additionalHpFlat,
        additionalHpPercent,
        additionalAttackFlat,
        additionalAttackPercent,
        additionalPenPercent,
        additionalPenFlat,
        additionalCritRate,
        additionalCritDamage,
        additionalElementPercent,
    ]);

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
            drive2psc: StatType.NONE,
            drive4psc: StatType.NONE,
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
        setDefTarget(953);
        setResTarget(0);
        setResReductionTarget(0);
        setDmgTakenIncrease(0);
        setDmgTakenReduction(0);
        setDefenseShred(0);
        setStunMultiplier(100);
        setResIgnore(0);
        setAdditionalDmgBonusMultiplierAttacker(0);
        setAdditionalAttackFlat(0);
        setCritMode("avg");
        setMultiplierValue(100);
        setIsRupture(getCharacterFromName(newCharacterName, Characters).speciality == "RUPTURE");
        setIsAnomaly(getWengineFromName(newWengineName, Wengines).speciality == "ANOMALY");
        setAnomalyType("Burn");
        setAdditionalHpFlat(0);
        setAdditionalHpPercent(0);
        setAdditionalAttackFlat(0);
        setAdditionalAttackPercent(0);
        setAdditionalPenPercent(0);
        setAdditionalPenFlat(0);
        setAdditionalCritRate(0);
        setAdditionalCritDamage(0);
        setAdditionalElementPercent(0);
        setAdditionalSheerFlat(0);
        setAdditionalSheerPercent(0);

        setCalculatedStats(
            calculateStats(
                getCharacterFromName(newCharacterName, Characters),
                getWengineFromName(newWengineName, Wengines),
                newSelectedDrives,
                newSelectedSubstats
            )
        );

        const newUrl = window.location.origin + window.location.pathname + window.location.hash;

        // 2. Use the History API to update the URL
        // - null: The state object (can be any data you want to associate with the history entry)
        // - '': The title (most browsers ignore this, so an empty string is common)
        // - newUrl: The new URL to display in the address bar
        window.history.replaceState(null, "", newUrl);
    };

    return (
        <div className={`min-h-screen bg-gray-100 text-gray-800  `}>
            <header className="bg-white shadow sticky top-0 z-20">
                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
                    <h1 className="text-3xl font-bold text-gray-900">ZZZ Stat Calculator</h1>

                    <div className="space-x-5">
                        <button
                            className="right-5 cursor-pointer px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors"
                            onClick={() => resetEveryState()}
                        >
                            Reset everything
                        </button>

                        <button
                            className="cursor-pointer px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
                            onClick={() =>
                                navigator.clipboard.writeText(
                                    getParameterizedStatsAsUrl(
                                        characterName,
                                        wengineName,
                                        selectedDrives,
                                        selectedSubstats,
                                        defTarget,
                                        resTarget,
                                        resReductionTarget,
                                        dmgTakenIncrease,
                                        dmgTakenReduction,
                                        defenseShred,
                                        stunMultiplier,
                                        resIgnore,
                                        additionalDmgBonusMultiplierAttacker,
                                        additionalSheerDmgBonusMultiplierAttacker,
                                        critMode,
                                        multiplierValue,
                                        isRupture,
                                        isAnomaly,
                                        anomalyType,
                                        additionalHpFlat,
                                        additionalHpPercent,
                                        additionalAttackFlat,
                                        additionalAttackPercent,
                                        additionalPenPercent,
                                        additionalPenFlat,
                                        additionalCritRate,
                                        additionalCritDamage,
                                        additionalElementPercent,
                                        additionalSheerFlat,
                                        additionalSheerPercent
                                        // characterLevel
                                    )
                                )
                            }
                        >
                            Copy Build Link
                        </button>
                    </div>
                </div>
            </header>

            <div className="grid grid-cols-5 ">
                <div className="pt-15">
                    <img
                        ref={imgRef}
                        className={`object-contain w-3/5  left-25 z-0 scale-700 top-135 sticky drop-shadow-gray-300 drop-shadow-sm`} //top-135
                        src={import.meta.env.BASE_URL + `/assets/images/Characters/${characterName}.PNG`}
                        alt="character avatar"
                    />
                </div>
                <div className="col-span-3 z-10">
                    <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 ">
                        <div className="space-y-8">
                            <div className="bg-white shadow-md rounded-lg p-6">
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

                            <div className="bg-white shadow-md rounded-lg p-6">
                                <Results
                                    header="Character Stats"
                                    infoText="Character stats as displayed in character selection menu"
                                    calculatedStats={calculatedStats}
                                    additionalStats={additionalStats}
                                    isRupture={getCharacterFromName(characterName, Characters).speciality == "RUPTURE" || isRupture}
                                    additionalSheer={
                                        additionalSheerFlat +
                                        calculateSheer(calculatedStats.HP_FLAT, calculatedStats.ATTACK_FLAT) *
                                            (additionalSheerPercent / 100)
                                    }
                                />
                            </div>

                            <div className="bg-white shadow-md rounded-lg p-6">
                                <DamageCalculator
                                    calculatedStats={calculatedStats}
                                    characterName={characterName}
                                    defTarget={defTarget}
                                    resReductionTarget={resReductionTarget}
                                    setResReductionTarget={(value) => setResReductionTarget(value)}
                                    setDefTarget={(value) => setDefTarget(value)}
                                    resTarget={resTarget}
                                    setResTarget={(value) => setResTarget(value)}
                                    dmgTakenIncrease={dmgTakenIncrease}
                                    setDmgTakenIncrease={(value) => setDmgTakenIncrease(value)}
                                    dmgTakenReduction={dmgTakenReduction}
                                    setDmgTakenReduction={(value) => setDmgTakenReduction(value)}
                                    defenseShred={defenseShred}
                                    setDefenseShred={(value) => setDefenseShred(value)}
                                    stunMultiplier={stunMultiplier}
                                    setStunMultiplier={(value) => setStunMultiplier(value)}
                                    resIgnore={resIgnore}
                                    setResIgnore={(value) => setResIgnore(value)}
                                    additionalDmgBonusMultiplierAttacker={additionalDmgBonusMultiplierAttacker}
                                    setAdditionalDmgBonusMultiplierAttacker={(value) => setAdditionalDmgBonusMultiplierAttacker(value)}
                                    additionalSheerDmgBonusMultiplierAttacker={additionalSheerDmgBonusMultiplierAttacker}
                                    setAdditionalSheerDmgBonusMultiplierAttacker={setAdditionalSheerDmgBonusMultiplierAttacker}
                                    critMode={critMode}
                                    setCritMode={(value) => setCritMode(value)}
                                    multiplierValue={multiplierValue}
                                    setMultiplierValue={(value) => setMultiplierValue(value)}
                                    isRupture={isRupture}
                                    setIsRupture={(value) => setIsRupture(value)}
                                    isAnomaly={isAnomaly}
                                    setIsAnomaly={(value) => setIsAnomaly(value)}
                                    anomalyType={anomalyType}
                                    setAnomalyType={(value) => setAnomalyType(value)}
                                    additionalHpFlat={additionalHpFlat}
                                    setAdditionalHpFlat={(value) => setAdditionalHpFlat(value)}
                                    additionalHpPercent={additionalHpPercent}
                                    setAdditionalHpPercent={(value) => setAdditionalHpPercent(value)}
                                    additionalAttackFlat={additionalAttackFlat}
                                    setAdditionalAttackFlat={(value) => setAdditionalAttackFlat(value)}
                                    additionalAttackPercent={additionalAttackPercent}
                                    setAdditionalAttackPercent={(value) => setAdditionalAttackPercent(value)}
                                    additionalPenPercent={additionalPenPercent}
                                    setAdditionalPenPercent={(value) => setAdditionalPenPercent(value)}
                                    additionalPenFlat={additionalPenFlat}
                                    setAdditionalPenFlat={(value) => setAdditionalPenFlat(value)}
                                    additionalCritRate={additionalCritRate}
                                    setAdditionalCritRate={(value) => setAdditionalCritRate(value)}
                                    additionalCritDamage={additionalCritDamage}
                                    setAdditionalCritDamage={(value) => setAdditionalCritDamage(value)}
                                    additionalElementPercent={additionalElementPercent}
                                    setAdditionalElementPercent={(value) => setAdditionalElementPercent(value)}
                                    additionalSheerFlat={additionalSheerFlat}
                                    setAdditionalSheerFlat={(value) => setAdditionalSheerFlat(value)}
                                    additionalSheerPercent={additionalSheerPercent}
                                    setAdditionalSheerPercent={(value) => setAdditionalSheerPercent(value)}
                                    // characterLevel={characterLevel}
                                    // setCharacterLevel={(value) => setCharacterLevel(value)}
                                />
                            </div>
                        </div>
                    </main>
                </div>
            </div>
            <div
                className="fixed bottom-5 right-5 cursor-pointer rounded-full bg-gray-700 px-4 py-2 text-white shadow-lg transition-colors hover:bg-gray-800"
                onClick={() => window.open("https://github.com/gigachadthegreat/zzzstatcalculator/issues")}
            >
                Report an issue
            </div>
        </div>
    );
}

export default App;
