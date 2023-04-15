interface InputProps {
    value: string;
}

const Input = ({ value }: InputProps) => {
    return (
        <>
            <input
                value={value}
                className=" bg-[#17181A] w-[450px] p-[40px] text-[40px] ml-[500px] text-white">
            </input>
        </>
    )
}

export default Input