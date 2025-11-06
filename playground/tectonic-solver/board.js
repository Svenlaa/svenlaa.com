export const inputBoard = {
    size: {
        x: 11,
        y: 15,
    },
    cells: [
        { block: 0 },
        { block: 0 },
        { block: 1 },
        { block: 2 },
        { block: 2 },
        { block: 2, initialValue: 6 },
        { block: 2 },
        { block: 3 },
        { block: 4 },
        { block: 4 },
        { block: 4 },

        { block: 0, initialValue: 3 },
        { block: 7 },
        { block: 1 },
        { block: 2, initialValue: 5 },
        { block: 6 },
        { block: 2, initialValue: 3 },
        { block: 3 },
        { block: 3, initialValue: 4 },
        { block: 3, initialValue: 2 },
        { block: 5 },
        { block: 5 },

        { block: 0, initialValue: 2 },
        { block: 7 },
        { block: 7 },
        { block: 8 },
        { block: 8 },
        { block: 8 },
        { block: 9 },
        { block: 9 },
        { block: 3 },
        { block: 5 },
        { block: 5 },

        { block: 7, initialValue: 5 },
        { block: 7 },
        { block: 7 },
        { block: 14 },
        { block: 8 },
        { block: 8, initialValue: 4 },
        { block: 9 },
        { block: 9 },
        { block: 10 },
        { block: 10 },
        { block: 10 },

        { block: 13 },
        { block: 13 },
        { block: 13 },
        { block: 14, initialValue: 6 },
        { block: 28 },
        { block: 8 },
        { block: 37 },
        { block: 37 },
        { block: 12 },
        { block: 10 },
        { block: 11 },

        { block: 13 },
        { block: 13, initialValue: 5 },
        { block: 14 },
        { block: 14 },
        { block: 28 },
        { block: 28 },
        { block: 37 },
        { block: 37, initialValue: 6 },
        { block: 37 },
        { block: 10 },
        { block: 11 },

        { block: 13 },
        { block: 15 },
        { block: 14 },
        { block: 14 },
        { block: 29 },
        { block: 29 },
        { block: 29 },
        { block: 29 },
        { block: 37 },
        { block: 10, initialValue: 4 },
        { block: 36 },

        { block: 15 },
        { block: 15 },
        { block: 27 },
        { block: 27 },
        { block: 30 },
        { block: 29 },
        { block: 35 },
        { block: 35 },
        { block: 35 },
        { block: 36 },
        { block: 36, initialValue: 2 },

        { block: 15, initialValue: 5 },
        { block: 15 },
        { block: 26 },
        { block: 27 },
        { block: 30 },
        { block: 29 },
        { block: 35 },
        { block: 35 },
        { block: 34 },
        { block: 34 },
        { block: 34, initialValue: 6 },

        { block: 16 },
        { block: 15 },
        { block: 26 },
        { block: 26, initialValue: 4 },
        { block: 30 },
        { block: 30 },
        { block: 34, initialValue: 4 },
        { block: 34 },
        { block: 34 },
        { block: 32 },
        { block: 33 },

        { block: 16 },
        { block: 16, initialValue: 2 },
        { block: 26 },
        { block: 26 },
        { block: 30, initialValue: 5 },
        { block: 31 },
        { block: 31 },
        { block: 32 },
        { block: 32 },
        { block: 32, initialValue: 5 },
        { block: 22 },

        { block: 16, initialValue: 1 },
        { block: 16 },
        { block: 25 },
        { block: 25 },
        { block: 30 },
        { block: 31 },
        { block: 23 },
        { block: 32, initialValue: 3 },
        { block: 32 },
        { block: 22, initialValue: 2 },
        { block: 22, initialValue: 3 },

        { block: 16, initialValue: 6 },
        { block: 25 },
        { block: 25 },
        { block: 25, initialValue: 2 },
        { block: 24 },
        { block: 24 },
        { block: 23 },
        { block: 23 },
        { block: 22 },
        { block: 22 },
        { block: 22 },

        { block: 17 },
        { block: 17 },
        { block: 17, initialValue: 3 },
        { block: 18 },
        { block: 18, initialValue: 4 },
        { block: 24 },
        { block: 23, initialValue: 5 },
        { block: 23 },
        { block: 23 },
        { block: 20 },
        { block: 20, initialValue: 3 },

        { block: 17, initialValue: 4 },
        { block: 17, initialValue: 2 },
        { block: 18 },
        { block: 18 },
        { block: 18, initialValue: 5 },
        { block: 18 },
        { block: 19 },
        { block: 19 },
        { block: 20 },
        { block: 20, initialValue: 2 },
        { block: 21 },
    ],
};

