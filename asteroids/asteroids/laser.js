function Laser(x, y, theta) {

    this.particle = new Particle();
    this.particle.pos.x = x;
    this.particle.pos.y = y;
    this.particle.vel = p5.Vector.fromAngle(theta);
    this.particle.vel.setMag(10.0);

    this.update = function() {
        this.particle.update();
    }

    this.render = function() {
        push();
        stroke('yellow');
        strokeWeight(6);
        this.particle.render();
        pop();
    }

    this.hit = function(asteroid) {
        // TODO:
        // Improve collision detection of laser.
        var r = p5.Vector.sub(this.particle.pos, asteroid.particle.pos);
        return r.mag() < asteroid.r;
    }
}