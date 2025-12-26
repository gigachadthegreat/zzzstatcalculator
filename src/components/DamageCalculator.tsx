import { useEffect, useState } from "react";
import {
    type Stats,
    AnomalyMultipliers,
    type Attack,
    AttackTypes,
    type AttackModifiers,
    type AdditionalStats,
    type Character,
} from "../constants/types";
import LabelWithTextInput from "./LabelWithTextInput";
import DamageFormulaStandard from "./DamageFormulaStandard.tsx";
import DamageFormulaAnomaly from "./DamageFormulaAnomaly.tsx";
import DamageFormulaRupture from "./DamageFormulaRupture.tsx";

import { getMultiplierFromAttack } from "../lib/Utility";

import { calculateDamageDealt, calculateSheerDamageDealt, calculateAnomalyDamageDealt } from "../lib/Calculations.ts";

import LabelWithInfo from "./LabelWithInfo";
import { Attacks } from "../constants/AttackStats.tsx";
import {
    EvelynAdditionalActive,
    HarumasaAdditionalActive,
    LuciaHpBonus,
    YanagiEXSpecial,
    YanagiUltimate,
    YixuanAdditionalActiveStunned,
    YixuanBonus,
    ZhuYuanInStun,
    ZhuYuanOutOfStun,
} from "../lib/CustomCalculators.tsx";

