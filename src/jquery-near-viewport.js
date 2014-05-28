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
    if (rect.height === 0) {
        // Skip hidden page elements.
        return false;
    }
    var elTop = rect.top + winTop - margin;
    var elBottom = rect.bottom + winTop + margin;

    return elBottom > winTop && elTop < winBottom;
};
