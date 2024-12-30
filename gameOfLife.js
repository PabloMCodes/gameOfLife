// Define grid dimensions
const rows = 10; // Number of rows
const cols = 10; // Number of columns

// Get the grid container from the HTML
const grid = document.getElementById('grid');

// Function to create the grid with random alive/dead cells
function createGrid() {
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            const cell = document.createElement('div'); // Create a new div for each cell
            cell.classList.add('cell'); // Add the 'cell' class
            
            if (Math.random() > 0.5) { 
                cell.classList.add('alive');
            }
            
            grid.appendChild(cell);
        }
    }
}

createGrid();
