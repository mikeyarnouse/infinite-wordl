import React, { useEffect, useState } from "react";
import Grid from "../Grid/Grid";
import Keyboard from "../Keyboard/Keyboard";
import axios from "axios";
import Win from "../Win/Win";
import "./Main.scss";

const Main = () => {
  const [word, setWord] = useState("");
  const [gridSquares, setGridSquares] = useState(Array(30).fill(""));
  const [inputArray, setInputArray] = useState([]);
  const [gridRowInput, setGridRowInput] = useState("");
  const [lastRowInput, setLastRowInput] = useState("");
  const [count, setCount] = useState(0);
  const [finalArray, setFinalArray] = useState([]);
  const [win, setWin] = useState(false);

  const isMatch = (inputLetter, wordLetter, wordArr) => {
    if (inputLetter === wordLetter) {
      return "match";
    } else if (wordArr.includes(inputLetter)) {
      return "included";
    } else {
      return "no match";
    }
  };

  const wordlLogic = (input, word) => {
    if (word.length === 5) {
      if (input === word) {
        // alert(`You won with ${lastRowInput}`);
        setWin(true);
      } else {
        let inputArr = input.split("");
        let wordArr = word.split("");

        let result = [];
        for (let i = 0; i < inputArr.length; i++) {
          result.push(isMatch(inputArr[i], wordArr[i], wordArr));
        }
        return result;
      }
    } else {
      let newWord = word.split("").slice(-5, word.length).join("");
      if (input === newWord) {
        // alert(`You won with ${lastRowInput}`);
        setWin(true);
      } else {
        let inputArr = input.split("");
        let newWordArr = newWord.split("");

        let result = [];
        for (let i = 0; i < inputArr.length; i++) {
          result.push(isMatch(inputArr[i], newWordArr[i], newWordArr));
        }
        return result;
      }
    }
  };

  const increment = () => {
    setCount(count + 1);
  };

  async function getWords() {
    try {
      const res = await axios.get(
        "https://random-word-api.vercel.app/api?words=1&length=5"
      );
      // console.log(res.data[0]);
      setWord(res.data[0].toUpperCase());
    } catch (e) {
      console.error(e);
    }
  }

  useEffect(() => {
    getWords();
  }, []);

  useEffect(() => {
    setGridSquares([
      ...inputArray,
      ...new Array(30 - inputArray.length).fill(null),
    ]);

    console.log(count);
    // console.log(inputArray);
    console.log(word);
    increment();
    if (count === 5) {
      setLastRowInput(gridRowInput);
      setGridRowInput("");
      setCount(0);
      // console.log(finalArray);
    }

    if (lastRowInput) {
      console.log(wordlLogic(lastRowInput, word));
      // console.log(inputArray);
      setWord(word.concat(word));
      setLastRowInput("");
    }
  }, [inputArray, gridRowInput, win]);

  // useEffect(() => {
  //   console.log(finalArray);
  //   setGridSquares([
  //     ...finalArray,
  //     ...new Array(30 - finalArray.length).fill(null),
  //   ]);
  //   // console.log(gridSquares);
  //   // setInputArray([]);
  // }, [finalArray]);

  const generateGrid = (grid) => {
    return (
      <>
        {win ? (
          <Win
            win={win}
            lastInput={inputArray.slice(-5, inputArray.length).join("")}
          />
        ) : (
          ""
        )}
        {inputArray.length === 30 && !win ? <Win win={win} word={word} /> : ""}
        <Grid gridSquares={grid} word={word} isMatch={isMatch} count={count} />
        <Keyboard
          inputArray={inputArray}
          setInputArray={setInputArray}
          gridRowInput={gridRowInput}
          setGridRowInput={setGridRowInput}
          count={count}
          setCount={setCount}
          finalArray={finalArray}
          setFinalArray={setFinalArray}
        />
      </>
    );
  };

  return <main>{generateGrid(gridSquares)}</main>;
};

export default Main;
