import { type Stats, type statTypeKeys } from "../constants/types";
import { calculateSheer} from "../lib/Calculations"

const StatRow = ({
    label,
    baseValue,
    additionalValue,
    combatValue,
    toFixed,
    className,
}: {
    label: string;
    baseValue: number;
    additionalValue: number;
    combatValue: number;
    toFixed: number;
    className?: string;
}) => (
    <>
        <span className={`font-bold ${className}`}>{label}</span>
        <span className={`font-mono text-center ${className}`}>{baseValue.toFixed(toFixed)}</span>
        <span className={`font-mono text-center ${className}`}>{additionalValue.toFixed(toFixed)}</span>
        <span className={`font-mono text-center ${className}`}>{combatValue.toFixed(toFixed)}</span>
    </>
);


function Results({
    header,
    calculatedStats,
    additionalStats,
    isRupture,
    additionalSheer,
}: {
    header: string;
    calculatedStats: Stats | null;
    additionalStats: Stats | null;
    isRupture: boolean;
    additionalSheer: number | null;
}) {

    const statsToDisplay: { key: statTypeKeys; label: string; toFixed: number }[] = [
        { key: "HP_FLAT", label: "HP", toFixed: 0 },
        { key: "ATTACK_FLAT", label: "Attack", toFixed: 0 },
        { key: "DEFENSE_FLAT", label: "Defense", toFixed: 0 },
        { key: "CRIT_RATE", label: "Crit Rate", toFixed: 1 },
        { key: "CRIT_DAMAGE", label: "Crit Damage", toFixed: 1 },
        { key: "ELEMENT_PERCENT", label: "Element %", toFixed: 0 },
        { key: "ANOMALY_PROFICIENCY_FLAT", label: "Anomaly Proficiency", toFixed: 0 },
        { key: "ANOMALY_MASTERY_FLAT", label: "Anomaly Mastery", toFixed: 0 },
        { key: "PEN_PERCENT", label: "Pen %", toFixed: 1 },
        { key: "PEN_FLAT", label: "Pen flat", toFixed: 0 },
        { key: "IMPACT_FLAT", label: "Impact", toFixed: 0 },
        { key: "ENERGY_REGEN_FLAT", label: "Energy Regen", toFixed: 2 },
    ];

    if (calculatedStats === null) {
        return <div>No stats calculated yet.</div>;
    }
    return (
        <div className="w-fit p-4 bg-gray-100 dark:bg-slate-800 rounded-lg mx-auto">
            <h2 className="text-2xl font-bold text-center mb-5">{header}</h2>
            <div className="grid grid-cols-4 auto-cols-min [&>span]:p-1">
                <span className="font-bold"></span>
                <span className="font-mono font-bold text-center ">Base</span>
                <span className="font-mono font-bold text-center ">Additional</span>
                <span className="font-mono font-bold text-center">In-Combat</span>
                {statsToDisplay.map(({ key, label, toFixed }, index) => {
                    const baseValue = calculatedStats ? calculatedStats[key as keyof Stats] : 0;
                    const additionalValue = additionalStats ? additionalStats[key as keyof Stats] : 0;
                    const combatValue = baseValue + additionalValue;
                    const className = index % 2 === 0 ? "bg-gray-200 dark:bg-slate-700" : "dark:bg-slate-800";

                    return (
                        <StatRow
                            key={key}
                            label={label}
                            baseValue={baseValue}
                            additionalValue={additionalValue}
                            combatValue={combatValue}
                            toFixed={toFixed}
                            className={className}
                        />
                    );
                })}
                <span className={`font-bold ${statsToDisplay.length % 2 === 0 ? "bg-gray-200 dark:bg-slate-700" : "dark:bg-slate-800"} ${isRupture ? "" : "opacity-50"}`}>
                    Sheer Force
                </span>
                <span
                    className={`font-mono text-center ${statsToDisplay.length % 2 === 0 ? "bg-gray-200 dark:bg-slate-700" : "dark:bg-slate-800"} ${
                        isRupture ? "" : "opacity-50"
                    }`}
                >
                    {calculateSheer(calculatedStats.HP_FLAT, calculatedStats.ATTACK_FLAT).toFixed(0)}
                </span>
                <span
                    className={`font-mono text-center ${statsToDisplay.length % 2 === 0 ? "bg-gray-200 dark:bg-slate-700" : "dark:bg-slate-800"} ${
                        isRupture ? "" : "opacity-50"
                    }`}
                >
                    {(calculateSheer(additionalStats?.HP_FLAT ?? 0, additionalStats?.ATTACK_FLAT ?? 0) + (additionalSheer ?? 0)).toFixed(0)}
                </span>
                <span
                    className={`font-mono text-center ${statsToDisplay.length % 2 === 0 ? "bg-gray-200 dark:bg-slate-700" : "dark:bg-slate-800"} ${
                        isRupture ? "" : "opacity-50"
                    }`}
                >
                    {(
                        calculateSheer(calculatedStats.HP_FLAT, calculatedStats.ATTACK_FLAT) +
                        calculateSheer(additionalStats?.HP_FLAT ?? 0, additionalStats?.ATTACK_FLAT ?? 0) +
                        (additionalSheer ?? 0)
                    ).toFixed(0)}
                </span>
            </div>
        </div>
    );
}

export default Results;
