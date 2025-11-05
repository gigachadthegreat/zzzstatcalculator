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
    return (
        <div className="w-80 flex justify-between">
            <LabelWithInfo labelText={labelText} infoText={infoText} />

            <input
                disabled={disabled}
                type="number"
                value={inputValue.toFixed(1)}
                onChange={(e) => onInputChange(Number(e.target.value))} // prettier-ignore
                className="p-1 border rounded bg-white dark:bg-slate-700 dark:border-slate-600 w-19 text-center"
            />
        </div>
    );
}

export default LabelWithTextInput;
