import { type AttackModifiers, type Stats } from "../constants/types";
import {
    calculateDefenseMultiplier,
    calculatedmgTakenMultiplierTarget,
    calculateResMultiplier,
    dmgBonusMultiplierAttacker,
    calculateAnomalyBaseDamage,
    calculateAnomalyProficiencyMultiplier,
    calculateAnomalyLevelMultiplier,
} from "../lib/Calculations";
import { AnomalyMultipliers } from "../constants/types";

function DamageFormulaAnomaly({
    anomalyType,
    attackModifiers,
    stats,
    additionalDamage,
}: {
    anomalyType: keyof typeof AnomalyMultipliers;
    attackModifiers: AttackModifiers;
    stats: Stats;
    additionalDamage: number;
}) {
    const finalDef = Math.max(
        attackModifiers.defenseTarget * (1 - attackModifiers.defenseShred / 100) * (1 - stats.PEN_PERCENT / 100) - stats.PEN_FLAT,
        0
    );

    return (
        <>
            <div className="mt-2 grid grid-cols-[auto_auto_1fr] gap-x-6 ">
                <strong>Anomaly Base DMG:</strong> ({AnomalyMultipliers[anomalyType]} &times; {stats.ATTACK_FLAT.toFixed(0)})
                <span className="text-blue-300"> = {calculateAnomalyBaseDamage(anomalyType, stats.ATTACK_FLAT).toFixed(1)}</span>
                <div>
                    &times; <strong>Anomaly Proficiency Multiplier:</strong>{" "}
                </div>
                ({stats.ANOMALY_PROFICIENCY_FLAT.toFixed(0)} &times; 0.01)
                <span className="text-blue-300">
                    {" "}
                    = {calculateAnomalyProficiencyMultiplier(stats!.ANOMALY_PROFICIENCY_FLAT).toPrecision(4)}
                </span>
                <div>
                    &times; <strong>Anomaly Level Multiplier:</strong>{" "}
                </div>
                (1 + (1 / 59) &times; (60 - 1))
                <span className="text-blue-300"> = {calculateAnomalyLevelMultiplier().toPrecision(4)}</span>
                <div>
                    {" "}
                    &times; <strong>DMG Bonus Multiplier:</strong>{" "}
                </div>
                <div>
                    (1 + {stats.ELEMENT_PERCENT.toFixed(0)} / 100 + {attackModifiers.additionalDmgBonusMultiplierAttacker} / 100)
                </div>
                <span className="text-blue-300">
                    {" "}
                    ={" "}
                    {dmgBonusMultiplierAttacker(stats.ELEMENT_PERCENT, attackModifiers.additionalDmgBonusMultiplierAttacker).toPrecision(4)}
                </span>
                <div>
                    {" "}
                    &times; <strong>DEF Multiplier:</strong>{" "}
                </div>
                <div>
                    ({attackModifiers.levelFactorAttacker} / ({finalDef.toFixed(0)} + {attackModifiers.levelFactorAttacker}))
                </div>
                <span className="text-blue-300">
                    {" "}
                    ={" "}
                    {calculateDefenseMultiplier(
                        attackModifiers.levelFactorAttacker,
                        attackModifiers.defenseTarget,
                        attackModifiers.defenseShred,
                        stats.PEN_PERCENT,
                        stats.PEN_FLAT
                    ).toPrecision(4)}
                </span>
                <div>
                    {" "}
                    &times; <strong>RES Multiplier:</strong>{" "}
                </div>
                <div>
                    (1 - {attackModifiers.resTarget} / 100 + {attackModifiers.resReductionTarget} / 100 + {attackModifiers.resIgnore} / 100)
                </div>
                <span className="text-blue-300">
                    {" "}
                    ={" "}
                    {calculateResMultiplier(
                        attackModifiers.resTarget,
                        attackModifiers.resReductionTarget,
                        attackModifiers.resIgnore
                    ).toPrecision(4)}
                </span>
                <div>
                    {" "}
                    &times; <strong>DMG Taken Multiplier:</strong>{" "}
                </div>
                <div>
                    {" "}
                    (1 + {attackModifiers.dmgTakenIncrease} / 100 - {attackModifiers.dmgTakenReduction} / 100)
                </div>
                <span className="text-blue-300">
                    {" "}
                    ={" "}
                    {calculatedmgTakenMultiplierTarget(attackModifiers.dmgTakenIncrease, attackModifiers.dmgTakenReduction).toPrecision(4)}
                </span>
                <div>
                    {" "}
                    &times; <strong>Stun Multiplier:</strong>{" "}
                </div>
                ({attackModifiers.stunMultiplier} / 100)
                <span className="text-blue-300"> = {(attackModifiers.stunMultiplier / 100).toPrecision(4)}</span>
                <div>
                    {" "}
                    + <strong>Additional DMG:</strong>
                </div>
                <div></div>
                <span className="text-blue-300"> {additionalDamage.toFixed(0)}</span>
                <br />
            </div>
        </>
    );
}

export default DamageFormulaAnomaly;
