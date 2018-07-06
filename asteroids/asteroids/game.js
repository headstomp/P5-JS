function AsteroidsGame() {

    this.level = 1;
    this.score = 0;

    this.gameLevel = new GameLevel(this.level);

    this.update = function() {

        if (!this.gameLevel.gameOver && !this.gameLevel.levelCleared) {
            this.gameLevel.update();
        }

        if (this.gameLevel.levelCleared) {
            this.score += this.gameLevel.score;
            this.level++;
            this.gameLevel = new GameLevel(this.level);
            this.gameLevel.score = this.score;
        }
    }

    this.render = function() {
        this.gameLevel.render();
    }

    this.keyPressed = function(key) {
        this.gameLevel.keyPressed(key);

        if(this.gameLevel.gameOver && key == ' ') {
            this.level = 1;
            this.score = 0;
            this.gameLevel = new GameLevel(this.level);
        }
    }

    this.keyReleased = function() {
        this.gameLevel.keyReleased();
    }

}