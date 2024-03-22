import React from "react";
import "./Letter.scss";

const Letter = ({ i, handleClick }) => {
  return (
    <button className="letter" onClick={() => handleClick(i)}>
      {i}
    </button>
  );
};

export default Letter;
