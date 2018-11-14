function Paddle() {
    Entity.call(this);

    this.width = 20;
    this.height = 100;
    this.score = 0;
    this.speed = 10;

    //this.y = game.height / 2 - this.height; // center vertically
}

Paddle.prototype = Object.create(Entity.prototype);
Paddle.prototype.constructor = Paddle;

Paddle.prototype.update = function (game) {
    Entity.prototype.update.apply(this, arguments);

    // y will always stay below or equal to 0
    this.y = Math.min(Math.max(this.y, 0), game.height - this.height);
}