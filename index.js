const width = window.innerWidth;
const height = window.innerHeight;
const CRYSTAL_SIZE = 100;
const PADDING = CRYSTAL_SIZE * 0.2;
const GRIDBOX = CRYSTAL_SIZE + PADDING;
const MARGIN = CRYSTAL_SIZE / 2;
const SIDES = 6;
const START = (CRYSTAL_SIZE / 2) + MARGIN
const COLUMNS = width / GRIDBOX;
const ROWS = height / GRIDBOX;
let PALETTE = []
let ALL_CRYSTALS = []

function setup() {
    const totalX = MARGIN + GRIDBOX * COLUMNS;
    const totalY = MARGIN + GRIDBOX * ROWS;
    createCanvas(totalX, totalY);
    PALETTE = [
    color(255, 52, 154), 
    color(4, 0, 152),];
    noLoop();
    angleMode(DEGREES);
    rectMode(CENTER);
}

function draw() {
    for (let x = 0; x < COLUMNS; x++) {
        for (let y = 0; y < ROWS; y++) {
            const posX = START + x * GRIDBOX;
            const posY = START + y * GRIDBOX;
            const crystal = new Crystal(posX, posY);
            ALL_CRYSTALS.push(crystal);
        }
    }

    ALL_CRYSTALS.forEach(crystal => {
        crystal.render();
    })
}
