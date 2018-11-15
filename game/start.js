var canvas = document.getElementById("game"),
    game = new Game(canvas);

// TODO: Complete the start and game function

game.entities = [
    game.player = new Player(game)
];

game.start(); // Start will trigger game loop
canvas.focus();