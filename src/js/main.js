import Tetris from "./tetris";

const game = Tetris({
    board: document.querySelector('#game'),
});

game.boot();