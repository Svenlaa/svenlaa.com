export const inputBoard = {
    size: {
        x: 8,
        y: 8,
    },
    cells: [
        { initialValue: null, block: 0 },
        { initialValue: null, block: 0 },
        { initialValue: null, block: 0 },
        { initialValue: null, block: 0 },
        { initialValue: null, block: 1 },
        { initialValue: null, block: 1 },
        { initialValue: null, block: 1 },
        { initialValue: 4, block: 1 },

        { initialValue: null, block: 2 },
        { initialValue: 5, block: 2 },
        { initialValue: null, block: 2 },
        { initialValue: null, block: 2 },
        { initialValue: null, block: 3 },
        { initialValue: null, block: 1 },
        { initialValue: null, block: 4 },
        { initialValue: null, block: 4 },

        { initialValue: null, block: 5 },
        { initialValue: null, block: 5 },
        { initialValue: null, block: 2 },
        { initialValue: null, block: 6 },
        { initialValue: null, block: 3 },
        { initialValue: null, block: 3 },
        { initialValue: null, block: 7 },
        { initialValue: null, block: 7 },

        { initialValue: 3, block: 5 },
        { initialValue: null, block: 6 },
        { initialValue: null, block: 6 },
        { initialValue: null, block: 6 },
        { initialValue: null, block: 6 },
        { initialValue: null, block: 8 },
        { initialValue: null, block: 7 },
        { initialValue: null, block: 7 },

        { initialValue: null, block: 5 },
        { initialValue: null, block: 9 },
        { initialValue: null, block: 9 },
        { initialValue: null, block: 9 },
        { initialValue: null, block: 8 },
        { initialValue: null, block: 8 },
        { initialValue: null, block: 10 },
        { initialValue: 4, block: 7 },

        { initialValue: null, block: 11 },
        { initialValue: null, block: 9 },
        { initialValue: null, block: 9 },
        { initialValue: null, block: 12 },
        { initialValue: null, block: 8 },
        { initialValue: null, block: 8 },
        { initialValue: null, block: 10 },
        { initialValue: null, block: 10 },

        { initialValue: null, block: 11 },
        { initialValue: null, block: 11 },
        { initialValue: null, block: 11 },
        { initialValue: null, block: 13 },
        { initialValue: null, block: 13 },
        { initialValue: null, block: 13 },
        { initialValue: null, block: 10 },
        { initialValue: 5, block: 10 },

        { initialValue: 5, block: 11 },
        { initialValue: null, block: 14 },
        { initialValue: null, block: 14 },
        { initialValue: 4, block: 13 },
        { initialValue: null, block: 13 },
        { initialValue: null, block: 15 },
        { initialValue: null, block: 15 },
        { initialValue: null, block: 15 },
    ],
};

export const drawBoard = (cells, size) => {
    const board = document.getElementById('board');
    board.innerHTML = '';

    const colors = [
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
    const cellIndex = board.cells.findIndex(c => c.id === cell.id);
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
