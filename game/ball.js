function Ball(game) {

    Entity.call(this, game);
    this.game = game;

    this.width = 20;
    this.height = 20;
    this.name = "ball";

    let player = document.createElement("div");
    player.style.position = "absolute";
    player.style.width = this.width + 'px';
    player.style.height = this.height + 'px';

    player.style.left = this.x + 'px';
    player.style.top = this.y + 'px';

    player.setAttribute("id", "ball");

    this.player = player;

    game.canvas.append(player);
}

Ball.prototype = Object.create(Entity.prototype);
Ball.prototype.constructor = Ball;

Ball.prototype.draw = function () {
    let ball = this.player;
    ball.style.left = this.x + 'px';
    ball.style.top = this.y + 'px';

}