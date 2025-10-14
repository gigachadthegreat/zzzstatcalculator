import { type Stats, levelFactorAttacker, AnomalyMultipliers } from "../constants/types";
// import LabelWithInfo from "./LabelWithInfo";
import infoIcon from "../assets/info-icon.png";
import LabelWithTextInput from "./LabelWithTextInput";
import { calculateSheer } from "../lib/Utility";
import LabelWithInfo from "./LabelWithInfo";

function DamageCalculator({
    calculatedStats,

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

    const calculateDamageDealt = () => {
        if (!modifiedStats) return 0;
        return (
            calculateBaseDamage() *
            dmgBonusMultiplierAttacker() *
            critMultiplierAttacker() *
            calculateDefenseMultiplier() *
            calculateResMultiplier() *
            calculatedmgTakenMultiplierTarget() *
            (stunMultiplier / 100)
        );
    };

    const calculateSheerDamageDealt = () => {
        if (!modifiedStats) return 0;
        return (
            calculateBaseDamage() *
            dmgBonusMultiplierAttacker() *
            critMultiplierAttacker() *
            calculateResMultiplier() *
            calculatedmgTakenMultiplierTarget() *
            (stunMultiplier / 100) *
            (additionalSheerDmgBonusMultiplierAttacker / 100 + 1)
        );
    };

    const calculateAnomalyDamageDealt = () => {
        if (!modifiedStats) return 0;
        return (
            calculateAnomalyBaseDamage() *
            calculateAnomalyProficiencyMultiplier() *
            calculateAnomalyLevelMultiplier() *
            dmgBonusMultiplierAttacker() *
            calculateDefenseMultiplier() *
            calculateResMultiplier() *
            calculatedmgTakenMultiplierTarget() *
            (stunMultiplier / 100)
        );
    };

    const calculateAnomalyBaseDamage = () => {
        return AnomalyMultipliers[anomalyType as keyof typeof AnomalyMultipliers] * (modifiedStats!.ATTACK_FLAT ?? 0);
    };

    const calculateAnomalyProficiencyMultiplier = () => {
        return (modifiedStats!.ANOMALY_PROFICIENCY_FLAT ?? 0) * 0.01;
    };

    const calculateAnomalyLevelMultiplier = () => {
        return 1 + (1 / 59) * (60 - 1);
    };

    const calculateBaseDamage = () => {
        if (isRupture) {
            return (
                (multiplierValue / 100) *
                (calculateSheer(modifiedStats!.HP_FLAT ?? 0, modifiedStats!.ATTACK_FLAT ?? 0) * (1 + additionalSheerPercent / 100) +
                    additionalSheerFlat)
            );
        }
        return (multiplierValue / 100) * (modifiedStats!.ATTACK_FLAT ?? 0);
    };

    const dmgBonusMultiplierAttacker = () => {
        return (modifiedStats!.ELEMENT_PERCENT ?? 0) / 100 + additionalDmgBonusMultiplierAttacker / 100 + 1;
    };

    const critMultiplierAttacker = () => {
        if (!modifiedStats) return 1;
        switch (critMode) {
            case "avg":
                return 1 + (Math.min(modifiedStats.CRIT_RATE, 100) / 100) * (modifiedStats.CRIT_DAMAGE / 100);
            case "crit":
                return 1 + modifiedStats.CRIT_DAMAGE / 100;
            case "noCrit":
                return 1;
            default:
                return 1;
        }
    };

    const calculateDefenseMultiplier = () => {
        const levelFactor = levelFactorAttacker[60 - 1];
        const finalDef = Math.max(
            defTarget * (1 - defenseShred / 100) * (1 - (modifiedStats!.PEN_PERCENT ?? 0) / 100) - (modifiedStats!.PEN_FLAT ?? 0),
            0
        );
        return levelFactor / (finalDef + levelFactor);
    };

    const calculateResMultiplier = () => {
        return 1 - resTarget / 100 + resReductionTarget / 100 + resIgnore / 100;
    };

    const calculatedmgTakenMultiplierTarget = () => {
        return 1 + dmgTakenIncrease / 100 - dmgTakenReduction / 100;
    };

    let calculatedDamage = 0;
    if (isAnomaly) {
        calculatedDamage = modifiedStats ? calculateAnomalyDamageDealt() : 0;
    } else if (isRupture) {
        {
            calculatedDamage = modifiedStats ? calculateSheerDamageDealt() : 0;
        }
    } else {
        calculatedDamage = modifiedStats ? calculateDamageDealt() : 0;
    }

    return (
        <div className="">
            <h2 className="text-2xl font-bold mb-6 text-center">Damage Calculation</h2>
            <div className="flex justify-between ">
                <div className="w-screen mx-2 p-4 border rounded-lg bg-gray-50">
                    <div className="flex items-center space-x-2 ">
                        <h3 className="font-bold ">Target Stats</h3>
                        <img
                            className="opacity-75 hover:opacity-50 hover:cursor-pointer "
                            src={infoIcon}
                            title="Stats related to the target enemy used in damage calculation"
                            alt="Info Icon"
                            width="15px"
                            height="15px"
                        />
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
                <div className="w-screen mx-2 p-4 border rounded-lg bg-gray-50">
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
                    <div className="flex items-center gap-2 mb-2 py-1">
                        <LabelWithInfo
                            labelText={"Use Rupture caltulation"}
                            infoText={"Use Sheerforce in Damage calculation instead of Attack"}
                        />
                        <input checked={isRupture} onChange={(e) => setIsRupture(e.target.checked)} type="checkbox" />
                    </div>
                    <div className="flex items-center gap-2 mb-2 py-1">
                        <LabelWithInfo labelText={"Use Anomaly caltulation"} infoText={"Use Anomalydamage in Damage calculation"} />
                        <input checked={isAnomaly} onChange={(e) => setIsAnomaly(e.target.checked)} type="checkbox" />
                    </div>
                    <div className="flex items-center gap-2 mb-2 py-1">
                        <LabelWithInfo
                            labelText={"Anomaly Type"}
                            infoText={"The attribute/element of the anomaly. Affects Damage calculation"}
                        />
                        <select
                            value={anomalyType}
                            onChange={(e) =>setAnomalyType(e.target.value as keyof typeof AnomalyMultipliers)} // prettier-ignore
                            className="p-1 border rounded w-24"
                        >
                            {Object.keys(AnomalyMultipliers).map((key) => (
                                <option value={key} key={key}>
                                    {key}
                                </option>
                            ))}
                        </select>{" "}
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                        <label>Crit Mode:</label>
                        <select
                            value={critMode}
                            onChange={(e) => setCritMode(e.target.value as "avg" | "crit" | "noCrit")} // prettier-ignore
                            className="p-1 border rounded w-24"
                        >
                            <option value="avg">Average</option>
                            <option value="crit">Always Crit</option>
                            <option value="noCrit">No Crit</option>
                        </select>
                    </div>
                </div>
                <div className="w-screen mx-2 p-4 border rounded-lg bg-gray-50">
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
            <div className="mt-4 text-center">
                <div className=" text-3xl font-bold">
                    Calculated Damage: <span className="font-mono text-blue-600">{calculatedDamage.toFixed(1)}</span>
                </div>
            </div>
        </div>
    );
}
export default DamageCalculator;
