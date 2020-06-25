function hexagon(posX, posY, radius) {
  rotAngle = 360 / 6;
  beginShape();
  for (let i = 0; i < 6; i++) {
    const thisVertex = pointOnCircle(posX, posY, radius, i * rotAngle);
    vertex(thisVertex.x, thisVertex.y);
  }
  endShape(CLOSE);
}

function pointOnCircle(posX, posY, radius, angle) {
  const x = posX + radius * cos(angle);
  const y = posY + radius * sin(angle);
  return createVector(x, y);
}

function getRandomFromPalette() {
  return PALETTE[floor(random(0, PALETTE.length))];
}

function randomSelectTwo() {
  const rando = random(1);
  if (rando > 0.5) {
    return true;
  } else {
    return false;
  }
}

function testLines() {
  strokeWeight(3);
  let numShapes = randomSelectTwo() ? SIDES : SIDES * 2;

  const strokeColor = getRandomFromPalette();
  noFill();
  push();
  translate(width / 2, height / 2);
  stroke(PALETTE[0]);
  ellipse(0, 0, CRYSTAL_SIZE, CRYSTAL_SIZE);
  stroke(strokeColor);
  const angle = 360 / numShapes;
  for (let i = 0; i < numShapes; i++) {
    line(0, 0, 0, CRYSTAL_SIZE / 2);
    rotate(angle);
  }
  pop();
}

function myTriangle(center, radius, direction) {
  if (direction) {
    beginShape();
    vertex(center + radius * cos(0), radius * sin(0));
    vertex(center + radius * cos(120), radius * sin(120));
    vertex(center + radius * cos(240), radius * sin(240));
    endShape(CLOSE);
  } else {
    beginShape();
    vertex(center + radius * cos(180), radius * sin(180));
    vertex(center + radius * cos(300), radius * sin(300));
    vertex(center + radius * cos(60), radius * sin(60));
    endShape(CLOSE);
  }
}

function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

const layerConstructors = [
  {
    name: "Outline Shape",
    init: () => new OutlineShape(),
    weight: 0.3,
  },
  {
    name: "Centered Shape",
    init: () => new CenteredShape(),
    weight: 0.3,
  },
  {
    name: "Circles",
    init: () => new Circles(),
    weight: 0.3,
  },
  {
    name: "Simple Lines",
    init: () => new SimpleLines(),
    weight: 0.3,
  },
  {
    name: "Dotted Lines",
    init: () => new DottedLines(),
    weight: 0.3,
  },
  {
    name: "Ring of Shapes",
    init: () => new RingOfShapes(),
    weight: 0.3,
  },
  {
    name: "Stepped Hexagons",
    init: () => new SteppedHexagons(),
    weight: 0.9,
  },
  {
    name: "Test Lines",
    init: () => new TestLines(),
    weight: 1,
  },
];