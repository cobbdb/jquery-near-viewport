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
                src: ['src/*.js']
            }
        },
        uglify: {
            options: {
                mangle: {
                    except: [
                        '$scope',
                        '$index',
                        '$event'
                    ]
                }
            },
            default: {
                src: ['src/*.js'],
                dest: 'dist/jquery-near-viewport.min.js'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('build', [
        'jshint',
        'uglify'
    ]);
    grunt.registerTask('test', [
        'build'
    ]);
};
