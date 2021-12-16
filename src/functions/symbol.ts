import { MatchMap, Puzzle } from "../playground/types";

export const getRowKey = (rowNumber: number) => `row${rowNumber}`
export const getSymbol = (matchMap: MatchMap, row: number, column: number) => {
  const rowKey = getRowKey(row);
  const rowPuzzles = matchMap[rowKey]
  return rowPuzzles[column];
};
export const getNewRowPuzzles = (
  matchMap: MatchMap,
  row: number,
  column: number,
  symbol: Puzzle
) => {
  const rowKey = getRowKey(row);
  let rowPuzzles = matchMap[rowKey]
  rowPuzzles[column] = symbol;
  return rowPuzzles;
};
