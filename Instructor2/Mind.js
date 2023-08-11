const rows = 10;
const cols = 10;
const totalMines = 15; // Total number of mines

const container = document.querySelector('.game-container');
const cells = [];
const revealedCells = new Set();
let mineLocations = [];

function initializeGrid() {
    for (let i = 0; i < rows; i++) {
        cells[i] = [];
        for (let j = 0; j < cols; j++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.dataset.row = i;
            cell.dataset.col = j;
            cell.addEventListener('click', cellClickHandler);
            container.appendChild(cell);
            cells[i][j] = cell;
        }
    }
    placeMines();
}

function placeMines() {
    const allCells = Array.from({ length: rows * cols }, (_, index) => index);
    mineLocations = shuffle(allCells).slice(0, totalMines);
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function cellClickHandler(event) {
    const row = Number(event.target.dataset.row);
    const col = Number(event.target.dataset.col);
    if (mineLocations.includes(row * cols + col)) {
        revealAllMines();
        alert('Game Over! You hit a mine.');
    } else {
        revealCell(row, col);
        if (revealedCells.size + totalMines === rows * cols) {
            alert('Congratulations! You win!');
        }
    }
}

function revealCell(row, col) {
    if (row < 0 || row >= rows || col < 0 || col >= cols || revealedCells.has(row * cols + col)) {
        return;
    }
    revealedCells.add(row * cols + col);
    const count = countAdjacentMines(row, col);
    cells[row][col].textContent = count > 0 ? count : '';
    if (count === 0) {
        for (let dr = -1; dr <= 1; dr++) {
            for (let dc = -1; dc <= 1; dc++) {
                revealCell(row + dr, col + dc);
            }
        }
    }
}

function countAdjacentMines(row, col) {
    let count = 0;
    for (let dr = -1; dr <= 1; dr++) {
        for (let dc = -1; dc <= 1; dc++) {
            const newRow = row + dr;
            const newCol = col + dc;
            if (newRow >= 0 && newRow < rows && newCol >= 0 && newCol < cols) {
                if (mineLocations.includes(newRow * cols + newCol)) {
                    count++;
                }
            }
        }
    }
    return count;
}

function revealAllMines() {
    mineLocations.forEach((mineLocation) => {
        const row = Math.floor(mineLocation / cols);
        const col = mineLocation % cols;
        cells[row][col].classList.add('mine');
    });
}

initializeGrid();
