function Paddle() {
    Entity.call(this);

    this.width = 20;
    this.height = 100;
    this.score = 0;
    this.speed = 10;

    this.y = game.height / 2 - this.height; // center vertically
}