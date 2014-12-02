module.exports = function (grunt) {
    // Load in all the external tasks.
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
    grunt.loadTasks('tasks');

    grunt.registerTask('sl-test', 'SauceLabs test suite.', [
        'connect',
        'jasmine',
        'saucelabs-jasmine'
    ]);
    grunt.registerTask('dev-test', 'Run SpecRunner.html locally.', [
        'connect',
        'watch'
    ]);
    grunt.registerTask('default', 'Full build suite.', [
        'jshint',
        'browserify:tests',
        'browserify:global',
        'browserify:plugin',
        'uglify',
        'jasmine'
    ]);
    grunt.registerTask('test', 'Quick build and test.', [
        'browserify:tests',
        'jasmine:module'
    ]);
};
