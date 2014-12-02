describe('jQuery selector', function () {
    it('attaches to the jQuery object', function () {
        expect('near-viewport' in jQuery.expr[':']).toBe(true);
    });
    it('works', function () {
        var div = $('<div>', {
            id: 'testdiv'
        }).appendTo('body');
        expect(div.is(':near-viewport')).toBe(true);
    });
});
