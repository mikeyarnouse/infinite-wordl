import React, { useState } from "react";
import Letter from "../Letter/Letter";
import "./Keyboard.scss";
import Backspace from "../Letter/Backspace";

const Keyboard = ({
  inputArray,
  setInputArray,
  gridRowInput,
  setGridRowInput,
  count,
  setCount,
  finalArray,
  setFinalArray,
}) => {
  const handleClick = (letter) => {
    // console.log(letter);
    if (inputArray.length < 30) {
      setInputArray([...inputArray, letter]);
    }
    // console.log(inputArray);
    setGridRowInput(gridRowInput + letter);
  };

  const handleDelete = () => {
    setInputArray(inputArray.slice(0, inputArray.length - 1));
    setCount(count - 2);
    setGridRowInput(gridRowInput.slice(0, gridRowInput.length - 1));
  };

  const handleEnter = () => {
    console.log([...inputArray.slice(-5, inputArray.length)]);
    setFinalArray([...finalArray, ...inputArray.slice(-5, inputArray.length)]);
  };

  return (
    <div className="keyboard">
      <div className="keyboard__row">
        <Letter i="Q" handleClick={handleClick} />
        <Letter i="W" handleClick={handleClick} />
        <Letter i="E" handleClick={handleClick} />
        <Letter i="R" handleClick={handleClick} />
        <Letter i="T" handleClick={handleClick} />
        <Letter i="Y" handleClick={handleClick} />
        <Letter i="U" handleClick={handleClick} />
        <Letter i="I" handleClick={handleClick} />
        <Letter i="O" handleClick={handleClick} />
        <Letter i="P" handleClick={handleClick} />
      </div>

      <div className="keyboard__row">
        <Letter i="A" handleClick={handleClick} />
        <Letter i="S" handleClick={handleClick} />
        <Letter i="D" handleClick={handleClick} />
        <Letter i="F" handleClick={handleClick} />
        <Letter i="G" handleClick={handleClick} />
        <Letter i="H" handleClick={handleClick} />
        <Letter i="J" handleClick={handleClick} />
        <Letter i="K" handleClick={handleClick} />
        <Letter i="L" handleClick={handleClick} />
        {/* <Backspace i="Enter" handleClick={handleEnter} /> */}
      </div>

      <div className="keyboard__row">
        <Letter i="Z" handleClick={handleClick} />
        <Letter i="X" handleClick={handleClick} />
        <Letter i="C" handleClick={handleClick} />
        <Letter i="V" handleClick={handleClick} />
        <Letter i="B" handleClick={handleClick} />
        <Letter i="N" handleClick={handleClick} />
        <Letter i="M" handleClick={handleClick} />
        {/* <Backspace i="Delete" handleClick={handleDelete} /> */}
      </div>

      <div className="keyboard__row">
        <Backspace i="Delete" handleClick={handleDelete} />
        <Backspace i="Enter" handleClick={handleEnter} />
      </div>
    </div>
  );
};

export default Keyboard;
