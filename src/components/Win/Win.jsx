import React from "react";
import { useNavigate } from "react-router-dom";
import "./Win.scss";

const Win = ({ win, lastInput, word }) => {
  const navigate = useNavigate();
  return (
    <div className="win">
      <div className="win__wrapper">
        <h2 className="win__title">
          {win
            ? `You won with the word: ${lastInput}`
            : `The correct answer was: ${
                word.length > 5
                  ? word.split("").slice(-5, word.length).join("")
                  : word
              }`}
        </h2>
        <button className="win__btn" onClick={() => window.location.reload()}>
          Play again?
        </button>
      </div>
    </div>
  );
};

export default Win;
