"use strict";

const container = document.getElementById("container");
let gridSize = 32;

// Get current color choice
function getColor() {
	const colorChoice = "#c92a2a";
	return colorChoice;
}

// Change box color
function colorSwitch() {
	const clrChoice = getColor();
	if (!this.style.backgroundColor) {
		this.style.setProperty("background-color", clrChoice);
	}
}

// Create grid
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
