module.exports = function (grunt) {
    grunt.config.merge({
        uglify: {
            plugin: {
                src: 'src/*.js',
                dest: 'dist/jquery-near-viewport.min.js',
                options: {
                    enclose: {},
                    mangle: {
                        except: [
                            'jQuery'
                        ]
                    }
                }
            },
            global: {
                src: 'src/near-viewport.js',
                dest: 'dist/near-viewport.min.js'
            }
        }
    });
};
