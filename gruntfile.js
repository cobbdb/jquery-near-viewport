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
                vendor: resolve('jquery'),
                outfile: 'tests/_SpecRunner.html',
                keepRunner: true
            }
        },
        'saucelabs-jasmine': {
            all: {
                options: {
                    username: 'cobbdb',
                    key: process.env.saucekey,
					urls: [
                        'http://127.0.0.1:9999/tests/_SpecRunner.html'
                    ],
					tunnelTimeout: 5,
					build: process.env.TRAVIS_JOB_ID,
					concurrency: 3,
					browsers: [{
                        browserName: 'firefox',
                        version: '19',
                        platform: 'XP'
                    }, {
                        browserName: 'googlechrome',
                        platform: 'XP'
                    }, {
                        browserName: 'googlechrome',
                        platform: 'linux'
                    }, {
                        browserName: 'internet explorer',
                        platform: 'WIN8',
                        version: '10'
                    }, {
                        browserName: 'internet explorer',
                        platform: 'VISTA',
                        version: '9'
                    }],
					testname: "jasmine tests"
				}
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jasmine');
    grunt.loadNpmTasks('grunt-saucelabs');

    grunt.registerTask('build', [
        'jshint',
        'uglify'
    ]);

    grunt.registerTask('default', [
        'build',
        'jasmine:dist'
    ]);
};
