import { inputBoard, drawBoard, recalculateBoard, updateCell, getSurroundingCells } from './board.js';

if (inputBoard.cells.length !== inputBoard.size.x * inputBoard.size.y) {
    throw new Error('Invalid board size');
}

drawBoard(inputBoard.cells, inputBoard.size);

let currentBoard = recalculateBoard(inputBoard);

console.log(structuredClone(currentBoard));

const fillLastBlockCell = () => currentBoard.blocks.filter((block) => block.emptyCellCount === 1).forEach((block) => {
    const emptyCell = block.cells.find((cell) => cell.value === null);
    const filledCells = block.cells.filter((cell) => cell.value !== null);

    const targetLength = block.cellCount;
    const filledValues = filledCells.map((cell) => cell.value);
    const missingValue = Array.from({ length: targetLength }, (_, i) => i + 1).find(
        (num) => !filledValues.includes(num)
    );
    updateCell(emptyCell.id, missingValue, currentBoard);
});

const fillCellByAdjecency = () => {
    currentBoard.cells.filter(cell => cell.value === null).forEach(cell => {
        const block = currentBoard.blocks.find(b => b.block === cell.block);
        const filledValuesInBlock = block.cells.filter(c => c.value !== null).map(c => c.value);
        const missingValuesInBlock = Array.from({ length: block.cellCount }, (_, i) => i + 1).filter(
            (num) => !filledValuesInBlock.includes(num)
        );

        const surroundingCells = getSurroundingCells(cell, currentBoard);
        const surroundingBlocksIds = new Set(surroundingCells.map(c => c.block));

        const possibleValuesPerBlock = {};
        surroundingBlocksIds.forEach(b => {
            const blockCells = currentBoard.blocks.find(block => block.block === b).cells;
            possibleValuesPerBlock[b] = Array.from({ length: blockCells.length }, (_, i) => i + 1);
        });

        const completeBlocks = [...surroundingBlocksIds].filter(b => {
            const blockCells = currentBoard.blocks.find(block => block.block === b).cells;
            return blockCells.filter(c => c.value === null).every(c => surroundingCells.includes(c));
        });

        let surroundingValues = surroundingCells.map(c => c.value).filter(v => v !== null);

        const blocksSurroundingValues = completeBlocks.flatMap(b => {
            const blockCells = currentBoard.blocks.find(block => block.block === b).cells;
            const allPossibleValuesInBlock =  Array.from({ length: blockCells.length }, (_, i) => i + 1);
            const valuesInBlock = blockCells.map(c => c.value).filter(v => v !== null);
            return allPossibleValuesInBlock.filter(v => !valuesInBlock.includes(v));
        });
        surroundingValues = surroundingValues.concat(blocksSurroundingValues);

        const possibleValues = missingValuesInBlock.filter(v => !surroundingValues.includes(v));

        if (possibleValues.length === 1)
            updateCell(cell.id, possibleValues[0], currentBoard);
    }
)};

const checkMissingCellsByBlock = () => {
    currentBoard.blocks.forEach(block => {
        const filledValues = block.cells.filter(c => c.value !== null).map(c => c.value);
        const missingValues = Array.from({ length: block.cellCount }, (_, i) => i + 1).filter(
            (num) => !filledValues.includes(num)
        );
        const emptyCells = block.cells.filter(c => c.value === null).map(c => {
            const surroundingCells = getSurroundingCells(c, currentBoard);
            const surroundingValues = surroundingCells.map(sc => sc.value).filter(v => v !== null);
            const possibleValues = missingValues.filter(v => !surroundingValues.includes(v));
            return {
                cell: c,
                possibleValues: possibleValues
            };
        });

        missingValues.forEach(mv => {
            const fittingCells = emptyCells.filter(ec => ec.possibleValues.includes(mv));
            if (fittingCells.length === 1) {
                updateCell(fittingCells[0].cell.id, mv, currentBoard);
            }
        });
    });
};

[...Array(10)].forEach(() => {
    fillCellByAdjecency();
    fillLastBlockCell();
    checkMissingCellsByBlock();
});