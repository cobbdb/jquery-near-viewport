var $ = require('curb'),
    resolve = require('bower-path');

module.exports = function (grunt) {
    grunt.config.merge({
        jasmine: {
            global: {
                src: 'dist/near-viewport.min.js',
                options: {
                    specs: 'tests/global/*.spec.js',
                    vendor: [
                        resolve('jquery')
                    ],
                    outfile: 'tests/_SpecRunner.global.html'
                }
            },
            plugin: {
                src: 'dist/jquery-near-viewport.min.js',
                options: {
                    specs: 'tests/plugin/*.spec.js',
                    vendor: [
                        resolve('jquery')
                    ],
                    outfile: 'tests/_SpecRunner.plugin.html'
                }
            },
            module: {
                src: $('bin/tests/%s.spec.js',
                    grunt.option('spec') || '*'
                ),
                options: {
                    outfile: 'tests/_SpecRunner.module.html'
                }
            },
            options: {
                helpers: [
                    resolve('jasmine-jsreporter-real'),
                    'tests/saucelabs.helper.js'
                ],
                keepRunner: true,
                display: 'full',
                summary: false
            }
        }
    });
};
