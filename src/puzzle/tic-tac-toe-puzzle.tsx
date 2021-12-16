import React from "react";
import { Puzzle } from "../playground/types";
import { Circle } from "./circle";
import { Cross } from "./cross";

export const TicTacToePuzzle: React.FC<{
  symbol: Puzzle;
  onClickPuzzle: any;
}> = ({ symbol, onClickPuzzle }) => {
  switch (symbol) {
    case "circle":
      return <Circle />;
    case "cross":
      return <Cross />;
    default:
      return <button onClick={onClickPuzzle} />;
  }
};
