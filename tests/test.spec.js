describe("near-viewport", function () {
    var elHeight, winHeight;
    var moveTo = function (top) {
        jQuery('#test').css({
            'position': 'absolute',
            'top': top + 'px'
        });
    };

    // Setup the environment.
    $(function () {
        $('body').append('<div id="test">test div</div>');
        elHeight = $('#test').height();
        winHeight = $(window).height();
    });

    // Run the tests.
    it("matches visible by default", function () {
        var set = $('#test:near-viewport');
        expect(set.length).toEqual(1);
    });
    it("accepts 0 as an offset", function () {
        var set = $('#test:near-viewport(0)');
        expect(set.length).toEqual(1);
    });
    it("accepts 100 as an offset", function () {
        var set = $('#test:near-viewport(100)');
        expect(set.length).toEqual(1);
    });
    it("does not match distant elements by default", function () {
        moveTo(winHeight + 10);
        var set = $('#test:near-viewport');
        expect(set.length).toEqual(0);
    });
    it("does not match distant elements with a short offset", function () {
        moveTo(winHeight + 1000);
        var set = $('#test:near-viewport(10)');
        expect(set.length).toEqual(0);
    });
    it("matches distant elements with a long offset", function () {
        moveTo(winHeight + 10);
        var set = $('#test:near-viewport(1000)');
        expect(set.length).toEqual(1);
    });
    it("matches partially visible elements above", function () {
        moveTo(-elHeight);
        var set = $('#test:near-viewport(3)');
        expect(set.length).toEqual(1);
    });
    it("matches partially visible elements below", function () {
        moveTo(winHeight - 2);
        var set = $('#test:near-viewport');
        expect(set.length).toEqual(1);
    });
    it("accurate within 2px above", function () {
        moveTo(-elHeight - 1);
        var set = $('#test:near-viewport');
        expect(set.length).toEqual(0);

        moveTo(-elHeight - 1);
        set = $('#test:near-viewport(2)');
        expect(set.length).toEqual(1);
    });
    it("accurate within 2px below", function () {
        moveTo(winHeight + 1);
        set = $('#test:near-viewport(0)');
        expect(set.length).toEqual(0);

        moveTo(winHeight + 1);
        set = $('#test:near-viewport(2)');
        expect(set.length).toEqual(1);
    });
    it('works with noConflict()', function () {
        $.noConflict();
        moveTo(winHeight);
        set = jQuery('#test:near-viewport(0)');
        expect(set.length).toEqual(0);

        moveTo(winHeight);
        set = jQuery('#test:near-viewport(1)');
        expect(set.length).toEqual(1);
    });
});
