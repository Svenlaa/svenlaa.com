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

            cellDiv.textContent = value;
            row.appendChild(cellDiv);
        }

        board.appendChild(row);
    }
};

export const recalculateBoard = (currentBoard) => {
    const blocks = Object.values(
        currentBoard.cells.reduce((acc, cell, i) => {
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

    currentBoard.blocks = blocks;
    return currentBoard;
};
