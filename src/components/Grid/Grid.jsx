import React, { useEffect, useState } from "react";
import GridSquare from "../GridSquare/GridSquare";
import "./Grid.scss";

const Grid = ({ gridSquares, word, isMatch, count }) => {
  return (
    <div className="grid">
      {gridSquares?.map((content, i) => {
        return (
          <GridSquare
            key={i}
            content={content}
            word={word}
            isMatch={isMatch}
            index={i}
            count={count}
          />
        );
      })}
    </div>
  );
};

export default Grid;
