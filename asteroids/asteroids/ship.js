function Ship(x, y){

    this.particle = new Particle();
    this.particle.pos.x = x || 0.0;
    this.particle.pos.y = y || 0.0;
    this.theta = PI/2;
    this.omega = 0.0;
    this.r = 20;

    // Dynamics constants
    this.thrustForce = 0.2;
    this.rotationalTorque = 0.01;
    this.rotationalDamp = 0.8;
    this.velocityDamp = 0.95;

    this.render = function(){
        push();
        translate(this.particle.pos.x, this.particle.pos.y);
        rotate(this.theta);
        stroke(255);
        fill(230);
        triangle(this.r, 0, -0.7*this.r, 0.7*this.r, -0.7*this.r, -0.7*this.r);
        // Draw collision limits
        // noFill();
        // ellipse(0, 0, 2*this.r);
        pop();
    }

    this.update = function() {
        this.particle.update();
        this.particle.vel.mult(this.velocityDamp);
        this.particle.edges();
        this.theta += this.omega;
        this.omega *= this.rotationalDamp;
    }

    this.turn = function(factor) {
        this.omega += this.rotationalTorque * factor;
    }

    this.thrust = function(factor) {
        var thrustVector = p5.Vector.fromAngle(this.theta);
        thrustVector.setMag(this.thrustForce * factor);
        this.particle.applyForce(thrustVector);
    }

    this.hit = function(asteroid) {
        // TODO:
        // Improve collision detection of ship.
        var r = p5.Vector.sub(this.particle.pos, asteroid.particle.pos);
        return r.mag() < this.r + asteroid.r;
    }
}