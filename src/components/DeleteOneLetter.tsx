import React from "react";

interface DeleteOneLetterProps {
    title: number | string;
    deleteLast: Function;
}

const DeleteOneLetter: React.FC<DeleteOneLetterProps> = ({ title, deleteLast }) => {

    return (
        <>
            <button
                onClick={() => { 
                    deleteLast()
                }}
                className="w-[10%] h-[10vh] bg-blue-600 border-[2px] border-white">
                {title}
            </button>
        </>
    )
}

export default DeleteOneLetter;