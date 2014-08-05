/**
 * :near-viewport
 * the jQuery selector to find things near the viewport.
 * @author Dan Cobb
 * @license MIT
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Window.scrollY
 */
jQuery.expr[':']['near-viewport'] = function (el, i, meta) {
    var margin = parseInt(meta[3]) || 0;
    return nearViewport(el, margin);
};
