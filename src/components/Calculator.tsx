// import classes from './../styles/Calculator.module.scss'
import React from "react";

interface CalculatorCard {
    width?: string; // ? Делает пропс не обязательным
    height?: string;
    children?: React.ReactElement | React.ReactNode
}

const Calculator:React.FC<CalculatorCard> = ({ width, height, children }) => {

    return (
        <div
            style={{width, height}}
            className='m-auto pt-[50px] pl-[80px]'>
                {children}
        </div>
    )
}


export default Calculator