var game;

function setup() {
  createCanvas(windowWidth, windowHeight);

  game = new AsteroidsGame();
}

function draw() {
  //game.keyPressed(RIGHT_ARROW, ' ');
  game.update();
  game.render();
}

function keyPressed() {
  game.keyPressed(key);
}

function keyReleased() {
  game.keyReleased();
}