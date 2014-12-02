var $ = require('jquery'),
    jQuery = require('jquery'),
    Help = require('./test.helper.js'),
    moveTo = Help.moveTo;

// Install the plugin.
require('../src/plugin.js');

describe('near-viewport', function () {
    var elHeight, winHeight, set;

    beforeEach(function () {
        $('body').append('<div id="test" class="test">test div</div>');
        elHeight = $('#test').height();
        winHeight = $(window).height();
    });
    afterEach(function () {
        $('.test').remove();
    });

    it('matches visible by default', function () {
        set = $('#test:near-viewport');
        expect(set.length).toEqual(1);
    });
    it('accepts 0 as an offset', function () {
        set = $('#test:near-viewport(0)');
        expect(set.length).toEqual(1);
    });
    it('accepts 100 as an offset', function () {
        set = $('#test:near-viewport(100)');
        expect(set.length).toEqual(1);
    });
    it('does not match distant elements by default', function () {
        moveTo(winHeight + 10);
        set = $('#test:near-viewport');
        expect(set.length).toEqual(0);
    });
    it('does not match distant elements with a short offset', function () {
        moveTo(winHeight + 1000);
        set = $('#test:near-viewport(10)');
        expect(set.length).toEqual(0);
    });
    it('matches distant elements with a long offset', function () {
        moveTo(winHeight + 10);
        set = $('#test:near-viewport(1000)');
        expect(set.length).toEqual(1);
    });
    it('matches partially visible elements above', function () {
        moveTo(-elHeight);
        set = $('#test:near-viewport(3)');
        expect(set.length).toEqual(1);
    });
    it('matches partially visible elements below', function () {
        moveTo(winHeight - 2);
        set = $('#test:near-viewport');
        expect(set.length).toEqual(1);
    });
    describe('is accurate', function () {
        it('within 2px above', function () {
            moveTo(-elHeight - 1);
            set = $('#test:near-viewport');
            expect(set.length).toEqual(0);

            moveTo(-elHeight - 1);
            set = $('#test:near-viewport(2)');
            expect(set.length).toEqual(1);
        });
        it('within 2px below', function () {
            moveTo(winHeight + 1);
            set = $('#test:near-viewport(0)');
            expect(set.length).toEqual(0);

            moveTo(winHeight + 1);
            set = $('#test:near-viewport(2)');
            expect(set.length).toEqual(1);
        });
    });
    describe('matches hidden elements', function () {
        beforeEach(function () {
            moveTo(0);
            set = $('#test:near-viewport(10)');
            expect(set.length).toEqual(1);
        });
        it('using display:none', function () {
            $('#test').css({
                display: 'none'
            });
            set = $('#test:near-viewport(10)');
            expect(set.length).toEqual(1);
        });
        it('using jQuery.hide()', function () {
            $('#test').hide();
            set = $('#test:near-viewport(10)');
            expect(set.length).toEqual(1);
        });
    });
    it('works with noConflict()', function () {
        var altQuery = $.noConflict();
        moveTo(winHeight);
        set = altQuery('#test:near-viewport(0)');
        expect(set.length).toEqual(0);

        moveTo(winHeight);
        set = altQuery('#test:near-viewport(1)');
        expect(set.length).toEqual(1);
        $ = altQuery;
    });
});
