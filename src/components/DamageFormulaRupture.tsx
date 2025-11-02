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
    additionalDamage,
}: {
    multiplier: number;
    attackModifiers: AttackModifiers;
    stats: Stats;
    additionalDamage: number;
}) {
    const getCritFormula = () => {
        switch (attackModifiers.critMode) {
            case "avg":
                return `(1 + (min(${stats.CRIT_RATE.toFixed(1)}, 100) / 100) * (${stats.CRIT_DAMAGE.toFixed(1)} / 100))`;
            case "crit":
                return `(1 + ${stats.CRIT_DAMAGE.toFixed(1)} / 100)`;
            case "noCrit":
                return "1";
            default:
                return "1";
        }
    };

    return (
        <>
            <p className="mt-2 grid grid-cols-[auto_auto_1fr] gap-x-6 ">
                <strong>Base DMG:</strong> ({multiplier.toFixed(1)} / 100 &times; (
                {calculateSheer(stats!.HP_FLAT, stats!.ATTACK_FLAT).toFixed(1)} &times; (1 + {attackModifiers.additionalSheerPercent} / 100)
                + {attackModifiers.additionalSheerFlat}))
                <span className="text-blue-300">
                    {" "}
                    ={" "}
                    {calculateBaseSheerDamage(
                        multiplier,
                        stats.HP_FLAT,
                        stats.ATTACK_FLAT,
                        attackModifiers.additionalSheerPercent,
                        attackModifiers.additionalSheerFlat
                    ).toFixed(1)}
                </span>
                <div>
                    &times; <strong>DMG Bonus Multiplier:</strong>{" "}
                </div>{" "}
                (1 + {stats.ELEMENT_PERCENT.toFixed(1)} / 100 + {attackModifiers.additionalDmgBonusMultiplierAttacker} / 100)
                <span className="text-blue-300">
                    {" "}
                    = {dmgBonusMultiplierAttacker(stats.ELEMENT_PERCENT, attackModifiers.additionalDmgBonusMultiplierAttacker).toFixed(3)}
                </span>
                <div>
                    &times; <strong>Crit Multiplier:</strong>{" "}
                </div>{" "}
                {getCritFormula()}
                <span className="text-blue-300">
                    {" "}
                    = {critMultiplierAttacker(attackModifiers.critMode, stats.CRIT_RATE, stats.CRIT_DAMAGE).toFixed(1)}
                </span>{" "}
                <div>
                    &times; <strong>Additional Sheer DMG Multiplier:</strong>{" "}
                </div>{" "}
                <div>(1 + {attackModifiers.additionalSheerDmgBonusMultiplierAttacker} / 100)</div>
                <span className="text-blue-300"> = {(1 + attackModifiers.additionalSheerDmgBonusMultiplierAttacker / 100).toFixed(1)}</span>
                <div>
                    &times; <strong>RES Multiplier:</strong>{" "}
                </div>{" "}
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
                    ).toFixed(1)}
                </span>
                <div>
                    &times; <strong>DMG Taken Multiplier:</strong>{" "}
                </div>{" "}
                <div>
                    (1 + {attackModifiers.dmgTakenIncrease} / 100 - {attackModifiers.dmgTakenReduction} / 100)
                </div>
                <span className="text-blue-300">
                    {" "}
                    = {calculatedmgTakenMultiplierTarget(attackModifiers.dmgTakenIncrease, attackModifiers.dmgTakenReduction).toFixed(1)}
                </span>
                <div>
                    &times; <strong>Stun Multiplier:</strong>{" "}
                </div>{" "}
                ({attackModifiers.stunMultiplier} / 100)
                <span className="text-blue-300"> = {(attackModifiers.stunMultiplier / 100).toFixed(1)}</span>
                <div>
                    &times; <strong>Additional DMG:</strong>{" "}
                </div>
                <div></div>
                <span className="text-blue-300"> {additionalDamage.toFixed(1)}</span>
                <br />
                <br />
            </p>
        </>
    );
}

export default DamageFormulaRupture;
