import { MatchMap, Puzzle } from "../playground/types";

const getColumnPuzzles = (rowsPuzzles: Puzzle[][]) => {
  return rowsPuzzles[0].map((row1ColumnPuzzle, columnIndex) => [
    row1ColumnPuzzle,
    rowsPuzzles[1][columnIndex],
    rowsPuzzles[2][columnIndex],
  ]);
};
const getDiagonalPuzzles = (rowsPuzzles: Puzzle[][]) => {
  return [
    [rowsPuzzles[0][0], rowsPuzzles[1][1], rowsPuzzles[2][2]],
    [rowsPuzzles[0][2], rowsPuzzles[1][1], rowsPuzzles[2][0]],
  ];
};

const isSymbolThreeInARow = (consecutivePuzzles: Puzzle[][]) => {
  return consecutivePuzzles.some(
    (puzzles) =>
      puzzles.every((puzzle) => puzzle === "circle") ||
      puzzles.every((puzzle) => puzzle === "cross")
  );
};
export const checkAnyoneHasWon = (matchMap: MatchMap) => {
  let rowsPuzzles = [];
  for (const rowKey in matchMap) {
    rowsPuzzles.push(matchMap[rowKey])
  }
  const columnsPuzzles = getColumnPuzzles(rowsPuzzles);
  const diagonalPuzzles = getDiagonalPuzzles(rowsPuzzles);
  return isSymbolThreeInARow([
    ...rowsPuzzles,
    ...columnsPuzzles,
    ...diagonalPuzzles,
  ]);
};