function DamageCalculator({
    calculatedStats,
    character,

    attackModifiers,
    setAttackModifiers,

    attackUsed,
    setAttackUsed,

    attackLevel,
    setAttackLevel,

    multiplier,
    setMultiplier,

    isCustomMultiplier,
    setIsCustomMultiplier,

    isRupture,
    setIsRupture,

    isAnomaly,
    setIsAnomaly,

    anomalyType,
    setAnomalyType,

    additionalStatsUI,
    setAdditionalStatsUI,
}: {
    calculatedStats: Stats;
    character: Character;

    attackModifiers: AttackModifiers;
    setAttackModifiers: (value: AttackModifiers) => void;

    attackUsed: Attack;
    setAttackUsed: (value: Attack) => void;

    attackLevel: number;
    setAttackLevel: (value: number) => void;

    multiplier: number;
    setMultiplier: (value: number) => void;

    isCustomMultiplier: boolean;
    setIsCustomMultiplier: (value: boolean) => void;

    isRupture: boolean;
    setIsRupture: (value: boolean) => void;

    isAnomaly: boolean;
    setIsAnomaly: (value: boolean) => void;

    anomalyType: keyof typeof AnomalyMultipliers;
    setAnomalyType: (value: keyof typeof AnomalyMultipliers) => void;

    additionalStatsUI: AdditionalStats;
    setAdditionalStatsUI: (value: AdditionalStats) => void;
}) {
    const [isFormulaVisible, setIsFormulaVisible] = useState(false);

    const [finalStats, setFinalStats] = useState<Stats>({
        ...calculatedStats,
        HP_FLAT: calculatedStats.HP_FLAT * (1 + additionalStatsUI.additionalHpPercent / 100) + additionalStatsUI.additionalHpFlat,
        ATTACK_FLAT:
            calculatedStats.ATTACK_FLAT * (1 + additionalStatsUI.additionalAttackPercent / 100) + additionalStatsUI.additionalAttackFlat,
        PEN_PERCENT: calculatedStats.PEN_PERCENT + additionalStatsUI.additionalPenPercent,
        PEN_FLAT: calculatedStats.PEN_FLAT + additionalStatsUI.additionalPenFlat,
        CRIT_RATE: calculatedStats.CRIT_RATE + additionalStatsUI.additionalCritRate,
        CRIT_DAMAGE: calculatedStats.CRIT_DAMAGE + additionalStatsUI.additionalCritDamage,
        ELEMENT_PERCENT: calculatedStats.ELEMENT_PERCENT + additionalStatsUI.additionalElementPercent,
    });

    const [finalAttackModifiers, setFinalAttackModifiers] = useState<AttackModifiers>(JSON.parse(JSON.stringify(attackModifiers)));
    const [additionalDamage, setAdditionalDamage] = useState(0);

    useEffect(() => {
        setFinalStats({
            ...calculatedStats,
            HP_FLAT: calculatedStats.HP_FLAT * (1 + additionalStatsUI.additionalHpPercent / 100) + additionalStatsUI.additionalHpFlat,
            ATTACK_FLAT:
                calculatedStats.ATTACK_FLAT * (1 + additionalStatsUI.additionalAttackPercent / 100) +
                additionalStatsUI.additionalAttackFlat,
            PEN_PERCENT: calculatedStats.PEN_PERCENT + additionalStatsUI.additionalPenPercent,
            PEN_FLAT: calculatedStats.PEN_FLAT + additionalStatsUI.additionalPenFlat,
            CRIT_RATE: calculatedStats.CRIT_RATE + additionalStatsUI.additionalCritRate,
            CRIT_DAMAGE: calculatedStats.CRIT_DAMAGE + additionalStatsUI.additionalCritDamage,
            ELEMENT_PERCENT: calculatedStats.ELEMENT_PERCENT + additionalStatsUI.additionalElementPercent,
        });
    }, [
        character,
        calculatedStats,
        additionalStatsUI.additionalHpFlat,
        additionalStatsUI.additionalHpPercent,
        additionalStatsUI.additionalAttackFlat,
        additionalStatsUI.additionalAttackPercent,
        additionalStatsUI.additionalPenPercent,
        additionalStatsUI.additionalPenFlat,
        additionalStatsUI.additionalCritRate,
        additionalStatsUI.additionalCritDamage,
        additionalStatsUI.additionalElementPercent,
    ]);

    // Helper to compute the base final stats from calculatedStats + additional inputs
    const computeBaseStats = (): Stats => ({
        ...calculatedStats,
        HP_FLAT: calculatedStats.HP_FLAT * (1 + additionalStatsUI.additionalHpPercent / 100) + additionalStatsUI.additionalHpFlat,
        ATTACK_FLAT:
            calculatedStats.ATTACK_FLAT * (1 + additionalStatsUI.additionalAttackPercent / 100) + additionalStatsUI.additionalAttackFlat,
        PEN_PERCENT: calculatedStats.PEN_PERCENT + additionalStatsUI.additionalPenPercent,
        PEN_FLAT: calculatedStats.PEN_FLAT + additionalStatsUI.additionalPenFlat,
        CRIT_RATE: calculatedStats.CRIT_RATE + additionalStatsUI.additionalCritRate,
        CRIT_DAMAGE: calculatedStats.CRIT_DAMAGE + additionalStatsUI.additionalCritDamage,
        ELEMENT_PERCENT: calculatedStats.ELEMENT_PERCENT + additionalStatsUI.additionalElementPercent,
    });

    // Helper to run the custom calculator (if any) and return the tuple used by the calculators
    const runCustomCalculator = (
        type: string | undefined,
        stats: Stats,
        baseMultiplierLocal: number
    ): [Stats, number, AttackModifiers, number] => {
        if (!type) return [{} as Stats, baseMultiplierLocal, {} as AttackModifiers, 0];

        switch (type) {
            case "EvelynAdditionalActive":
                return EvelynAdditionalActive(stats, baseMultiplierLocal);
            case "ZhuYuanOutOfStun":
                return ZhuYuanOutOfStun(baseMultiplierLocal);
            case "ZhuYuanInStun":
                return ZhuYuanInStun(baseMultiplierLocal);
            case "YixuanBonus":
                return YixuanBonus(baseMultiplierLocal);
            case "YixuanAdditionalActiveStunned":
                return YixuanAdditionalActiveStunned(baseMultiplierLocal);
            case "LuciaHpBonus":
                return LuciaHpBonus(stats, baseMultiplierLocal, attackLevel);
            case "YanagiEXSpecial":
                return YanagiEXSpecial(stats, baseMultiplierLocal, attackLevel);
            case "YanagiUltimate":
                return YanagiUltimate(stats, baseMultiplierLocal, attackLevel);
            case "HarumasaAdditionalActive":
                return HarumasaAdditionalActive(baseMultiplierLocal);
            default:
                throw "Unknown Calculator Type";
        }
    };

    // Effect: compute finalStats (base + any additionalStats from custom calculators)
    useEffect(() => {
        const baseStats = computeBaseStats();

        if (isCustomMultiplier) {
            setFinalStats(baseStats);
        }

        if (attackUsed.calculatorType === undefined) {
            setFinalStats(baseStats);
            return;
        }

        const baseMultiplierLocal = getMultiplierFromAttack(
            Attacks,
            character,
            attackUsed.Level1Damage,
            attackUsed.growthPerLevel,
            attackLevel
        );

        const [additionalStats] = runCustomCalculator(attackUsed.calculatorType, baseStats, baseMultiplierLocal);

        const newStats = { ...baseStats } as Stats;
        Object.keys(newStats).forEach((key) => {
            const k = key as keyof Stats;
            (newStats[k] as number) = (baseStats[k] as number) + ((additionalStats[k] as number) || 0);
        });

        const changed = Object.keys(newStats).some((k) => {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            return (finalStats as any)[k] !== (newStats as any)[k];
        });

        if (changed) setFinalStats(newStats);
        // NOTE: finalStats is derived state and is intentionally NOT included in the dependency list.
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        isCustomMultiplier,
        character,
        calculatedStats,
        additionalStatsUI.additionalHpFlat,
        additionalStatsUI.additionalHpPercent,
        additionalStatsUI.additionalAttackFlat,
        additionalStatsUI.additionalAttackPercent,
        additionalStatsUI.additionalPenPercent,
        additionalStatsUI.additionalPenFlat,
        additionalStatsUI.additionalCritRate,
        additionalStatsUI.additionalCritDamage,
        additionalStatsUI.additionalElementPercent,
        attackUsed,
        attackLevel,
    ]);

    // Effect: compute finalAttackModifiers (base attackModifiers + any additionalAttackModifiers from calculators)
    useEffect(() => {
        if (isCustomMultiplier) {
            setFinalAttackModifiers(attackModifiers);
            return;
        }

        if (attackUsed.calculatorType === undefined) {
            setFinalAttackModifiers(attackModifiers);
            return;
        }

        const baseStats = computeBaseStats();
        const baseMultiplierLocal = getMultiplierFromAttack(
            Attacks,
            character,
            attackUsed.Level1Damage,
            attackUsed.growthPerLevel,
            attackLevel
        );

        const [, , additionalAttackModifiers] = runCustomCalculator(attackUsed.calculatorType, baseStats, baseMultiplierLocal);

        const newAttackModifiers = { ...attackModifiers } as AttackModifiers;
        Object.keys(newAttackModifiers).forEach((key) => {
            if (key !== "critMode") {
                const k = key as keyof AttackModifiers;
                (newAttackModifiers[k] as number) = (attackModifiers[k] as number) + ((additionalAttackModifiers[k] as number) || 0);
            }
        });

        const changed = Object.keys(newAttackModifiers).some((k) => {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            return (finalAttackModifiers as any)[k] !== (newAttackModifiers as any)[k];
        });

        if (changed) setFinalAttackModifiers(newAttackModifiers);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        isCustomMultiplier,
        attackUsed,
        attackLevel,
        character,
        calculatedStats,
        additionalStatsUI.additionalHpFlat,
        additionalStatsUI.additionalHpPercent,
        additionalStatsUI.additionalAttackFlat,
        additionalStatsUI.additionalAttackPercent,
        additionalStatsUI.additionalPenPercent,
        additionalStatsUI.additionalPenFlat,
        additionalStatsUI.additionalCritRate,
        additionalStatsUI.additionalCritDamage,
        additionalStatsUI.additionalElementPercent,
        attackModifiers,
    ]);

    // Effect: compute additionalDamage
    useEffect(() => {
        if (isCustomMultiplier) {
            setAdditionalDamage(0);
            return;
        }
        if (attackUsed.calculatorType === undefined) {
            setAdditionalDamage(0);
            return;
        }

        const baseStats = computeBaseStats();
        const baseMultiplierLocal = getMultiplierFromAttack(
            Attacks,
            character,
            attackUsed.Level1Damage,
            attackUsed.growthPerLevel,
            attackLevel
        );

        const [, , , additionalDamageCalculated] = runCustomCalculator(attackUsed.calculatorType, baseStats, baseMultiplierLocal);

        if (additionalDamageCalculated !== additionalDamage) setAdditionalDamage(additionalDamageCalculated);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        isCustomMultiplier,
        attackUsed,
        attackLevel,
        character,
        calculatedStats,
        additionalStatsUI.additionalHpFlat,
        additionalStatsUI.additionalHpPercent,
        additionalStatsUI.additionalAttackFlat,
        additionalStatsUI.additionalAttackPercent,
        additionalStatsUI.additionalPenPercent,
        additionalStatsUI.additionalPenFlat,
        additionalStatsUI.additionalCritRate,
        additionalStatsUI.additionalCritDamage,
        additionalStatsUI.additionalElementPercent,
    ]);

    // Effect: compute multiplier
    useEffect(() => {
        if (isCustomMultiplier) {
            return;
        }

        const baseMultiplierLocal = getMultiplierFromAttack(
            Attacks,
            character,
            attackUsed.Level1Damage,
            attackUsed.growthPerLevel,
            attackLevel
        );

        if (attackUsed.calculatorType === undefined) {
            setMultiplier(baseMultiplierLocal);
            return;
        }

        const baseStats = computeBaseStats();
        const [, newMultiplier] = runCustomCalculator(attackUsed.calculatorType, baseStats, baseMultiplierLocal);

        setMultiplier(newMultiplier);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        isCustomMultiplier,
        attackUsed,
        attackLevel,
        character,
        calculatedStats,
        additionalStatsUI.additionalHpFlat,
        additionalStatsUI.additionalHpPercent,
        additionalStatsUI.additionalAttackFlat,
        additionalStatsUI.additionalAttackPercent,
        additionalStatsUI.additionalPenPercent,
        additionalStatsUI.additionalPenFlat,
        additionalStatsUI.additionalCritRate,
        additionalStatsUI.additionalCritDamage,
        additionalStatsUI.additionalElementPercent,
    ]);

    let calculatedDamage = 0;

    if (isAnomaly) {
        calculatedDamage = calculateAnomalyDamageDealt(anomalyType, finalStats, finalAttackModifiers, additionalDamage);
    } else if (isRupture) {
        calculatedDamage = calculateSheerDamageDealt(
            multiplier,
            finalStats,
            finalAttackModifiers,
            additionalDamage,
            additionalStatsUI.additionalSheerFlat,
            additionalStatsUI.additionalSheerPercent
        );
    } else {
        calculatedDamage = calculateDamageDealt(multiplier, finalStats, finalAttackModifiers, additionalDamage);
    }

    return (
        <div className="">
            <div className="mt-4 text-center mb-5 ">
                <div className=" text-3xl ">
                    Calculated
                    {isAnomaly ? (
                        <span className="font-bold"> Anomaly </span>
                    ) : isRupture ? (
                        <span className="font-bold"> Sheer </span>
                    ) : (
                        " "
                    )}

                    Damage: <span className="font-mono text-blue-300">{new Intl.NumberFormat("de-DE").format(Number(calculatedDamage.toFixed(0)))}</span>
                </div>
            </div>

            <div className=" flex justify-center">
                <div className="  mt-4 mb-6  bg-gray-100 dark:bg-slate-800 rounded-lg shadow-inner">
                    <h4
                        className={`text-lg font-bold  cursor-pointer hover:bg-gray-200 dark:hover:bg-slate-700 p-4 ${
                            isFormulaVisible ? "rounded-t-md" : "rounded-md"
                        } transition-colors`}
                        onClick={() => setIsFormulaVisible(!isFormulaVisible)}
                    >
                        <span className="text-center block">Damage Formula</span>
                    </h4>
                    <div
                        className={`transition-all duration-500 ease-in-out overflow-hidden px-4 ${
                            isFormulaVisible ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
                        }`}
                    >
                        <div className="font-mono text-base text-left pt-1">
                            {isRupture ? (
                                <DamageFormulaRupture
                                    multiplier={multiplier}
                                    attackModifiers={finalAttackModifiers}
                                    stats={finalStats}
                                    additionalDamage={additionalDamage}
                                    additionalSheerFlat={additionalStatsUI.additionalSheerFlat}
                                    additionalSheerPercent={additionalStatsUI.additionalSheerPercent}
                                />
                            ) : isAnomaly ? (
                                <DamageFormulaAnomaly
                                    anomalyType={anomalyType}
                                    attackModifiers={finalAttackModifiers}
                                    stats={finalStats}
                                    additionalDamage={additionalDamage}
                                />
                            ) : (
                                <DamageFormulaStandard
                                    multiplier={multiplier}
                                    attackModifiers={finalAttackModifiers}
                                    stats={finalStats}
                                    additionalDamage={additionalDamage}
                                />
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <div className=" w-full  ">
                <div className="w-full flex justify-center flex-wrap gap-6">
                    <div className="p-4 border rounded-lg bg-gray-50 dark:bg-slate-800 dark:border-slate-700">
                        <div className="flex items-center">
                            <h3 className="font-bold text-xl  ">Enemy Stats</h3>
                        </div>
                        <div className="flex items-center gap-2 mb-2">
                            <LabelWithTextInput
                                labelText="DEF Target"
                                infoText="Enemy Defense. All Deadly Asssault and most Shiyu enemies have 953 DEF. Tryfing has 572 DEF at Level 70. "
                                onInputChange={(value) => setAttackModifiers({ ...(attackModifiers ?? {}), defenseTarget: Number(value) })}
                                inputValue={attackModifiers.defenseTarget}
                            />
                        </div>
                        <div className="flex items-center gap-2 mb-2">
                            <LabelWithTextInput
                                labelText="Defense Shred %"
                                infoText="Debuffs on the enemy that reduce their defense."
                                onInputChange={(value) => setAttackModifiers({ ...(attackModifiers ?? {}), defenseShred: Number(value) })}
                                inputValue={attackModifiers.defenseShred}
                            />
                        </div>

                        <div className="flex items-center gap-2 mb-2">
                            <LabelWithTextInput
                                labelText="DMG Taken Increase %"
                                infoText="Debuffs on the enemy that increase damage taken."
                                onInputChange={(value) =>
                                    setAttackModifiers({ ...(attackModifiers ?? {}), dmgTakenIncrease: Number(value) })
                                }
                                inputValue={attackModifiers.dmgTakenIncrease}
                            />
                        </div>

                        <div className="flex items-center gap-2 mb-2">
                            <LabelWithTextInput
                                labelText="DMG Taken Reduction"
                                infoText="Buffs on the enemy that reduce damage taken."
                                onInputChange={(value) =>
                                    setAttackModifiers({ ...(attackModifiers ?? {}), dmgTakenReduction: Number(value) })
                                }
                                inputValue={attackModifiers.dmgTakenReduction}
                            />
                        </div>
                        <div className="flex items-center gap-2 mb-2">
                            <LabelWithTextInput
                                labelText="RES Target %"
                                infoText="Enemy resistance to your character's element."
                                onInputChange={(value) => setAttackModifiers({ ...(attackModifiers ?? {}), resTarget: Number(value) })}
                                inputValue={attackModifiers.resTarget}
                            />
                        </div>
                        <div className="flex items-center gap-2 mb-2">
                            <LabelWithTextInput
                                labelText="RES Reduction %"
                                infoText="Percentage to reduce enemies resistance to your character's element by. Additive with RES Ignore %"
                                onInputChange={(value) =>
                                    setAttackModifiers({ ...(attackModifiers ?? {}), resReductionTarget: Number(value) })
                                }
                                inputValue={attackModifiers.resReductionTarget}
                            />
                        </div>

                        <div className="flex items-center gap-2 mb-2">
                            <LabelWithTextInput
                                labelText="Stun Multiplier %"
                                infoText="Damage multiplier when the enemy is stunned."
                                onInputChange={(value) => setAttackModifiers({ ...(attackModifiers ?? {}), stunMultiplier: Number(value) })}
                                inputValue={attackModifiers.stunMultiplier}
                            />
                        </div>
                    </div>
                    <div className="p-4 border rounded-lg bg-gray-50 dark:bg-slate-800 dark:border-slate-700">
                        <h3 className="font-bold text-xl mb-2">Attacker Modifiers</h3>
                        <div className={`flex items-center gap-2 mb-2 ${!isAnomaly ? "" : "opacity-50"} `}>
                            <LabelWithInfo
                                labelText="Use Custom Multiplier"
                                infoText="Use a custom multiplier. Attack specific calculations are ignored."
                            />
                            <input
                                type="checkbox"
                                checked={isCustomMultiplier}
                                onChange={(e) => {
                                    setIsCustomMultiplier(e.target.checked);
                                }}
                                className="h-4 w-4"
                            />
                        </div>
                        <div
                            className={`flex items-center gap-2 mb-2 ${!isAnomaly ? "" : "opacity-50"} ${
                                isCustomMultiplier ? "" : "opacity-50"
                            }`}
                        >
                            <LabelWithTextInput
                                labelText="Multiplier Value %"
                                infoText="The percentage multiplier for the specific attack."
                                onInputChange={(value) => setMultiplier(Number(value))}
                                inputValue={multiplier}
                                disabled={!isCustomMultiplier}
                            />
                        </div>
                        <div className={`flex flex-col gap-2 mb-2 ${!isCustomMultiplier ? "" : "opacity-50"}`}>
                            <div className="flex items-center justify-between">
                                <LabelWithInfo labelText={"Attack Level"} infoText={"Choose attack level (1-16)"} />
                                <div className="text-sm font-mono">Level {attackLevel}</div>
                            </div>
                            <div className="w-3/4">
                                <input
                                    type="range"
                                    min={1}
                                    max={16}
                                    value={attackLevel}
                                    onChange={(e) => setAttackLevel(Number(e.target.value))}
                                    className="w-full"
                                />
                            </div>
                        </div>
                        <div
                            className={`flex items-center gap-2 mb-2 py-1 w-80 justify-between ${!isCustomMultiplier ? "" : "opacity-50"}`}
                        >
                            <LabelWithInfo labelText={"Attack"} infoText={"The attack used by the the character."} />
                            <select
                                value={attackUsed.attackName}
                                onChange={(e) =>
                                    setAttackUsed(
                                        Attacks.filter((attack) => attack.characterName === character.name)[0].attack.filter(
                                            (attack) => attack.attackName == e.target.value
                                        )[0]
                                    )
                                }
                                className="p-1 border rounded bg-white dark:bg-slate-700 dark:border-slate-600 w-3/4 "
                            >
                                {Object.keys(AttackTypes).map((type) => (
                                    <optgroup label={type} key={type}>
                                        {Attacks.filter((attack) => attack.characterName === character.name)[0]
                                            .attack.filter((attackStat) => attackStat.attackType === type)
                                            .map((key) => (
                                                <option value={key.attackName} key={key.attackName}>
                                                    {key.attackName}
                                                </option>
                                            ))}
                                    </optgroup>
                                ))}
                            </select>{" "}
                        </div>
                        <div className="flex items-center gap-2 mb-2">
                            <LabelWithTextInput
                                labelText="RES Ignore %"
                                infoText="Attacker's resistance penetration. Additive with RES Reduction %"
                                onInputChange={(value) => setAttackModifiers({ ...(attackModifiers ?? {}), resIgnore: Number(value) })}
                                inputValue={attackModifiers.resIgnore}
                            />
                        </div>{" "}
                        <div className="flex items-center gap-2 mb-2">
                            <LabelWithTextInput
                                labelText="Additional DMG %"
                                infoText="Additional damage bonus from other sources. E.G. Lighters 75% Fire % Ice, Pulchras 30%, "
                                onInputChange={(value) =>
                                    setAttackModifiers({
                                        ...(attackModifiers ?? {}),
                                        additionalDmgBonusMultiplierAttacker: Number(value),
                                    })
                                }
                                inputValue={attackModifiers.additionalDmgBonusMultiplierAttacker}
                            />
                        </div>
                        <div className="flex items-center gap-2 mb-2">
                            <LabelWithTextInput
                                labelText="Additional Sheer DMG %"
                                infoText="Additional sheer damage bonus from other sources. This is different from Additional DMG % is is multiplicative with the damage formula. Sources include anything that says 'Sheer DMG' such as Yixuans W-Engine"
                                onInputChange={(value) =>
                                    setAttackModifiers({
                                        ...(attackModifiers ?? {}),
                                        additionalSheerDmgBonusMultiplierAttacker: Number(value),
                                    })
                                }
                                inputValue={attackModifiers.additionalSheerDmgBonusMultiplierAttacker}
                            />
                        </div>
                        <div className="flex items-center gap-2 mb-2 py-1 w-80 justify-between pr-6">
                            <LabelWithInfo
                                labelText={"Use Rupture caltulation"}
                                infoText={"Use Sheerforce in Damage calculation instead of Attack"}
                            />
                            <input
                                className="h-4 w-4"
                                checked={isRupture}
                                onChange={(e) => {
                                    setIsAnomaly(false);
                                    setIsRupture(e.target.checked);
                                }}
                                type="checkbox"
                            />
                        </div>
                        <div className="flex items-center gap-2 mb-2 py-1 w-80 justify-between  pr-6">
                            <LabelWithInfo labelText={"Use Anomaly caltulation"} infoText={"Use Anomalydamage in Damage calculation"} />
                            <input
                                className="h-4 w-4"
                                checked={isAnomaly}
                                onChange={(e) => {
                                    setIsRupture(false);
                                    setIsAnomaly(e.target.checked);
                                }}
                                type="checkbox"
                            />
                        </div>
                        <div className="flex items-center gap-2 mb-2 py-1 w-80 justify-between">
                            <LabelWithInfo
                                labelText={"Anomaly Type"}
                                infoText={"The attribute/element of the anomaly. Affects Damage calculation"}
                            />
                            <select
                                value={anomalyType}
                                onChange={(e) => setAnomalyType(e.target.value as keyof typeof AnomalyMultipliers)}
                                className="p-1 border rounded bg-white dark:bg-slate-700 dark:border-slate-600 w-28 text-center"
                            >
                                {Object.keys(AnomalyMultipliers).map((key) => (
                                    <option value={key} key={key}>
                                        {key}
                                    </option>
                                ))}
                            </select>{" "}
                        </div>
                        <div className="flex items-center gap-2 mb-2 w-80 justify-between">
                            <label>Crit Mode:</label>
                            <select
                                value={attackModifiers.critMode}
                                onChange={(e) =>
                                    setAttackModifiers({
                                        ...(attackModifiers ?? {}),
                                        critMode: e.target.value as "avg" | "crit" | "noCrit",
                                    })
                                }
                                className="p-1 border rounded bg-white dark:bg-slate-700 dark:border-slate-600 w-28 text-center"
                            >
                                <option value="avg">Average</option>
                                <option value="crit">Always Crit</option>
                                <option value="noCrit">No Crit</option>
                            </select>
                        </div>
                    </div>
                    <div className="p-4 border rounded-lg bg-gray-50 dark:bg-slate-800 dark:border-slate-700">
                        <h3 className="font-bold text-xl mb-2">Additional Stats</h3>
                        <div className="flex items-center gap-2 mb-2">
                            <LabelWithTextInput
                                labelText="Add. HP Flat"
                                infoText="Additional flat hp from buffs or other sources."
                                onInputChange={(value) =>
                                    setAdditionalStatsUI({
                                        ...(additionalStatsUI ?? {}),
                                        additionalHpFlat: Number(value),
                                    })
                                }
                                inputValue={additionalStatsUI.additionalHpFlat}
                            />
                        </div>
                        <div className="flex items-center gap-2 mb-2">
                            <LabelWithTextInput
                                labelText="Add. HP %"
                                infoText="Additional percent hp from buffs or other sources."
                                onInputChange={(value) =>
                                    setAdditionalStatsUI({
                                        ...(additionalStatsUI ?? {}),
                                        additionalHpPercent: Number(value),
                                    })
                                }
                                inputValue={additionalStatsUI.additionalHpPercent}
                            />
                        </div>
                        <div className="flex items-center gap-2 mb-2">
                            <LabelWithTextInput
                                labelText="Add. ATK Flat"
                                infoText="Additional flat attack from buffs or other sources."
                                onInputChange={(value) =>
                                    setAdditionalStatsUI({
                                        ...(additionalStatsUI ?? {}),
                                        additionalAttackFlat: Number(value),
                                    })
                                }
                                inputValue={additionalStatsUI.additionalAttackFlat}
                            />
                        </div>
                        <div className="flex items-center gap-2 mb-2">
                            <LabelWithTextInput
                                labelText="Add. ATK %"
                                infoText="Additional percent attack from buffs or other sources."
                                onInputChange={(value) =>
                                    setAdditionalStatsUI({
                                        ...(additionalStatsUI ?? {}),
                                        additionalAttackPercent: Number(value),
                                    })
                                }
                                inputValue={additionalStatsUI.additionalAttackPercent}
                            />
                        </div>
                        <div className="flex items-center gap-2 mb-2">
                            <LabelWithTextInput
                                labelText="Add. CRIT Rate %"
                                infoText="Additional critical rate percentage."
                                onInputChange={(value) =>
                                    setAdditionalStatsUI({
                                        ...(additionalStatsUI ?? {}),
                                        additionalCritRate: Number(value),
                                    })
                                }
                                inputValue={additionalStatsUI.additionalCritRate}
                            />
                        </div>
                        <div className="flex items-center gap-2 mb-2">
                            <LabelWithTextInput
                                labelText="Add. CRIT DMG %"
                                infoText="Additional critical damage percentage."
                                onInputChange={(value) =>
                                    setAdditionalStatsUI({
                                        ...(additionalStatsUI ?? {}),
                                        additionalCritDamage: Number(value),
                                    })
                                }
                                inputValue={additionalStatsUI.additionalCritDamage}
                            />
                        </div>

                        <div className="flex items-center gap-2 mb-2">
                            <LabelWithTextInput
                                labelText="Add. Element DMG %"
                                infoText="Additional elemental damage percentage."
                                onInputChange={(value) =>
                                    setAdditionalStatsUI({
                                        ...(additionalStatsUI ?? {}),
                                        additionalElementPercent: Number(value),
                                    })
                                }
                                inputValue={additionalStatsUI.additionalElementPercent}
                            />
                        </div>
                        <div className="flex items-center gap-2 mb-2">
                            <LabelWithTextInput
                                labelText="Add. PEN %"
                                infoText="Additional percentage penetration."
                                onInputChange={(value) =>
                                    setAdditionalStatsUI({
                                        ...(additionalStatsUI ?? {}),
                                        additionalPenPercent: Number(value),
                                    })
                                }
                                inputValue={additionalStatsUI.additionalPenPercent}
                            />
                        </div>
                        <div className="flex items-center gap-2 mb-2">
                            <LabelWithTextInput
                                labelText="Add. PEN Flat"
                                infoText="Additional flat penetration."
                                onInputChange={(value) =>
                                    setAdditionalStatsUI({
                                        ...(additionalStatsUI ?? {}),
                                        additionalPenFlat: Number(value),
                                    })
                                }
                                inputValue={additionalStatsUI.additionalPenFlat}
                            />
                        </div>

                        <div className={`flex items-center gap-2 mb-2 ${isRupture ? "" : "opacity-50"}`}>
                            <LabelWithTextInput
                                labelText="Add. Sheer Flat"
                                infoText="Additional flat sheer"
                                onInputChange={(value) =>
                                    setAdditionalStatsUI({
                                        ...(additionalStatsUI ?? {}),
                                        additionalSheerFlat: Number(value),
                                    })
                                }
                                inputValue={additionalStatsUI.additionalSheerFlat}
                            />
                        </div>
                        <div className={`flex items-center gap-2 mb-2 ${isRupture ? "" : "opacity-50"}`}>
                            <LabelWithTextInput
                                labelText="Add. Sheer %"
                                infoText="Additional sheer percentage"
                                onInputChange={(value) =>
                                    setAdditionalStatsUI({
                                        ...(additionalStatsUI ?? {}),
                                        additionalSheerPercent: Number(value),
                                    })
                                }
                                inputValue={additionalStatsUI.additionalSheerPercent}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default DamageCalculator;
