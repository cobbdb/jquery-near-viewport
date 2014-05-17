var resolve = require('bower-path');

module.exports = function (grunt) {
    grunt.initConfig({
        jshint: {
            options: {
                curly: true,
                eqeqeq: false,
                indent: 4,
                noarg: true,
                nonew: false,
                plusplus: true,
                quotmark: false,
                trailing: true
            },
            default: {
                src: 'src/*.js'
            }
        },
        uglify: {
            default: {
                src: 'src/*.js',
                dest: 'dist/jquery-near-viewport.min.js'
            }
        },
        jasmine: {
            dist: {
                src: 'dist/**/*.js'
            },
            raw: {
                src: 'src/**/*.js'
            },
            options: {
                specs: 'tests/*.spec.js',
                helpers: [
                    'bower_components/jasmine-jsreporter-real/jasmine-jsreporter.js',
                    'tests/saucelabs.helper.js'
                ],
                vendor: [
                    resolve('jquery')
                ],
                outfile: 'tests/_SpecRunner.html',
                keepRunner: true
            }
        },
        'saucelabs-jasmine': {
            all: {
                options: {
                    username: process.env.SAUCE_USERNAME,
                    key: process.env.SAUCE_ACCESS_KEY,
                    urls: [
                        'http://127.0.0.1:9999/tests/_SpecRunner.html'
                    ],
                    build: process.env.TRAVIS_JOB_ID,
                    concurrency: 3,
                    browsers: [{
                        browserName: 'googlechrome',
                        platform: 'WIN7'
                    }],
                    testname: ':near-viewport'
                }
            }
        },
        connect: {
            server: {
                options: {
                    base: '',
                    port: 9999
                }
            }
        },
        watch: {}
    });

    // Load in all the external tasks.
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
    grunt.loadTasks('tasks');

    grunt.registerTask('sl-test', [
        'connect',
        'jasmine:dist',
        'saucelabs-jasmine'
    ]);
    grunt.registerTask('dev-test', [
        'connect',
        'watch'
    ]);
    grunt.registerTask('default', [
        'jshint',
        'uglify',
        'jasmine:dist'
    ]);
};
