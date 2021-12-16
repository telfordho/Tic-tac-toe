import { Puzzle } from "../playground/types";

export const changeTurn = (turn: Puzzle) =>
  turn === "circle" ? "cross" : "circle";
