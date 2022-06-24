export default function Tetris() {
    // config
    const _config = {
        app: 'Tetris',
    };

    // vars
    const _vars = {
        
    };

    // private methods
    const _private = {
        init() {
            // nothing to do here
        }
    };

    // public methods
    const _public = {

        // debug
        debug() {
            console.log(`Success! ${Math.random()}`);
        }
    };

    return (() => {
        _private.init();
        // _public.debug();

        return _public;
    })();

}