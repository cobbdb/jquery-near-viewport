module.exports = function (grunt) {
    // Load in all the external tasks.
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
    grunt.loadTasks('tasks');

    grunt.registerTask('sl-test', 'SauceLabs test suite.', [
        'connect',
        'jasmine:dist',
        'saucelabs-jasmine'
    ]);
    grunt.registerTask('dev-test', 'Run SpecRunner.html locally.', [
        'connect',
        'watch'
    ]);
    grunt.registerTask('default', 'Build suite.', [
        'jasmine:src',
        'jshint',
        'uglify',
        'jasmine:dist'
    ]);
};
