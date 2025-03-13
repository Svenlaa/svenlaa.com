import { inputBoard, drawBoard, recalculateBoard, updateCell } from './board.js';

if (inputBoard.cells.length !== inputBoard.size.x * inputBoard.size.y) {
    throw new Error('Invalid board size');
}

drawBoard(inputBoard.cells, inputBoard.size);

let currentBoard = recalculateBoard(inputBoard);

console.log(structuredClone(currentBoard));

const blocksWithOneEmptyCell = currentBoard.blocks.filter((block) => block.emptyCellCount === 1);

blocksWithOneEmptyCell.forEach((block) => {
    const emptyCell = block.cells.find((cell) => cell.value === null);
    const filledCells = block.cells.filter((cell) => cell.value !== null);

    const targetLength = block.cellCount;
    const filledValues = filledCells.map((cell) => cell.value);
    const missingValue = Array.from({ length: targetLength }, (_, i) => i + 1).find(
        (num) => !filledValues.includes(num)
    );
    updateCell(emptyCell.id, missingValue, currentBoard);
});
