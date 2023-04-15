import React from "react";

interface EqualButtonProps {
    title: number | string;
    value:string;
    setNextValue: Function;
}

const EqualButton: React.FC<EqualButtonProps> = ({ title, setNextValue, value }) => {

    return (
        <>
            <button
                onClick={() => { 
                    setNextValue(eval(value).toString())
                }}
                className="w-[10%] h-[10vh] bg-blue-600 border-[2px] border-white">
                {title}
            </button>
        </>
    )
}

export default EqualButton;