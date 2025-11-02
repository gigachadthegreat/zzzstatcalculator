import { useEffect, useState } from "react";
import {
    type Stats,
    levelFactorAttacker,
    AnomalyMultipliers,
    type AttackStats,
    AttackTypes,
    type AttackModifiers,
} from "../constants/types";
import LabelWithTextInput from "./LabelWithTextInput";
import { getMultiplierFromAttack } from "../lib/Utility";

import {
    calculatedmgTakenMultiplierTarget,
    calculateResMultiplier,
    calculateDefenseMultiplier,
    critMultiplierAttacker,
    dmgBonusMultiplierAttacker,
    calculateBaseSheerDamage,
    calculateSheer,
    calculateBaseDamage,
    calculateAnomalyLevelMultiplier,
    calculateAnomalyProficiencyMultiplier,
    calculateAnomalyBaseDamage,
    calculateDamageDealt,
    calculateSheerDamageDealt,
    calculateAnomalyDamageDealt,
} from "../lib/Calculations.ts";

import LabelWithInfo from "./LabelWithInfo";
import { Attacks } from "../constants/AttackStats.tsx";
import { EvelynAdditionalActive } from "../lib/CustomCalculators.tsx";

function DamageCalculator({
    calculatedStats,
    characterName,

    attackModifiers,
    setAttackModifiers,

    multiplierValue,
    setMultiplierValue,

    isRupture,
    setIsRupture,

    isAnomaly,
    setIsAnomaly,

    anomalyType,
    setAnomalyType,

    additionalHpFlat,
    setAdditionalHpFlat,

    additionalHpPercent,
    setAdditionalHpPercent,

    additionalAttackFlat,
    setAdditionalAttackFlat,

    additionalAttackPercent,
    setAdditionalAttackPercent,

    additionalPenPercent,
    setAdditionalPenPercent,

    additionalPenFlat,
    setAdditionalPenFlat,

    additionalCritRate,
    setAdditionalCritRate,

    additionalCritDamage,
    setAdditionalCritDamage,

    additionalElementPercent,
    setAdditionalElementPercent,
}: // characterLevel,
// setCharacterLevel,
{
    calculatedStats: Stats | null;
    characterName: string;

    attackModifiers: AttackModifiers;
    setAttackModifiers: (value: AttackModifiers) => void;

    multiplierValue: number;
    setMultiplierValue: (value: number) => void;

    isRupture: boolean;
    setIsRupture: (value: boolean) => void;

    isAnomaly: boolean;
    setIsAnomaly: (value: boolean) => void;

    anomalyType: keyof typeof AnomalyMultipliers;
    setAnomalyType: (value: keyof typeof AnomalyMultipliers) => void;

    additionalHpFlat: number;
    setAdditionalHpFlat: (value: number) => void;

    additionalHpPercent: number;
    setAdditionalHpPercent: (value: number) => void;

    additionalAttackFlat: number;
    setAdditionalAttackFlat: (value: number) => void;

    additionalAttackPercent: number;
    setAdditionalAttackPercent: (value: number) => void;

    additionalPenPercent: number;
    setAdditionalPenPercent: (value: number) => void;

    additionalPenFlat: number;
    setAdditionalPenFlat: (value: number) => void;

    additionalCritRate: number;
    setAdditionalCritRate: (value: number) => void;

    additionalCritDamage: number;
    setAdditionalCritDamage: (value: number) => void;

    additionalElementPercent: number;
    setAdditionalElementPercent: (value: number) => void;

    // characterLevel: number;
    // setCharacterLevel: (value: number) => void;
}) {
    const [isFormulaVisible, setIsFormulaVisible] = useState(false);
    const [attackUsed, setAttackUsed] = useState<AttackStats>(
        Attacks.filter((attack) => attack.characterName === characterName)[0].attackStats[0]
    );
    const [attackLevel, setAttackLevel] = useState<number>(1);

    useEffect(() => {
        const baseMultiplier = getMultiplierFromAttack(
            Attacks,
            characterName,
            attackUsed.Level1Damage,
            attackUsed.growthPerLevel,
            attackLevel
        );
        // Only update the parent's multiplierValue when there is no custom calculator on the attack.
        if (attackUsed.calculatorType === undefined) {
            setMultiplierValue(baseMultiplier);
        }
    }, [attackUsed, attackLevel, characterName, setMultiplierValue]);

    // compute baseMultiplier once for use with custom calculators
    const baseMultiplier = getMultiplierFromAttack(Attacks, characterName, attackUsed.Level1Damage, attackUsed.growthPerLevel, attackLevel);

    useEffect(() => {
        setAttackUsed(Attacks.filter((attack) => attack.characterName === characterName)[0].attackStats[0]);
    }, [characterName]);

    // Character Stats
    const finalStats: Stats | null = calculatedStats
        ? {
              ...calculatedStats,
              HP_FLAT: calculatedStats.HP_FLAT * (1 + additionalHpPercent / 100) + additionalHpFlat,
              ATTACK_FLAT: calculatedStats.ATTACK_FLAT * (1 + additionalAttackPercent / 100) + additionalAttackFlat,
              PEN_PERCENT: calculatedStats.PEN_PERCENT + additionalPenPercent,
              PEN_FLAT: calculatedStats.PEN_FLAT + additionalPenFlat,
              CRIT_RATE: calculatedStats.CRIT_RATE + additionalCritRate,
              CRIT_DAMAGE: calculatedStats.CRIT_DAMAGE + additionalCritDamage,
              ELEMENT_PERCENT: calculatedStats.ELEMENT_PERCENT + additionalElementPercent,
          }
        : null;

    const finalAttackModifiers: AttackModifiers = JSON.parse(JSON.stringify(attackModifiers));

    let calculatedDamage = 0;

    // If the selected attack has a custom calculator, compute derived stats and a custom multiplier locally
    // but avoid calling setters during render. We'll sync the parent's multiplier in an effect below.
    let newMultiplier = undefined;
    if (attackUsed.calculatorType !== undefined) {
        let additionalStats: Stats | null = null;
        let additionalAttackModifiers: AttackModifiers | null;
        switch (attackUsed.calculatorType) {
            case "EvelynAdditionalActive":
                if (!finalStats) throw new Error("finalStats is null, cannot apply EvelynAdditionalActive");
                [additionalStats, newMultiplier, additionalAttackModifiers] = EvelynAdditionalActive(finalStats, baseMultiplier);
                break;
            default:
                throw "Unknown Calculator Type";
        }

        if (finalStats && additionalStats) {
            Object.keys(finalStats).forEach((key) => {
                const k = key as keyof Stats;
                (finalStats[k] as number) = (finalStats[k] as number) + (additionalStats[k] as number);
            });
        }

        if (finalAttackModifiers && additionalAttackModifiers) {
            // Merge additional attack modifiers for calculation only (do not call setter here)
            Object.keys(finalAttackModifiers).forEach((key) => {
                if (key !== "critMode") {
                    const k = key as keyof AttackModifiers;
                    (finalAttackModifiers[k] as number) = (finalAttackModifiers[k] as number) + ((additionalAttackModifiers[k] as number) || 0);
                }
            });
        }
        setMultiplierValue(newMultiplier ?? multiplierValue);
    }

    if (isAnomaly) {
        calculatedDamage = finalStats
            ? calculateAnomalyDamageDealt(
                  anomalyType,
                  finalStats.ATTACK_FLAT,
                  finalStats.ANOMALY_PROFICIENCY_FLAT,
                  finalStats.ELEMENT_PERCENT,
                  finalStats.PEN_PERCENT,
                  finalStats.PEN_FLAT,
                  finalAttackModifiers
              )
            : 0;
    } else if (isRupture) {
        {
            calculatedDamage = finalStats
                ? calculateSheerDamageDealt(
                      multiplierValue,
                      finalStats?.HP_FLAT,
                      finalStats?.ATTACK_FLAT,
                      finalStats?.ELEMENT_PERCENT,
                      finalStats?.CRIT_RATE,
                      finalStats?.CRIT_DAMAGE,
                      finalAttackModifiers
                  )
                : 0;
        }
    } else {
        calculatedDamage = finalStats
            ? calculateDamageDealt(
                  multiplierValue,
                  finalStats?.ATTACK_FLAT ?? 0,
                  finalStats?.ELEMENT_PERCENT ?? 0,
                  finalStats?.CRIT_RATE ?? 0,
                  finalStats?.CRIT_DAMAGE ?? 0,
                  finalStats?.PEN_PERCENT ?? 0,
                  finalStats?.PEN_FLAT ?? 0,
                  finalAttackModifiers
              )
            : 0;
    }

    const getCritFormula = () => {
        switch (finalAttackModifiers.critMode) {
            case "avg":
                return `(1 + (min(${finalStats?.CRIT_RATE}, 100) / 100) * (${finalStats?.CRIT_DAMAGE} / 100))`;
            case "crit":
                return `(1 + ${finalStats?.CRIT_DAMAGE} / 100)`;
            case "noCrit":
                return "1";
            default:
                return "1";
        }
    };

    const finalDef = finalStats
        ? Math.max(
              finalAttackModifiers.defenseTarget *
                  (1 - finalAttackModifiers.defenseShred / 100) *
                  (1 - (finalStats.PEN_PERCENT ?? 0) / 100) -
                  (finalStats.PEN_FLAT ?? 0),
              0
          )
        : 0;
    const levelFactor = levelFactorAttacker[59];

    const getFormula = () => {
        if (isAnomaly) {
            return (
                <>
                    <p className="text-sm text-gray-300 mt-2">
                        <strong>Anomaly Base DMG:</strong> ({AnomalyMultipliers[anomalyType]} &times;{" "}
                        {finalStats?.ATTACK_FLAT.toFixed(0)})
                        <span className="text-blue-300">
                            {" "}
                            = {calculateAnomalyBaseDamage(anomalyType, finalStats?.ATTACK_FLAT ?? 0).toFixed(3)}
                        </span>
                        <br />
                        &times; <strong>Anomaly Proficiency Multiplier:</strong> ({finalStats?.ANOMALY_PROFICIENCY_FLAT.toFixed(3)}{" "}
                        &times; 0.01)
                        <span className="text-blue-300">
                            {" "}
                            = {calculateAnomalyProficiencyMultiplier(finalStats!.ANOMALY_PROFICIENCY_FLAT ?? 0).toFixed(3)}
                        </span>
                        <br />
                        &times; <strong>Anomaly Level Multiplier:</strong> (1 + (1 / 59) &times; (60 - 1))
                        <span className="text-blue-300"> = {calculateAnomalyLevelMultiplier().toFixed(3)}</span>
                        <br />
                        &times; <strong>DMG Bonus Multiplier:</strong> (1 + {finalStats?.ELEMENT_PERCENT.toFixed(3)} / 100 +{" "}
                        {finalAttackModifiers.additionalDmgBonusMultiplierAttacker} / 100)
                        <span className="text-blue-300">
                            {" "}
                            ={" "}
                            {dmgBonusMultiplierAttacker(
                                finalStats?.ELEMENT_PERCENT ?? 0,
                                finalAttackModifiers.additionalDmgBonusMultiplierAttacker
                            ).toFixed(3)}
                        </span>
                        <br />
                        &times; <strong>DEF Multiplier:</strong> ({levelFactor} / ({finalDef.toFixed(3)} + {levelFactor}))
                        <span className="text-blue-300">
                            {" "}
                            ={" "}
                            {calculateDefenseMultiplier(
                                levelFactorAttacker[60 - 1],
                                finalAttackModifiers.defenseTarget,
                                finalAttackModifiers.defenseShred,
                                finalStats?.PEN_PERCENT ?? 0,
                                finalStats?.PEN_FLAT ?? 0
                            ).toFixed(3)}
                        </span>
                        <br />
                        &times; <strong>RES Multiplier:</strong> (1 - {finalAttackModifiers.resTarget} / 100 +{" "}
                        {finalAttackModifiers.resReductionTarget} / 100 + {finalAttackModifiers.resIgnore} / 100)
                        <span className="text-blue-300">
                            {" "}
                            ={" "}
                            {calculateResMultiplier(
                                finalAttackModifiers.resTarget,
                                finalAttackModifiers.resReductionTarget,
                                finalAttackModifiers.resIgnore
                            ).toFixed(3)}
                        </span>
                        <br />
                        &times; <strong>DMG Taken Multiplier:</strong> (1 + {finalAttackModifiers.dmgTakenIncrease} / 100 -{" "}
                        {finalAttackModifiers.dmgTakenReduction} / 100)
                        <span className="text-blue-300">
                            {" "}
                            ={" "}
                            {calculatedmgTakenMultiplierTarget(
                                finalAttackModifiers.dmgTakenIncrease,
                                finalAttackModifiers.dmgTakenReduction
                            ).toFixed(3)}
                        </span>
                        <br />
                        &times; <strong>Stun Multiplier:</strong> ({finalAttackModifiers.stunMultiplier} / 100)
                        <span className="text-blue-300"> = {(finalAttackModifiers.stunMultiplier / 100).toFixed(3)}</span>
                    </p>
                </>
            );
        }

        if (isRupture) {
            return (
                <>
                    <p className="text-sm text-gray-300 mt-2">
                        <strong>Base DMG:</strong> ({multiplierValue} / 100 &times; (
                        {calculateSheer(finalStats!.HP_FLAT, finalStats!.ATTACK_FLAT).toFixed(3)} &times; (1 +{" "}
                        {finalAttackModifiers.additionalSheerPercent} / 100) + {finalAttackModifiers.additionalSheerFlat}))
                        <span className="text-blue-300">
                            {" "}
                            ={" "}
                            {calculateBaseSheerDamage(
                                multiplierValue,
                                finalStats?.HP_FLAT ?? 0,
                                finalStats?.ATTACK_FLAT ?? 0,
                                finalAttackModifiers.additionalSheerPercent,
                                finalAttackModifiers.additionalSheerFlat
                            ).toFixed(3)}
                        </span>
                        <br />
                        &times; <strong>DMG Bonus Multiplier:</strong> (1 + {finalStats?.ELEMENT_PERCENT.toFixed(3)} / 100 +{" "}
                        {finalAttackModifiers.additionalDmgBonusMultiplierAttacker} / 100)
                        <span className="text-blue-300">
                            {" "}
                            ={" "}
                            {dmgBonusMultiplierAttacker(
                                finalStats?.ELEMENT_PERCENT ?? 0,
                                finalAttackModifiers.additionalDmgBonusMultiplierAttacker
                            ).toFixed(3)}
                        </span>
                        <br />
                        &times; <strong>Crit Multiplier:</strong> {getCritFormula()}
                        <span className="text-blue-300">
                            {" "}
                            ={" "}
                            {critMultiplierAttacker(
                                finalAttackModifiers.critMode,
                                finalStats?.CRIT_RATE ?? 0,
                                finalStats?.CRIT_DAMAGE ?? 0
                            ).toFixed(3)}
                        </span>{" "}
                        <br />
                        &times; <strong>Additional Sheer DMG Multiplier:</strong> (1 +{" "}
                        {finalAttackModifiers.additionalSheerDmgBonusMultiplierAttacker} / 100)
                        <span className="text-blue-300">
                            {" "}
                            = {(1 + finalAttackModifiers.additionalSheerDmgBonusMultiplierAttacker / 100).toFixed(3)}
                        </span>
                        <br />
                        &times; <strong>RES Multiplier:</strong> (1 - {finalAttackModifiers.resTarget} / 100 +{" "}
                        {finalAttackModifiers.resReductionTarget} / 100 + {finalAttackModifiers.resIgnore} / 100)
                        <span className="text-blue-300">
                            {" "}
                            ={" "}
                            {calculateResMultiplier(
                                finalAttackModifiers.resTarget,
                                finalAttackModifiers.resReductionTarget,
                                finalAttackModifiers.resIgnore
                            ).toFixed(3)}
                        </span>
                        <br />
                        &times; <strong>DMG Taken Multiplier:</strong> (1 + {finalAttackModifiers.dmgTakenIncrease} / 100 -{" "}
                        {finalAttackModifiers.dmgTakenReduction} / 100)
                        <span className="text-blue-300">
                            {" "}
                            ={" "}
                            {calculatedmgTakenMultiplierTarget(
                                finalAttackModifiers.dmgTakenIncrease,
                                finalAttackModifiers.dmgTakenReduction
                            ).toFixed(3)}
                        </span>
                        <br />
                        &times; <strong>Stun Multiplier:</strong> ({finalAttackModifiers.stunMultiplier} / 100)
                        <span className="text-blue-300"> = {(finalAttackModifiers.stunMultiplier / 100).toFixed(3)}</span>
                        <br />
                        <br />
                    </p>
                </>
            );
        }
        return (
            <>
                <p className="text-sm text-gray-300 mt-2">
                    <strong>Base DMG:</strong> ({multiplierValue} / 100 &times; {finalStats?.ATTACK_FLAT.toFixed(3)})
                    <span className="text-blue-300">
                        {" "}
                        = {calculateBaseDamage(multiplierValue, finalStats?.ATTACK_FLAT ?? 0).toFixed(3)}
                    </span>
                    <br />
                    &times; <strong>DMG Bonus Multiplier:</strong> (1 + {finalStats?.ELEMENT_PERCENT.toFixed(3)} / 100 +{" "}
                    {finalAttackModifiers.additionalDmgBonusMultiplierAttacker} / 100)
                    <span className="text-blue-300">
                        {" "}
                        ={" "}
                        {dmgBonusMultiplierAttacker(
                            finalStats?.ELEMENT_PERCENT ?? 0,
                            finalAttackModifiers.additionalDmgBonusMultiplierAttacker
                        ).toFixed(3)}
                    </span>
                    <br />
                    &times; <strong>Crit Multiplier:</strong> {getCritFormula()}
                    <span className="text-blue-300">
                        {" "}
                        ={" "}
                        {critMultiplierAttacker(
                            finalAttackModifiers.critMode,
                            finalStats?.CRIT_RATE ?? 0,
                            finalStats?.CRIT_DAMAGE ?? 0
                        ).toFixed(3)}
                    </span>
                    <br />
                    &times; <strong>DEF Multiplier:</strong> ({levelFactor} / ({finalDef.toFixed(3)} + {levelFactor}))
                    <span className="text-blue-300">
                        {" "}
                        ={" "}
                        {calculateDefenseMultiplier(
                            levelFactorAttacker[60 - 1],
                            finalAttackModifiers.defenseTarget,
                            finalAttackModifiers.defenseShred,
                            finalStats?.PEN_PERCENT ?? 0,
                            finalStats?.PEN_FLAT ?? 0
                        ).toFixed(3)}
                    </span>
                    <br />
                    &times; <strong>RES Multiplier:</strong> (1 - {finalAttackModifiers.resTarget} / 100 +{" "}
                    {finalAttackModifiers.resReductionTarget} / 100 + {finalAttackModifiers.resIgnore} / 100)
                    <span className="text-blue-300">
                        {" "}
                        ={" "}
                        {calculateResMultiplier(
                            finalAttackModifiers.resTarget,
                            finalAttackModifiers.resReductionTarget,
                            finalAttackModifiers.resIgnore
                        ).toFixed(3)}
                    </span>
                    <br />
                    &times; <strong>DMG Taken Multiplier:</strong> (1 + {finalAttackModifiers.dmgTakenIncrease} / 100 -{" "}
                    {finalAttackModifiers.dmgTakenReduction} / 100)
                    <span className="text-blue-300">
                        {" "}
                        ={" "}
                        {calculatedmgTakenMultiplierTarget(
                            finalAttackModifiers.dmgTakenIncrease,
                            finalAttackModifiers.dmgTakenReduction
                        ).toFixed(3)}
                    </span>
                    <br />
                    &times; <strong>Stun Multiplier:</strong> ({finalAttackModifiers.stunMultiplier} / 100)
                    <span className="text-blue-300"> = {(finalAttackModifiers.stunMultiplier / 100).toFixed(3)}</span>
                    <br />
                    <br />
                </p>
            </>
        );
    };

    return (
        <div className="">
            <div className="mt-4 text-center mb-5">
                <div className=" text-3xl font-bold">
                    Calculated Damage: <span className="font-mono text-blue-300">{calculatedDamage.toFixed(1)}</span>
                </div>
            </div>

            <div className="mt-4 mb-6  bg-gray-100 dark:bg-slate-800 rounded-lg shadow-inner">
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
                    <div className="font-mono text-base text-left pt-1">{getFormula()}</div>
                </div>
            </div>

            <div className="flex justify-between ">
                <div className="w-screen mx-2 p-4 border rounded-lg bg-gray-50 dark:bg-slate-800 dark:border-slate-700">
                    <div className="flex items-center space-x-2 ">
                        <h3 className="font-bold ">Enemy Stats</h3>
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
                            onInputChange={(value) => setAttackModifiers({ ...(attackModifiers ?? {}), dmgTakenIncrease: Number(value) })}
                            inputValue={attackModifiers.dmgTakenIncrease}
                        />
                    </div>

                    <div className="flex items-center gap-2 mb-2">
                        <LabelWithTextInput
                            labelText="DMG Taken Reduction"
                            infoText="Buffs on the enemy that reduce damage taken."
                            onInputChange={(value) => setAttackModifiers({ ...(attackModifiers ?? {}), dmgTakenReduction: Number(value) })}
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
                            onInputChange={(value) => setAttackModifiers({ ...(attackModifiers ?? {}), resReductionTarget: Number(value) })}
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
                <div className="w-screen mx-2 p-4 border rounded-lg bg-gray-50 dark:bg-slate-800 dark:border-slate-700">
                    <h3 className="font-bold mb-2">Attacker Modifiers</h3>
                    {/* <div className="flex items-center gap-2 mb-2">
                        <LabelWithTextInput
                            labelText="Character Level"
                            infoText="The level of the attacking character. Affects Defense and Anomaly calculations."
                            onInputChange={(value) => setCharacterLevel(Number(value))}
                            inputValue={characterLevel}
                        />
                    </div> */}
                    <div className="flex items-center gap-2 mb-2">
                        <LabelWithTextInput
                            labelText="Multiplier Value %"
                            infoText="The percentage multiplier for the specific attack."
                            onInputChange={(value) => setMultiplierValue(Number(value))}
                            inputValue={multiplierValue}
                        />
                    </div>
                    <div className="flex flex-col gap-2 mb-2">
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
                    <div className="flex items-center gap-2 mb-2 py-1 w-80 justify-between">
                        <LabelWithInfo labelText={"Attack"} infoText={"The attack used by the the character."} />
                        <select
                            value={attackUsed.attackName}
                            onChange={(e) =>
                                setAttackUsed(
                                    Attacks.filter((attack) => attack.characterName === characterName)[0].attackStats.filter(
                                        (attack) => attack.attackName == e.target.value
                                    )[0]
                                )
                            }
                            className="p-1 border rounded bg-white dark:bg-slate-700 dark:border-slate-600 w-3/4 "
                        >
                            {Object.keys(AttackTypes).map((type) => (
                                <optgroup label={type} key={type}>
                                    {Attacks.filter((attack) => attack.characterName === characterName)[0]
                                        .attackStats.filter((attackStat) => attackStat.attackType === type)
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
                        <input className="h-4 w-4" checked={isRupture} onChange={(e) => setIsRupture(e.target.checked)} type="checkbox" />
                    </div>
                    <div className="flex items-center gap-2 mb-2 py-1 w-80 justify-between  pr-6">
                        <LabelWithInfo labelText={"Use Anomaly caltulation"} infoText={"Use Anomalydamage in Damage calculation"} />
                        <input className="h-4 w-4" checked={isAnomaly} onChange={(e) => setIsAnomaly(e.target.checked)} type="checkbox" />
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
                <div className="w-screen mx-2 p-4 border rounded-lg bg-gray-50 dark:bg-slate-800 dark:border-slate-700">
                    <h3 className="font-bold mb-2">Additional Stats</h3>
                    <div className="flex items-center gap-2 mb-2">
                        <LabelWithTextInput
                            labelText="Add. HP Flat"
                            infoText="Additional flat hp from buffs or other sources."
                            onInputChange={(value) => setAdditionalHpFlat(Number(value))}
                            inputValue={additionalHpFlat}
                        />
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                        <LabelWithTextInput
                            labelText="Add. HP %"
                            infoText="Additional percent hp from buffs or other sources."
                            onInputChange={(value) => setAdditionalHpPercent(Number(value))}
                            inputValue={additionalHpPercent}
                        />
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                        <LabelWithTextInput
                            labelText="Add. ATK Flat"
                            infoText="Additional flat attack from buffs or other sources."
                            onInputChange={(value) => setAdditionalAttackFlat(Number(value))}
                            inputValue={additionalAttackFlat}
                        />
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                        <LabelWithTextInput
                            labelText="Add. ATK %"
                            infoText="Additional percent attack from buffs or other sources."
                            onInputChange={(value) => setAdditionalAttackPercent(Number(value))}
                            inputValue={additionalAttackPercent}
                        />
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                        <LabelWithTextInput
                            labelText="Add. CRIT Rate %"
                            infoText="Additional critical rate percentage."
                            onInputChange={(value) => setAdditionalCritRate(Number(value))}
                            inputValue={additionalCritRate}
                        />
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                        <LabelWithTextInput
                            labelText="Add. CRIT DMG %"
                            infoText="Additional critical damage percentage."
                            onInputChange={(value) => setAdditionalCritDamage(Number(value))}
                            inputValue={additionalCritDamage}
                        />
                    </div>

                    <div className="flex items-center gap-2 mb-2">
                        <LabelWithTextInput
                            labelText="Add. Element DMG %"
                            infoText="Additional elemental damage percentage."
                            onInputChange={(value) => setAdditionalElementPercent(Number(value))}
                            inputValue={additionalElementPercent}
                        />
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                        <LabelWithTextInput
                            labelText="Add. PEN %"
                            infoText="Additional percentage penetration."
                            onInputChange={(value) => setAdditionalPenPercent(Number(value))}
                            inputValue={additionalPenPercent}
                        />
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                        <LabelWithTextInput
                            labelText="Add. PEN Flat"
                            infoText="Additional flat penetration."
                            onInputChange={(value) => setAdditionalPenFlat(Number(value))}
                            inputValue={additionalPenFlat}
                        />
                    </div>

                    <div className={`flex items-center gap-2 mb-2 ${isRupture ? "" : "opacity-50"}`}>
                        <LabelWithTextInput
                            labelText="Add. Sheer Flat"
                            infoText="Additional flat sheer"
                            onInputChange={(value) =>
                                setAttackModifiers({ ...(attackModifiers ?? {}), additionalSheerFlat: Number(value) })
                            }
                            inputValue={attackModifiers.additionalSheerFlat}
                        />
                    </div>
                    <div className={`flex items-center gap-2 mb-2 ${isRupture ? "" : "opacity-50"}`}>
                        <LabelWithTextInput
                            labelText="Add. Sheer %"
                            infoText="Additional sheer percentage"
                            onInputChange={(value) =>
                                setAttackModifiers({ ...(attackModifiers ?? {}), additionalSheerPercent: Number(value) })
                            }
                            inputValue={attackModifiers.additionalSheerPercent}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
export default DamageCalculator;
