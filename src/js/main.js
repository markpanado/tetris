import Tetris from "./tetris";

const tetris = Tetris({
    stage: document.querySelector('#tetris'),
});

tetris.logging(true);

tetris.boot();