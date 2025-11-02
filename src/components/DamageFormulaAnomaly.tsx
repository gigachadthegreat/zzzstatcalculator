import { levelFactorAttacker, type AttackModifiers, type Stats } from "../constants/types";
import {
    calculateDefenseMultiplier,
    calculatedmgTakenMultiplierTarget,
    calculateResMultiplier,
    dmgBonusMultiplierAttacker,calculateAnomalyBaseDamage, calculateAnomalyProficiencyMultiplier, calculateAnomalyLevelMultiplier
} from "../lib/Calculations";
import {
    AnomalyMultipliers
}
from "../constants/types"

function DamageFormulaAnomaly({
    anomalyType,
    attackModifiers,
    stats,
}: {
    anomalyType: keyof typeof AnomalyMultipliers;
    attackModifiers: AttackModifiers;
    stats: Stats;
}) {
    const finalDef = stats
        ? Math.max(
              attackModifiers.defenseTarget * (1 - attackModifiers.defenseShred / 100) * (1 - (stats.PEN_PERCENT ?? 0) / 100) -
                  (stats.PEN_FLAT ?? 0),
              0
          )
        : 0;

    return (
        <>
            <p className="text-sm text-gray-300 mt-2">
                <strong>Anomaly Base DMG:</strong> ({AnomalyMultipliers[anomalyType]} &times; {stats?.ATTACK_FLAT.toFixed(0)})
                <span className="text-blue-300"> = {calculateAnomalyBaseDamage(anomalyType, stats?.ATTACK_FLAT ?? 0).toFixed(3)}</span>
                <br />
                &times; <strong>Anomaly Proficiency Multiplier:</strong> ({stats?.ANOMALY_PROFICIENCY_FLAT.toFixed(3)} &times; 0.01)
                <span className="text-blue-300">
                    {" "}
                    = {calculateAnomalyProficiencyMultiplier(stats!.ANOMALY_PROFICIENCY_FLAT ?? 0).toFixed(3)}
                </span>
                <br />
                &times; <strong>Anomaly Level Multiplier:</strong> (1 + (1 / 59) &times; (60 - 1))
                <span className="text-blue-300"> = {calculateAnomalyLevelMultiplier().toFixed(3)}</span>
                <br />
                &times; <strong>DMG Bonus Multiplier:</strong> (1 + {stats?.ELEMENT_PERCENT.toFixed(3)} / 100 +{" "}
                {attackModifiers.additionalDmgBonusMultiplierAttacker} / 100)
                <span className="text-blue-300">
                    {" "}
                    ={" "}
                    {dmgBonusMultiplierAttacker(stats?.ELEMENT_PERCENT ?? 0, attackModifiers.additionalDmgBonusMultiplierAttacker).toFixed(
                        3
                    )}
                </span>
                <br />
                &times; <strong>DEF Multiplier:</strong> ({attackModifiers.levelFactorAttacker} / ({finalDef.toFixed(3)} + {attackModifiers.levelFactorAttacker}))
                <span className="text-blue-300">
                    {" "}
                    ={" "}
                    {calculateDefenseMultiplier(
                        levelFactorAttacker[60 - 1],
                        attackModifiers.defenseTarget,
                        attackModifiers.defenseShred,
                        stats?.PEN_PERCENT ?? 0,
                        stats?.PEN_FLAT ?? 0
                    ).toFixed(3)}
                </span>
                <br />
                &times; <strong>RES Multiplier:</strong> (1 - {attackModifiers.resTarget} / 100 + {attackModifiers.resReductionTarget} / 100
                + {attackModifiers.resIgnore} / 100)
                <span className="text-blue-300">
                    {" "}
                    ={" "}
                    {calculateResMultiplier(
                        attackModifiers.resTarget,
                        attackModifiers.resReductionTarget,
                        attackModifiers.resIgnore
                    ).toFixed(3)}
                </span>
                <br />
                &times; <strong>DMG Taken Multiplier:</strong> (1 + {attackModifiers.dmgTakenIncrease} / 100 -{" "}
                {attackModifiers.dmgTakenReduction} / 100)
                <span className="text-blue-300">
                    {" "}
                    = {calculatedmgTakenMultiplierTarget(attackModifiers.dmgTakenIncrease, attackModifiers.dmgTakenReduction).toFixed(3)}
                </span>
                <br />
                &times; <strong>Stun Multiplier:</strong> ({attackModifiers.stunMultiplier} / 100)
                <span className="text-blue-300"> = {(attackModifiers.stunMultiplier / 100).toFixed(3)}</span>
            </p>
        </>
    );
}

export default DamageFormulaAnomaly;
