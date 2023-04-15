import { useEffect, useState } from "react";
import Button from "./components/Button";
import Buttons from "./components/Buttons";
import Calculator from "./components/Calculator";
import Input from "./components/Input";

const App = () => {

  interface UpdateCalc {
    title: string;
  }

  const ops: any[] = ['+', '/', '*', '-'];
  const [value, setValue] = useState<string>('');
  const [nextValue, setNextValue] = useState<string>('');

  const updateCalc: Function = (title: string) => {
    if (
      ops.includes(title) && value === '' ||
      ops.includes(title) && ops.includes(value.slice(-1))
      ) {
      return;
    }
    return setValue(value + title)
  }

  const deleteLast = () => {
    if (value === '') {
      return
    }
    const calc = value.slice(0,-1)
    setValue(calc)
  }

  // useEffect(()=>{
  //   const a = 5
  //   console.log(value)
  //   if (typeof(a) === 'number') console.log("YES")
  //   console.log(typeof(a))
  // },[value])

  return (
    <Calculator width="100%" height="80vh">
      <div className="flex flex-col">
        <Input value={value}></Input>
        <Input value={nextValue}></Input>
      </div>
      <Buttons value={value} updateCalc={updateCalc} setNextValue={setNextValue} setValue={setValue} deleteLast={deleteLast}></Buttons>
    </Calculator>
  )
}

export default App;
