var resolve = require('bower-path');
module.exports = function (grunt) {
    grunt.config.merge({
        jasmine: {
            dist: {
                src: 'dist/**/*.js'
            },
            src: {
                src: 'src/**/*.js'
            },
            options: {
                polyfills: [
                    'bower_components/json2/json2.js',
                    resolve('polyfill-queryselector'),
                    resolve('jasmine-polyfills')
                ],
                specs: 'tests/*.spec.js',
                helpers: [
                    'bower_components/jasmine-jsreporter-real/jasmine-jsreporter.js',
                    'tests/*.helper.js'
                ],
                vendor: [
                    resolve('jquery')
                ],
                outfile: 'tests/_SpecRunner.html',
                keepRunner: true,
                display: 'short',
                summary: true
            }
        }
    });
};
