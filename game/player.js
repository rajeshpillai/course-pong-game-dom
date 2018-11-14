function Player(game) {
    Paddle.call(this);
    this.game = game;

    this.x = 20;
    this.name = "player";


    var player = document.createElement("div");

}

Player.prototype = Object.create(Paddle.prototype);
Player.prototype.constructor = Player;