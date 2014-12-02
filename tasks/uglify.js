module.exports = function (grunt) {
    grunt.config.merge({
        uglify: {
            plugin: {
                src: 'bin/jquery-near-viewport.js',
                dest: 'dist/jquery-near-viewport.min.js'
            },
            global: {
                src: 'bin/near-viewport.js',
                dest: 'dist/near-viewport.min.js'
            }
        }
    });
};
