import React from "react";

interface ButtonProps {
    title: number | string;
    updateCalc: Function;
}

const Button: React.FC<ButtonProps> = ({ title, updateCalc}) => {
    return (
        <>
            <button
                onClick={() => updateCalc(title)}
                className="w-[10%] h-[10vh] bg-[#17181A] text-[#29A8FF] font-bold text-[20px]">
                {title}
            </button>
        </>
    )
}

export default Button;