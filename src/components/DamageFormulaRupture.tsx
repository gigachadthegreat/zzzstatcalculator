import { type AttackModifiers, type Stats } from "../constants/types";
import {
    calculateBaseSheerDamage,
    calculatedmgTakenMultiplierTarget,
    calculateResMultiplier,
    calculateSheer,
    critMultiplierAttacker,
    dmgBonusMultiplierAttacker,
} from "../lib/Calculations";

function DamageFormulaRupture({
    multiplier,
    attackModifiers,
    stats,
}: {
    multiplier: number;
    attackModifiers: AttackModifiers;
    stats: Stats;
}) {
    const getCritFormula = () => {
        switch (attackModifiers.critMode) {
            case "avg":
                return `(1 + (min(${stats?.CRIT_RATE}, 100) / 100) * (${stats?.CRIT_DAMAGE} / 100))`;
            case "crit":
                return `(1 + ${stats?.CRIT_DAMAGE} / 100)`;
            case "noCrit":
                return "1";
            default:
                return "1";
        }
    };

    return (
        <>
            <p className="text-sm text-gray-300 mt-2">
                <strong>Base DMG:</strong> ({multiplier} / 100 &times; ({calculateSheer(stats!.HP_FLAT, stats!.ATTACK_FLAT).toFixed(3)}{" "}
                &times; (1 + {attackModifiers.additionalSheerPercent} / 100) + {attackModifiers.additionalSheerFlat}))
                <span className="text-blue-300">
                    {" "}
                    ={" "}
                    {calculateBaseSheerDamage(
                        multiplier,
                        stats?.HP_FLAT ?? 0,
                        stats?.ATTACK_FLAT ?? 0,
                        attackModifiers.additionalSheerPercent,
                        attackModifiers.additionalSheerFlat
                    ).toFixed(3)}
                </span>
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
                &times; <strong>Crit Multiplier:</strong> {getCritFormula()}
                <span className="text-blue-300">
                    {" "}
                    = {critMultiplierAttacker(attackModifiers.critMode, stats?.CRIT_RATE ?? 0, stats?.CRIT_DAMAGE ?? 0).toFixed(3)}
                </span>{" "}
                <br />
                &times; <strong>Additional Sheer DMG Multiplier:</strong> (1 + {attackModifiers.additionalSheerDmgBonusMultiplierAttacker} /
                100)
                <span className="text-blue-300"> = {(1 + attackModifiers.additionalSheerDmgBonusMultiplierAttacker / 100).toFixed(3)}</span>
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
                <br />
                <br />
            </p>
        </>
    );
}

export default DamageFormulaRupture;
