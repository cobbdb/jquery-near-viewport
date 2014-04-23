/**
 * :near-viewport
 * the jQuery selector to find things near the viewport.
 * @author Dan Cobb
 * @license MIT
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Window.scrollY
 */
jQuery.expr[':']['near-viewport'] = function (el, i, meta) {
    var margin = parseInt(meta[3]) || 0;

    var winTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
    var winHeight = document.documentElement.clientHeight;
    var winBottom = winTop + winHeight;

    var rect = el.getBoundingClientRect();
    var elTop = rect.top + winTop - margin;
    var elBottom = rect.bottom + winTop + margin;

    // Debug panel (removed during minification)
    /*console.log('~~ Var dump:');
    console.log('meta: ' + meta);
    console.log('margin: ' + margin);
    console.log('top: ' + elTop);
    console.log('True top: ' + (elTop + margin));
    console.log('bottom: ' + elBottom);
    console.log('type of bottom: ' + typeof elBottom);
    console.log('windowTop: ' + winTop);
    console.log('windowHeight: ' + winHeight);
    console.log('windowBottom: ' + winBottom);*/
    return elBottom > winTop && elTop < winBottom;
};