export const drawBoard = (cells, size) => {
    const board = document.getElementById('board');
    board.innerHTML = '';

    const colors = [
        'hsl(223, 73%, 78%)',
        'hsl(253, 63%, 76%)',
        'hsl(187, 76%, 79%)',
        'hsl(173, 71%, 70%)',
        'hsl(3, 79%, 70%)',
        'hsl(59, 79%, 86%)',
        'hsl(313, 60%, 89%)',
        'hsl(129, 76%, 78%)',
        'hsl(290, 69%, 81%)',
        'hsl(225, 69%, 72%)',
        'hsl(274, 69%, 75%)',
        'hsl(253, 67%, 85%)',
        'hsl(40, 78%, 81%)',
        'hsl(27, 70%, 74%)',
        'hsl(342, 74%, 77%)',
        'hsl(223, 73%, 78%)',
        'hsl(253, 63%, 76%)',
        'hsl(187, 76%, 79%)',
        'hsl(173, 71%, 70%)',
        'hsl(3, 79%, 70%)',
        'hsl(59, 79%, 86%)',
        'hsl(313, 60%, 89%)',
        'hsl(129, 76%, 78%)',
        'hsl(290, 69%, 81%)',
        'hsl(225, 69%, 72%)',
        'hsl(274, 69%, 75%)',
        'hsl(253, 67%, 85%)',
        'hsl(40, 78%, 81%)',
        'hsl(27, 70%, 74%)',
        'hsl(342, 74%, 77%)',
        'hsl(223, 73%, 78%)',
        'hsl(265, 70%, 78%)',
        'hsl(253, 63%, 76%)',
        'hsl(187, 76%, 79%)',
        'hsl(173, 71%, 70%)',
        'hsl(3, 79%, 70%)',
        'hsl(59, 79%, 86%)',
        'hsl(313, 60%, 89%)',
        'hsl(129, 76%, 78%)',
        'hsl(290, 69%, 81%)',
        'hsl(225, 69%, 72%)',
        'hsl(274, 69%, 75%)',
        'hsl(253, 67%, 85%)',
        'hsl(40, 78%, 81%)',
        'hsl(27, 70%, 74%)',
        'hsl(342, 74%, 77%)',
    ];

    for (let y = 0; y < size.y; y++) {
        const row = document.createElement('div');
        row.className = 'row';

        for (let x = 0; x < size.x; x++) {
            const cellIndex = y * size.x + x;
            const cell = cells[cellIndex];
            const cellDiv = document.createElement('div');
            const value = cell.value ?? cell.initialValue ?? '';
            cellDiv.className = `cell ${cell.initialValue ? 'initial-value' : ''}`;
            cellDiv.style.backgroundColor = colors[cell.block];
            cellDiv.dataset.cellId = cellIndex;
            cellDiv.dataset.blockId = cell.block;

            cellDiv.textContent = value;
            row.appendChild(cellDiv);
        }

        board.appendChild(row);
    }
};

// let selectedCells = [];

// document.querySelector('#board').addEventListener('click', (event) => {
//     const cellDiv = event.target.closest('.cell');
//     if (!cellDiv) return;

//     if (selectedCells.includes(+cellDiv.dataset.cellId)) {
//         cellDiv.style.backgroundColor = '';
//         selectedCells = selectedCells.filter((id) => id !== +cellDiv.dataset.cellId);
//         return;
//     }

//     if (cellDiv.style.backgroundColor === 'gray') {
//         return;
//     }

//     cellDiv.style.backgroundColor = 'yellow';
//     selectedCells.push(+cellDiv.dataset.cellId);
// });

// const arrays = [];

// const cellToBlockMap = arrays
//     .flatMap((blockCells, blockIndex) => blockCells.map((cellId) => ({ cellId, blockIndex })))
//     .sort((a, b) => a.cellId - b.cellId)
//     .map((item) => ({ block: item.blockIndex }));
// const arr = JSON.stringify(cellToBlockMap);
// console.log(arr);

// document.querySelector('html').addEventListener('keydown', (event) => {
//     if (event.key === 'Backspace') {
//         arrays.push(selectedCells);
//         selectedCells.forEach((cellId) => {
//             const cellDiv = document.querySelector(`.cell[data-cell-id="${cellId}"]`);
//             if (cellDiv) {
//                 cellDiv.style.backgroundColor = 'gray';
//             }
//         });
//         selectedCells = [];
//     }
// });

export const recalculateBoard = (board) => {
    const blocks = Object.values(
        board.cells.reduce((acc, cell, i) => {
            const blockIndex = cell.block;
            if (!acc[blockIndex]) {
                acc[blockIndex] = {
                    block: blockIndex,
                    cells: [],
                    emptyCellCount: 0,
                    cellCount: 0,
                };
            }
            cell.value = cell.value ?? cell.initialValue ?? null;

            acc[blockIndex].cellCount++;
            cell.id = i;

            if (!cell.value) {
                acc[blockIndex].emptyCellCount = (acc[blockIndex].emptyCellCount ?? 0) + 1;
            }
            acc[blockIndex].cells.push(cell);
            return acc;
        }, {})
    );

    board.blocks = blocks;
    return board;
};

export const updateCell = (cell_id, value, board) => {
    if (board.cells[cell_id].initialValue) return console.error(`Cannot update initial value for cell ${cell_id}`);

    board.cells[cell_id].value = value;
    drawBoard(board.cells, board.size);
    recalculateBoard(board);
    return;
};

export const getSurroundingCells = (cell, board) => {
    const sizeX = board.size.x;
    const sizeY = board.size.y;
    const cellIndex = board.cells.findIndex((c) => c.id === cell.id);
    const x = cellIndex % sizeX;
    const y = Math.floor(cellIndex / sizeX);
    const surroundingCells = [];
    for (let dy = -1; dy <= 1; dy++) {
        for (let dx = -1; dx <= 1; dx++) {
            if (dx === 0 && dy === 0) continue;
            const newX = x + dx;
            const newY = y + dy;
            if (newX >= 0 && newX < sizeX && newY >= 0 && newY < sizeY) {
                const neighborIndex = newY * sizeX + newX;
                surroundingCells.push(board.cells[neighborIndex]);
            }
        }
    }
    return surroundingCells;
};
