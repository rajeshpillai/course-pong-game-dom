function Player(game) {
    Paddle.call(this, game);
    this.game = game;

    this.x = 20;
    this.name = "player";


    let player = document.createElement("div");
    player.style.position = "absolute";
    player.style.width = this.width + 'px';
    player.style.height = this.height + 'px';

    player.style.left = this.x + 'px';
    player.style.top = this.y + 'px';

    player.setAttribute("id", "player");

    this.player = player;

    game.canvas.append(player);

}

Player.prototype = Object.create(Paddle.prototype);
Player.prototype.constructor = Player;