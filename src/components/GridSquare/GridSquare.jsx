import React from "react";
import "./GridSquare.scss";

const GridSquare = ({ content, isMatch, word, index, count }) => {
  return (
    <div
      className={`grid-square ${
        isMatch(content, word[index], word) === "match"
          ? "grid-square--match"
          : isMatch(content, word[index], word) === "included"
          ? "grid-square--included"
          : ""
      }`}
    >
      {content}
    </div>
  );
};

export default GridSquare;
