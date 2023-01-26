import { blockColArr, blockRowArr } from "./BlockArr";
import Block from "./Block";
import { Orientation, SquareValue } from "../types";

class Square {
  value: number;
  row: number;
  col: number;
  rowBlock: blockRowArr;
  colBlock: blockColArr;
  myBlocks: Block[];
  constructor(
    row: number,
    col: number,
    rowBlock: blockRowArr,
    colBlock: blockColArr
  ) {
    this.row = row;
    this.col = col;
    this.rowBlock = rowBlock;
    this.colBlock = colBlock;
    this.value = 0;
    this.myBlocks = [];
  }

  myOrientedBlocks(orient: Orientation) {
    return this.myBlocks.filter((block) => block.orient === orient);
  }
  IsLoyalSquare(orient: Orientation) {
    return this.myOrientedBlocks(orient).length === 1;
  }
  color(value: SquareValue) {
    this.value = value;
  }
  black() {
    this.value = SquareValue.black;
  }
  white() {
    this.value = SquareValue.white;
  }
  X() {
    this.value = SquareValue.X;
  }
}
export default Square;
