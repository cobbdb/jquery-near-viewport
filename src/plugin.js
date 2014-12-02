/**
 * :near-viewport
 * the jQuery selector to find things near the viewport.
 * @author Dan Cobb
 * @license MIT
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Window.scrollY
 */
var jQuery = require('jquery'),
    nearViewport = require('./near-viewport.js');

jQuery.expr[':']['near-viewport'] = function (el, i, meta) {
    var margin = global.parseInt(meta[3]) || 0;
    return nearViewport(el, margin);
};
