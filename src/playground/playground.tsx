import { useState, useEffect } from "react";

import { checkAnyoneHasWon } from "../functions/hasWon";
import { getNewRowPuzzles, getRowKey, getSymbol } from "../functions/symbol";
import { changeTurn } from "../functions/turn";
import { TicTacToePuzzle } from "../puzzle/tic-tac-toe-puzzle";
import { Puzzle } from "./types";

const matchMap = {
  row0: [null, null, null],
  row1: [null, null, null],
  row2: [null, null, null],
};
export const Playground: React.FC = () => {
  const [turn, setTurn] = useState("circle");
  const [match, setMatch] = useState(matchMap);

  const onClickPuzzle = (row: number, column: number, symbol: Puzzle) => {
    const rowKey = getRowKey(row);
    setMatch((match) => ({
      ...match,
      [rowKey]: getNewRowPuzzles(match, row, column, symbol),
    }));
    setTurn(changeTurn(symbol));
  };

  useEffect(() => {
    if (checkAnyoneHasWon(match)) {
      alert(`${changeTurn(turn)} has won!`);
      setMatch({
        row0: [null, null, null],
        row1: [null, null, null],
        row2: [null, null, null],
      });
      setTurn("circle");
    }
  }, [match, turn]);

  return (
    <div>
      {[...Array(3)].map((row, rowIdx) => (
        <div style={{ display: "flex" }}>
          {[...Array(3)].map((column, columnIdx) => (
            <TicTacToePuzzle
              key={`symbol-${rowIdx}-${columnIdx}`}
              symbol={getSymbol(match, rowIdx, columnIdx)}
              onClickPuzzle={() => onClickPuzzle(rowIdx, columnIdx, turn)}
            />
          ))}
        </div>
      ))}
    </div>
  );
};
