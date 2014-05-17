module.exports = function (grunt) {
    grunt.config.set('saucelabs-jasmine', {
        all: {
            options: {
                username: process.env.SAUCE_USERNAME,
                key: process.env.SAUCE_ACCESS_KEY,
                urls: [
                    'http://127.0.0.1:9999/tests/_SpecRunner.html'
                ],
                build: process.env.TRAVIS_JOB_ID,
                concurrency: 3,
                testname: ':near-viewport',
                browsers: browsers
            }
        }
    });
};

var browsers = [{
    platform: 'OS X 10.9',
    version: '7.1',
    deviceName: 'iPhone',
    'device-orientation': 'portrait'
}];
