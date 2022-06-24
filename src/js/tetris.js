export default function Tetris() {
    // config
    const _config = {
        app: 'Tetris',
        logging: true,
    };

    // vars
    const _vars = {
        
    };

    // private methods
    const _private = {
        init() {
            _private.drawStage();
        },

        // logging
        log() {
            if (_config.logging)
                console.log(`${_config.app}:\n\n\t`, ...arguments, `\n\n`);
        },

        // draw stage
        drawStage() {
            _private.log('Drawing stage');
        }
    };

    // public methods
    const _public = {

        // debug
        debug() {
            console.log(`Success! ${Math.random()}`);
        },

        // boot
        boot() {
            _private.log('Game started');
        },
    };

    return (() => {
        _private.init();

        return _public;
    })();

}