import Button from "./Button"
import CleanButton from "./CleanButton";
import DeleteOneLetter from "./DeleteOneLetter";
import EqualButton from "./EqualButton";

interface ButtonsProps {
    updateCalc : Function;
    setNextValue: Function;
    setValue: Function;
    deleteLast: Function;
    value: string;
}

const Buttons: React.FC<ButtonsProps> = ({ updateCalc, setNextValue, value, setValue, deleteLast }) => {
    return (
        <div className="ml-[500px]">
            <div>
                <Button updateCalc={updateCalc} title={"("}></Button>
                <Button updateCalc={updateCalc} title={")"}></Button>
                <DeleteOneLetter deleteLast={deleteLast} title={"DEL"}></DeleteOneLetter>
                <CleanButton setValue={setValue} setNextValue={setNextValue} title="AC"></CleanButton>
            </div>
            <div>
                <Button updateCalc={updateCalc} title={1}></Button>
                <Button updateCalc={updateCalc} title={2}></Button>
                <Button updateCalc={updateCalc} title={3}></Button>
                <Button updateCalc={updateCalc} title="+"></Button>
            </div>
            <div>
                <Button updateCalc={updateCalc} title={4}></Button>
                <Button updateCalc={updateCalc} title={5}></Button>
                <Button updateCalc={updateCalc} title={6}></Button>
                <Button updateCalc={updateCalc} title="*"></Button>
            </div>
            <div>
                <Button updateCalc={updateCalc} title={7}></Button>
                <Button updateCalc={updateCalc} title={8}></Button>
                <Button updateCalc={updateCalc} title={9}></Button>
                <Button updateCalc={updateCalc} title="-"></Button>
            </div>
            <div>
                <Button  updateCalc={updateCalc} title={0}></Button>
                <Button  updateCalc={updateCalc} title="."></Button>
                <EqualButton value={value} setNextValue={setNextValue} title="="></EqualButton>
                <Button updateCalc={updateCalc} title="/"></Button>
            </div>            
        </div>
    )
}

export default Buttons