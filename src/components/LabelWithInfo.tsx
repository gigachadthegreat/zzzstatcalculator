import infoIcon from "../assets/info-icon.png";


function LabelWithInfo({ labelText, infoText }: { labelText: string; infoText?: string }) {
    return (
        <div className="flex items-center  space-x-2">
            <label>{labelText}</label>
            {infoText ?
            <img
                className="invert text-white opacity-75 hover:opacity-50 hover:cursor-pointer "
                src={infoIcon}
                title={infoText}
                alt="Info Icon"
                width="15px"
                height="15px"
            />
            : <></>}
        </div>
    );
}

export default LabelWithInfo;