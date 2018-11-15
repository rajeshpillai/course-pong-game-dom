function Game(canvas) {
    this.canvas = canvas;
    this.width = canvas.offsetWidth;
    this.height = canvas.offsetHeight;
}

Game.prototype.start = function () {
    var self = this;

    (function loop() {
        window.requestAnimationFrame(loop);
        self.update();
        self.draw();
    }());

}

Game.prototype.update = function () {
    this.entities.forEach(function (entity) {
        if (entity.update) {
            entity.update();
        }
    })
}

Game.prototype.draw = function () {
    this.entities.forEach(function (entity) {
        if (entity.draw) {
            entity.draw();
        }
    })
}