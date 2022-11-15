"use strict";

const container = document.getElementById("container");
let gridSize = 32;

const btnGrid16 = document.getElementById("select-16");
const btnGrid32 = document.getElementById("select-32");
const btnGrid64 = document.getElementById("select-64");

// Reset grid and all changes
function resetGrid() {
	container.innerText = "";
	createGrid();
}

// Get current color choice
function getColor() {
	const colorChoice = "#4dabf7";
	return colorChoice;
}

// Change box color
function colorSwitch() {
	const colorChoice = getColor();
	if (!this.style.backgroundColor) {
		this.style.setProperty("background-color", colorChoice);
	}
}

// Create grid
function createGrid() {
	// Generate the rows
	for (let i = 1; i <= gridSize; i++) {
		const row = document.createElement("div");
		// Add boxes to each row
		for (let j = 1; j <= gridSize; j++) {
			const box = document.createElement("div");
			// Change grid resolution without changing size
			box.style.cssText = `width:${500 / gridSize / 16}rem; height:${
				500 / gridSize / 16
			}rem`;
			// Color each box with a given color when the mouse passes over
			box.addEventListener("mouseover", colorSwitch);
			row.appendChild(box);
		}
		container.appendChild(row);
	}
}

createGrid();

btnGrid16.addEventListener("click", (e) => {
	gridSize = 16;
	resetGrid();
});
btnGrid32.addEventListener("click", (e) => {
	gridSize = 32;
	resetGrid();
});
btnGrid64.addEventListener("click", (e) => {
	gridSize = 64;
	resetGrid();
});
