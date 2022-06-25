export default function Tetris() {
    // default options
    const _default = {
        stage: document.querySelector('#tetris'),
        stage_width: 10,
        stage_height: 15,
    };

    // config
    const _config = {
        app: 'Tetris',
        logging: false,
        options: { ..._default, ...arguments[0] },
    };

    // css
    const _selectors = {
        stage_tile: 'tile',
    };

    // vars
    const _vars = {
        stage: null,
    };

    // helpers
    const _helpers = {
        // create element
        createElement(html) {
            const template = document.createElement('template');
            template.innerHTML = html;

            return template.content;
        },

        // clear content of an element
        removeChildNodes(parent) {
            while (parent.firstChild) {
                parent.removeChild(parent.firstChild);
            }
        },
    };

    // private methods
    const _private = {
        // init
        init() {
            // lock config and selectors
            Object.freeze(_config);
            Object.freeze(_selectors);
        },

        // logging
        log() {
            if (_config.logging)
                console.log(
                    `${_config.app}: ${new Date().valueOf()}\n\n\t`,
                    ...arguments,
                    `\n\n`
                );
        },

        // draw stage
        drawStage() {
            _private.log('Drawing stage');

            // reset stage
            _helpers.removeChildNodes(_config.options.stage);

            // create container
            _config.options.stage.appendChild(
                _helpers.createElement(`<div class="container"></div>`)
            );

            // set stage size
            _vars.stage = _config.options.stage.querySelector('.container');
            _vars.stage.style.gridTemplateColumns = `repeat(${_config.options.stage_width}, 1fr)`;

            // populate stage
            for (
                let i = 0;
                i < _config.options.stage_width * _config.options.stage_height;
                i++
            ) {
                _vars.stage.appendChild(
                    _private.createTile({
                        id: i,
                    })
                );
            }
        },

        // create tile
        createTile() {
            const options = arguments[0];

            return _helpers.createElement(`
                <div class="${_selectors.stage_tile}" date-id="${options.id}"></div>
            `);
        },
    };

    // public methods
    const _public = {
        // debug
        debug() {
            _private.log(`Debug Start`);

            _private.log(_config.options);
        },

        // set logging
        logging(log_status) {
            _config.logging = log_status ? true : false;
        },

        // boot
        boot() {
            _private.init();

            _public.debug();
            _private.drawStage();

            _private.log('Game started');
        },
    };

    return (() => {
        return _public;
    })();
}