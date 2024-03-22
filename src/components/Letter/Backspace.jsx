import React from "react";
import "./Letter.scss";

const Backspace = ({ i, handleClick }) => {
  return (
    <button className="backspace" onClick={() => handleClick()}>
      {i}
    </button>
  );
};

export default Backspace;
