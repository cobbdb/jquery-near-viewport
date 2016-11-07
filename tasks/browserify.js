module.exports = function (grunt) {
    grunt.config.merge({
        browserify: {
            global: {
                files: {
                    'bin/near-viewport.js': 'src/near-viewport.js'
                },
                options: {
                    browserifyOptions: {
                        standalone: 'nearViewport'
                    }
                }
            },
            plugin: {
                files: {
                    'bin/jquery-near-viewport.js': 'src/plugin.js'
                },
                options: {
                    alias: [
                        './src/util/jquery.alias.js:jquery'
                    ]
                }
            }
        }
    });
};
