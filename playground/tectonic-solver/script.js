import { inputBoard, drawBoard, recalculateBoard } from './board.js';

if (inputBoard.cells.length !== inputBoard.size.x * inputBoard.size.y) {
    throw new Error('Invalid board size');
}

drawBoard(inputBoard.cells, inputBoard.size);

let currentBoard = recalculateBoard(inputBoard);

console.log({ currentBoard });

const blocksWithOneEmptyCell = currentBoard.blocks.filter((block) => block.emptyCellCount === 1);

blocksWithOneEmptyCell.forEach((block) => {
    const emptyCell = block.cells.find((cell) => cell.value === null);
    const filledCells = block.cells.filter((cell) => cell.value !== null);

    const targetLength = block.cellCount;
    // find out the missing number
    const filledValues = filledCells.map((cell) => cell.value);
    const missingValue = Array.from({ length: targetLength }, (_, i) => i + 1).find(
        (num) => !filledValues.includes(num)
    );
    currentBoard.cells[emptyCell.id].value = missingValue;
});
drawBoard(currentBoard.cells, currentBoard.size);
currentBoard = recalculateBoard(currentBoard);
