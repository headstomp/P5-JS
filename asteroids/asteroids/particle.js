function Particle(x, y) {

    this.pos = createVector();
    this.pos.x = x || 0.0;
    this.pos.y = y || 0.0;
    this.vel = createVector();
    this.acc = createVector();

    this.update = function(){
        this.vel.add(this.acc);
        this.pos.add(this.vel);

        this.acc.mult(0.0);
    }

    this.applyForce = function(f) {
        this.acc.add(f);
    }

    this.render = function(){
        point(this.pos.x, this.pos.y);
    }

    this.edges = function(){
        if(this.pos.x > width) this.pos.x = 0;
        if(this.pos.x < 0) this.pos.x = width;
        if(this.pos.y > height) this.pos.y = 0;
        if(this.pos.y < 0) this.pos.y = height;
    }
}