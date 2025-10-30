import { useState } from "react";
import { type Stats, levelFactorAttacker, AnomalyMultipliers, type CharacterAttack } from "../constants/types";
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

function DamageCalculator({
    calculatedStats,
    characterName,

    defTarget,
    setDefTarget,

    resTarget,
    setResTarget,

    resReductionTarget,
    setResReductionTarget,

    dmgTakenIncrease,
    setDmgTakenIncrease,

    dmgTakenReduction,
    setDmgTakenReduction,

    defenseShred,
    setDefenseShred,

    stunMultiplier,
    setStunMultiplier,

    resIgnore,
    setResIgnore,

    additionalDmgBonusMultiplierAttacker,
    setAdditionalDmgBonusMultiplierAttacker,

    additionalSheerDmgBonusMultiplierAttacker,
    setAdditionalSheerDmgBonusMultiplierAttacker,

    critMode,
    setCritMode,

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

    additionalSheerFlat,
    setAdditionalSheerFlat,

    additionalSheerPercent,
    setAdditionalSheerPercent,
}: // characterLevel,
// setCharacterLevel,
{
    calculatedStats: Stats | null;
    characterName: string;

    defTarget: number;
    setDefTarget: (value: number) => void;

    resTarget: number;
    setResTarget: (value: number) => void;

    resReductionTarget: number;
    setResReductionTarget: (value: number) => void;

    dmgTakenIncrease: number;
    setDmgTakenIncrease: (value: number) => void;

    dmgTakenReduction: number;
    setDmgTakenReduction: (value: number) => void;

    defenseShred: number;
    setDefenseShred: (value: number) => void;

    stunMultiplier: number;
    setStunMultiplier: (value: number) => void;

    resIgnore: number;
    setResIgnore: (value: number) => void;

    additionalDmgBonusMultiplierAttacker: number;
    setAdditionalDmgBonusMultiplierAttacker: (value: number) => void;

    additionalSheerDmgBonusMultiplierAttacker: number;
    setAdditionalSheerDmgBonusMultiplierAttacker: (value: number) => void;

    critMode: "avg" | "crit" | "noCrit";
    setCritMode: (value: "avg" | "crit" | "noCrit") => void;

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

    additionalSheerFlat: number;
    setAdditionalSheerFlat: (value: number) => void;

    additionalSheerPercent: number;
    setAdditionalSheerPercent: (value: number) => void;

    // characterLevel: number;
    // setCharacterLevel: (value: number) => void;
}) {
    const [isFormulaVisible, setIsFormulaVisible] = useState(false);

    // Character Stats
    const modifiedStats: Stats | null = calculatedStats
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

    // non calc important - delete me
    let calculatedDamage = 0;
    if (isAnomaly) {
        calculatedDamage = modifiedStats
            ? calculateAnomalyDamageDealt(
                  anomalyType,
                  modifiedStats.ATTACK_FLAT,
                  modifiedStats.ANOMALY_PROFICIENCY_FLAT,
                  modifiedStats.ELEMENT_PERCENT,
                  additionalDmgBonusMultiplierAttacker,
                  levelFactorAttacker[60 - 1],
                  defTarget,
                  defenseShred,
                  modifiedStats.PEN_PERCENT,
                  modifiedStats.PEN_FLAT,
                  resTarget,
                  resReductionTarget,
                  resIgnore,
                  dmgTakenIncrease,
                  dmgTakenReduction,
                  stunMultiplier
              )
            : 0;
    } else if (isRupture) {
        {
            calculatedDamage = modifiedStats
                ? calculateSheerDamageDealt(
                      multiplierValue,
                      modifiedStats?.HP_FLAT ?? 0,
                      modifiedStats?.ATTACK_FLAT ?? 0,
                      additionalSheerPercent,
                      additionalSheerFlat,
                      modifiedStats?.ELEMENT_PERCENT ?? 0,
                      additionalDmgBonusMultiplierAttacker,
                      critMode,
                      modifiedStats?.CRIT_RATE ?? 0,
                      modifiedStats?.CRIT_DAMAGE ?? 0,
                      resTarget,
                      resReductionTarget,
                      resIgnore,
                      dmgTakenIncrease,
                      dmgTakenReduction,
                      stunMultiplier,
                      additionalSheerDmgBonusMultiplierAttacker
                  )
                : 0;
        }
    } else {
        calculatedDamage = modifiedStats
            ? calculateDamageDealt(
                  multiplierValue,
                  modifiedStats.ATTACK_FLAT,
                  modifiedStats.ELEMENT_PERCENT,
                  additionalDmgBonusMultiplierAttacker,
                  critMode,
                  modifiedStats.CRIT_RATE,
                  modifiedStats.CRIT_DAMAGE,
                  defTarget,
                  defenseShred,
                  levelFactorAttacker[60 - 1],
                  modifiedStats.PEN_PERCENT,
                  modifiedStats.PEN_FLAT,
                  resTarget,
                  resReductionTarget,
                  resIgnore,
                  dmgTakenIncrease,
                  dmgTakenReduction,
                  stunMultiplier
              )
            : 0;
    }

    const getCritFormula = () => {
        switch (critMode) {
            case "avg":
                return `(1 + (min(${modifiedStats?.CRIT_RATE}, 100) / 100) * (${modifiedStats?.CRIT_DAMAGE} / 100))`;
            case "crit":
                return `(1 + ${modifiedStats?.CRIT_DAMAGE} / 100)`;
            case "noCrit":
                return "1";
            default:
                return "1";
        }
    };

    const finalDef = modifiedStats
        ? Math.max(defTarget * (1 - defenseShred / 100) * (1 - (modifiedStats.PEN_PERCENT ?? 0) / 100) - (modifiedStats.PEN_FLAT ?? 0), 0)
        : 0;
    const levelFactor = levelFactorAttacker[59];

    const getFormula = () => {
        if (isAnomaly) {
            return (
                <>
                    <p className="text-sm text-gray-500 mt-2">
                        <strong>Anomaly Base DMG:</strong> ({AnomalyMultipliers[anomalyType]} &times;{" "}
                        {modifiedStats?.ATTACK_FLAT.toFixed(0)})
                        <span className="text-blue-600">
                            {" "}
                            = {calculateAnomalyBaseDamage(anomalyType, modifiedStats?.ATTACK_FLAT ?? 0).toFixed(3)}
                        </span>
                        <br />
                        &times; <strong>Anomaly Proficiency Multiplier:</strong> ({modifiedStats?.ANOMALY_PROFICIENCY_FLAT.toFixed(3)}{" "}
                        &times; 0.01)
                        <span className="text-blue-600">
                            {" "}
                            = {calculateAnomalyProficiencyMultiplier(modifiedStats!.ANOMALY_PROFICIENCY_FLAT ?? 0).toFixed(3)}
                        </span>
                        <br />
                        &times; <strong>Anomaly Level Multiplier:</strong> (1 + (1 / 59) &times; (60 - 1))
                        <span className="text-blue-600"> = {calculateAnomalyLevelMultiplier().toFixed(3)}</span>
                        <br />
                        &times; <strong>DMG Bonus Multiplier:</strong> (1 + {modifiedStats?.ELEMENT_PERCENT.toFixed(3)} / 100 +{" "}
                        {additionalDmgBonusMultiplierAttacker} / 100)
                        <span className="text-blue-600">
                            {" "}
                            ={" "}
                            {dmgBonusMultiplierAttacker(modifiedStats?.ELEMENT_PERCENT ?? 0, additionalDmgBonusMultiplierAttacker).toFixed(
                                3
                            )}
                        </span>
                        <br />
                        &times; <strong>DEF Multiplier:</strong> ({levelFactor} / ({finalDef.toFixed(3)} + {levelFactor}))
                        <span className="text-blue-600">
                            {" "}
                            ={" "}
                            {calculateDefenseMultiplier(
                                levelFactorAttacker[60 - 1],
                                defTarget,
                                defenseShred,
                                modifiedStats?.PEN_PERCENT ?? 0,
                                modifiedStats?.PEN_FLAT ?? 0
                            ).toFixed(3)}
                        </span>
                        <br />
                        &times; <strong>RES Multiplier:</strong> (1 - {resTarget} / 100 + {resReductionTarget} / 100 + {resIgnore} / 100)
                        <span className="text-blue-600">
                            {" "}
                            = {calculateResMultiplier(resTarget, resReductionTarget, resIgnore).toFixed(3)}
                        </span>
                        <br />
                        &times; <strong>DMG Taken Multiplier:</strong> (1 + {dmgTakenIncrease} / 100 - {dmgTakenReduction} / 100)
                        <span className="text-blue-600">
                            {" "}
                            = {calculatedmgTakenMultiplierTarget(dmgTakenIncrease, dmgTakenReduction).toFixed(3)}
                        </span>
                        <br />
                        &times; <strong>Stun Multiplier:</strong> ({stunMultiplier} / 100)
                        <span className="text-blue-600"> = {(stunMultiplier / 100).toFixed(3)}</span>
                    </p>
                </>
            );
        }

        if (isRupture) {
            return (
                <>
                    <p className="text-sm text-gray-500 mt-2">
                        <strong>Base DMG:</strong> ({multiplierValue} / 100 &times; (
                        {calculateSheer(modifiedStats!.HP_FLAT, modifiedStats!.ATTACK_FLAT).toFixed(3)} &times; (1 +{" "}
                        {additionalSheerPercent} / 100) + {additionalSheerFlat}))
                        <span className="text-blue-600">
                            {" "}
                            ={" "}
                            {calculateBaseSheerDamage(
                                multiplierValue,
                                modifiedStats?.HP_FLAT ?? 0,
                                modifiedStats?.ATTACK_FLAT ?? 0,
                                additionalSheerPercent,
                                additionalSheerFlat
                            ).toFixed(3)}
                        </span>
                        <br />
                        &times; <strong>DMG Bonus Multiplier:</strong> (1 + {modifiedStats?.ELEMENT_PERCENT.toFixed(3)} / 100 +{" "}
                        {additionalDmgBonusMultiplierAttacker} / 100)
                        <span className="text-blue-600">
                            {" "}
                            ={" "}
                            {dmgBonusMultiplierAttacker(modifiedStats?.ELEMENT_PERCENT ?? 0, additionalDmgBonusMultiplierAttacker).toFixed(
                                3
                            )}
                        </span>
                        <br />
                        &times; <strong>Crit Multiplier:</strong> {getCritFormula()}
                        <span className="text-blue-600">
                            {" "}
                            = {critMultiplierAttacker(critMode, modifiedStats?.CRIT_RATE ?? 0, modifiedStats?.CRIT_DAMAGE ?? 0).toFixed(3)}
                        </span>{" "}
                        <br />
                        &times; <strong>Additional Sheer DMG Multiplier:</strong> (1 + {additionalSheerDmgBonusMultiplierAttacker} / 100)
                        <span className="text-blue-600"> = {(1 + additionalSheerDmgBonusMultiplierAttacker / 100).toFixed(3)}</span>
                        <br />
                        &times; <strong>RES Multiplier:</strong> (1 - {resTarget} / 100 + {resReductionTarget} / 100 + {resIgnore} / 100)
                        <span className="text-blue-600">
                            {" "}
                            = {calculateResMultiplier(resTarget, resReductionTarget, resIgnore).toFixed(3)}
                        </span>
                        <br />
                        &times; <strong>DMG Taken Multiplier:</strong> (1 + {dmgTakenIncrease} / 100 - {dmgTakenReduction} / 100)
                        <span className="text-blue-600">
                            {" "}
                            = {calculatedmgTakenMultiplierTarget(dmgTakenIncrease, dmgTakenReduction).toFixed(3)}
                        </span>
                        <br />
                        &times; <strong>Stun Multiplier:</strong> ({stunMultiplier} / 100)
                        <span className="text-blue-600"> = {(stunMultiplier / 100).toFixed(3)}</span>
                        <br />
                        <br />
                    </p>
                </>
            );
        }
        return (
            <>
                <p className="text-sm text-gray-500 mt-2">
                    <strong>Base DMG:</strong> ({multiplierValue} / 100 &times; {modifiedStats?.ATTACK_FLAT.toFixed(3)})
                    <span className="text-blue-600">
                        {" "}
                        = {calculateBaseDamage(multiplierValue, modifiedStats?.ATTACK_FLAT ?? 0).toFixed(3)}
                    </span>
                    <br />
                    &times; <strong>DMG Bonus Multiplier:</strong> (1 + {modifiedStats?.ELEMENT_PERCENT.toFixed(3)} / 100 +{" "}
                    {additionalDmgBonusMultiplierAttacker} / 100)
                    <span className="text-blue-600">
                        {" "}
                        = {dmgBonusMultiplierAttacker(modifiedStats?.ELEMENT_PERCENT ?? 0, additionalDmgBonusMultiplierAttacker).toFixed(3)}
                    </span>
                    <br />
                    &times; <strong>Crit Multiplier:</strong> {getCritFormula()}
                    <span className="text-blue-600">
                        {" "}
                        = {critMultiplierAttacker(critMode, modifiedStats?.CRIT_RATE ?? 0, modifiedStats?.CRIT_DAMAGE ?? 0).toFixed(3)}
                    </span>
                    <br />
                    &times; <strong>DEF Multiplier:</strong> ({levelFactor} / ({finalDef.toFixed(3)} + {levelFactor}))
                    <span className="text-blue-600">
                        {" "}
                        ={" "}
                        {calculateDefenseMultiplier(
                            levelFactorAttacker[60 - 1],
                            defTarget,
                            defenseShred,
                            modifiedStats?.PEN_PERCENT ?? 0,
                            modifiedStats?.PEN_FLAT ?? 0
                        ).toFixed(3)}
                    </span>
                    <br />
                    &times; <strong>RES Multiplier:</strong> (1 - {resTarget} / 100 + {resReductionTarget} / 100 + {resIgnore} / 100)
                    <span className="text-blue-600"> = {calculateResMultiplier(resTarget, resReductionTarget, resIgnore).toFixed(3)}</span>
                    <br />
                    &times; <strong>DMG Taken Multiplier:</strong> (1 + {dmgTakenIncrease} / 100 - {dmgTakenReduction} / 100)
                    <span className="text-blue-600">
                        {" "}
                        = {calculatedmgTakenMultiplierTarget(dmgTakenIncrease, dmgTakenReduction).toFixed(3)}
                    </span>
                    <br />
                    &times; <strong>Stun Multiplier:</strong> ({stunMultiplier} / 100)
                    <span className="text-blue-600"> = {(stunMultiplier / 100).toFixed(3)}</span>
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
                    Calculated Damage: <span className="font-mono text-blue-600">{calculatedDamage.toFixed(1)}</span>
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
                            onInputChange={(value) => setDefTarget(Number(value))}
                            inputValue={defTarget}
                        />
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                        <LabelWithTextInput
                            labelText="Defense Shred %"
                            infoText="Debuffs on the enemy that reduce their defense."
                            onInputChange={(value) => setDefenseShred(Number(value))}
                            inputValue={defenseShred}
                        />
                    </div>

                    <div className="flex items-center gap-2 mb-2">
                        <LabelWithTextInput
                            labelText="DMG Taken Increase %"
                            infoText="Debuffs on the enemy that increase damage taken."
                            onInputChange={(value) => setDmgTakenIncrease(Number(value))}
                            inputValue={dmgTakenIncrease}
                        />
                    </div>

                    <div className="flex items-center gap-2 mb-2">
                        <LabelWithTextInput
                            labelText="DMG Taken Reduction"
                            infoText="Buffs on the enemy that reduce damage taken."
                            onInputChange={(value) => setDmgTakenReduction(Number(value))}
                            inputValue={dmgTakenReduction}
                        />
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                        <LabelWithTextInput
                            labelText="RES Target %"
                            infoText="Enemy resistance to your character's element."
                            onInputChange={(value) => setResTarget(Number(value))}
                            inputValue={resTarget}
                        />
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                        <LabelWithTextInput
                            labelText="RES Reduction %"
                            infoText="Percentage to reduce enemies resistance to your character's element by. Additive with RES Ignore %"
                            onInputChange={(value) => setResReductionTarget(Number(value))}
                            inputValue={resReductionTarget}
                        />
                    </div>

                    <div className="flex items-center gap-2 mb-2">
                        <LabelWithTextInput
                            labelText="Stun Multiplier %"
                            infoText="Damage multiplier when the enemy is stunned."
                            onInputChange={(value) => setStunMultiplier(Number(value))}
                            inputValue={stunMultiplier}
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
                    <div className="flex items-center gap-2 mb-2">
                        <LabelWithTextInput
                            labelText="RES Ignore %"
                            infoText="Attacker's resistance penetration. Additive with RES Reduction %"
                            onInputChange={(value) => setResIgnore(Number(value))}
                            inputValue={resIgnore}
                        />
                    </div>{" "}
                    <div className="flex items-center gap-2 mb-2">
                        <LabelWithTextInput
                            labelText="Additional DMG %"
                            infoText="Additional damage bonus from other sources. E.G. Lighters 75% Fire % Ice, Pulchras 30%, "
                            onInputChange={(value) => setAdditionalDmgBonusMultiplierAttacker(Number(value))}
                            inputValue={additionalDmgBonusMultiplierAttacker}
                        />
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                        <LabelWithTextInput
                            labelText="Additional Sheer DMG %"
                            infoText="Additional sheer damage bonus from other sources. This is different from Additional DMG % is is multiplicative with the damage formula. Sources include anything that says 'Sheer DMG' such as Yixuans W-Engine"
                            onInputChange={(value) => setAdditionalSheerDmgBonusMultiplierAttacker(Number(value))}
                            inputValue={additionalSheerDmgBonusMultiplierAttacker}
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
                            value={critMode}
                            onChange={(e) => setCritMode(e.target.value as "avg" | "crit" | "noCrit")}
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
                            onInputChange={(value) => setAdditionalSheerFlat(Number(value))}
                            inputValue={additionalSheerFlat}
                        />
                    </div>
                    <div className={`flex items-center gap-2 mb-2 ${isRupture ? "" : "opacity-50"}`}>
                        <LabelWithTextInput
                            labelText="Add. Sheer %"
                            infoText="Additional sheer percentage"
                            onInputChange={(value) => setAdditionalSheerPercent(Number(value))}
                            inputValue={additionalSheerPercent}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
export default DamageCalculator;
