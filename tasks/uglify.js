module.exports = function (grunt) {
    grunt.config.merge({
        uglify: {
            default: {
                src: 'src/*.js',
                dest: 'dist/jquery-near-viewport.min.js'
            }
        }
    });
};
