import LabelWithInfo from "./LabelWithInfo";

function LabelWithTextInput({
    labelText,
    infoText,
    inputValue,
    onInputChange,
}: {
    labelText: string;
    infoText: string;
    inputValue: string | number;
    onInputChange: (newValue: number) => void;
    inputType?: string;
    placeholder?: string;
}) {
    return (
        <div className="w-80 flex justify-between">
            <LabelWithInfo labelText={labelText} infoText={infoText} />

            <input
                type="number"
                value={inputValue}
                onChange={(e) => onInputChange(Number(e.target.value))} // prettier-ignore
                className="p-1 border rounded bg-white dark:bg-slate-700 dark:border-slate-600 w-19 text-center"
            />
        </div>
    );
}

export default LabelWithTextInput;
