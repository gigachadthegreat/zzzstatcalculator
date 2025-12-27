import { useState, type ChangeEvent } from "react";
import LabelWithInfo from "./LabelWithInfo";

function LabelWithTextInput({
    labelText,
    infoText,
    inputValue,
    onInputChange,
    disabled,
}: {
    labelText: string;
    infoText: string;
    inputValue: number;
    onInputChange: (newValue: number) => void;
    disabled?: boolean;
    inputType?: string;
    placeholder?: string;
}) {
    const [currentValue, setCurrentValue] = useState<string>(String(inputValue));

    const handleFocusLoss = () => {
        // Optional: Clean up trailing dots (e.g., "12." becomes "12")
        const cleaned = currentValue.endsWith(".") ? currentValue.slice(0, -1) : currentValue;

        setCurrentValue(cleaned);
        onInputChange(Number(cleaned));
    };

    const handleChange = (e: string) => {
        // 1. Replace commas with periods immediately
        let val = e.replace(/,/g, ".");

        // 2. The Regex
        // ^          : Start
        // (?:0|[1-9]\d*)? : Optional: Either a 0 OR a non-zero digit followed by digits
        // (?:\.\d*)? : Optional: A dot followed by any number of digits
        // $          : End
        const regex = /^(?:0|[1-9]\d*)?(?:\.\d*)?$/;

        // 3. Special Case: If user types just "." we convert to "0." for them
        if (val === ".") {
            val = "0.";
        }

        // 4. Validate and Update
        if (regex.test(val)) {
            setCurrentValue(val);
        }
    };

    return (
        <div className="w-full flex justify-between items-center gap-6">
            <LabelWithInfo labelText={labelText} infoText={infoText} />

            <input
                disabled={disabled}
                type="text"
                value={currentValue}
                onChange={(e) => handleChange(e.target.value)}
                onBlur={handleFocusLoss}
                onKeyDown={(e) => e.key == "Enter" ? handleFocusLoss() : undefined}
                className="p-1 border rounded bg-white dark:bg-slate-700 dark:border-slate-600 w-19 text-center"
            />
        </div>
    );
}

export default LabelWithTextInput;
