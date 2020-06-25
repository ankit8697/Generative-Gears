const width = window.innerWidth;
const height = window.innerHeight;
const CRYSTAL_SIZE = 100;
const PADDING = CRYSTAL_SIZE * 0.2;
const GRIDBOX = CRYSTAL_SIZE + PADDING;
const MARGIN = CRYSTAL_SIZE / 2;
const START = (CRYSTAL_SIZE / 2) + MARGIN
const COLUMNS = width / GRIDBOX;
const ROWS = height / GRIDBOX;
let PALETTE = [];
let ALL_CRYSTALS = [];
let angle = 0;

function setup() {
    const totalX = MARGIN + GRIDBOX * COLUMNS;
    const totalY = MARGIN + GRIDBOX * ROWS;
    createCanvas(totalX, totalY);

    PALETTE = [
        color("#17BEBB"),
        color("#2E282A"),
        color("#FF6978"),
    //   color(255, 52, 154), // pink
    //   color(4, 0, 152), // blue
    ];
    for (let x = 0; x < COLUMNS; x++) {
      for (let y = 0; y < ROWS; y++) {
        const posX = START + x * GRIDBOX;
        const posY = START + y * GRIDBOX;
        const crystal = new Crystal(posX, posY);
        ALL_CRYSTALS.push(crystal);
      }
    }
    // noLoop();
    angleMode(DEGREES);
    rectMode(CENTER);
}

function draw() {

    ALL_CRYSTALS.forEach(crystal => {
        crystal.render(angle);
    })
    angle += 1;
}
