import React, { useEffect, useState } from "react";
import "./styles.css";
import Button from "./components/Button";
import Input from "./components/Input";
import EqualButton from "./components/EqualButton";
import * as math from "mathjs";

const operatorsArr = ["*", "/", "+", ".", "-"];
const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
const keysArr = [...operatorsArr, ...numArr];

export default function App() {
  const [input, setInput] = useState("");

  useEffect(() => {
    const handleKeyDown = (e) => {
      // console.log(e.key)
      if (operatorsArr.includes(input[input.length - 1]) && !numArr.includes(parseInt(e.key))) {
        return input;
      } 
      else if (keysArr.includes(e.key) || keysArr.includes(parseInt(e.key))) {
        setInput((prevInput) => prevInput + e.key);
      }
      else if (e.key === "=" || e.key === "Enter") {
        evaluate()
      }
      else if (e.key === "c") {
        setInput('')
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [input]);

  function inputNum(val) {
    setInput(input + val);
  }

  function inputOperator(val) {
    if (
      input === "" ||
      (operatorsArr.includes(input[input.length - 1]) &&
        operatorsArr.includes(val))
    ) {
      return;
    } else {
      setInput(input + val);
    }
  }

  function evaluate() {
    if (input === "" || operatorsArr.includes(input[input.length - 1])) {
      return input;
    } else {
      setInput(math.evaluate(input));
    }
  }

  return (
    <div className="App">
      <h1>ReactJS Calculator</h1>
      <div className="calc-wrapper">
        <Input input={input}></Input>
        <div className="row">
          <Button onClick={inputNum}>7</Button>
          <Button onClick={inputNum}>8</Button>
          <Button onClick={inputNum}>9</Button>
          <Button onClick={inputOperator}>/</Button>
        </div>
        <div className="row">
          <Button onClick={inputNum}>4</Button>
          <Button onClick={inputNum}>5</Button>
          <Button onClick={inputNum}>6</Button>
          <Button onClick={inputOperator}>*</Button>
        </div>
        <div className="row">
          <Button onClick={inputNum}>1</Button>
          <Button onClick={inputNum}>2</Button>
          <Button onClick={inputNum}>3</Button>
          <Button onClick={inputOperator}>+</Button>
        </div>
        <div className="row">
          <Button onClick={inputNum}>.</Button>
          <Button onClick={inputNum}>0</Button>
          <Button onClick={() => setInput("")}>C</Button>
          <Button onClick={inputOperator}>-</Button>
        </div>
        <div className="row">
          <EqualButton onClick={evaluate}>=</EqualButton>
        </div>
      </div>
    </div>
  );
}
