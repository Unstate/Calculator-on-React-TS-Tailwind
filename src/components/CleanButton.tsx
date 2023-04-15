import React from "react";

interface CleanButtonProps {
    title: number | string;
    setValue: Function;
    setNextValue: Function;
}

const CleanButton: React.FC<CleanButtonProps> = ({ title, setNextValue,setValue }) => {
    
    return (
        <>
            <button
                onClick={() => {
                    setNextValue('')
                    setValue('')
                }}
                className="w-[10%] h-[10vh] bg-blue-600 border-[2px] border-white">
                {title}
            </button>
        </>
    )
}

export default CleanButton;