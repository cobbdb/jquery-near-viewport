describe('global function', function () {
    it('attaches to the window object', function () {
        expect('nearViewport' in window).toBe(true);
    });
    it('works', function () {
        var el = $('<div>', {
            id: 'testdiv'
        }).appendTo('body')[0];
        var visible = nearViewport(el);
        expect(visible).toBe(true);
    });
});
