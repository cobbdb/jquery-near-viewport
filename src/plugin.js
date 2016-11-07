var jQuery = require('jquery'),
    nearViewport = require('./near-viewport.js');

/**
 * ### :near-viewport([margin])
 * @param {Number} [margin] Offset in pixels from the top and
 * bottom of the viewport.
 * @return {Boolean} True if element is near the viewport.
 */
jQuery.expr[':']['near-viewport'] = function (el, i, meta) {
    var margin = global.parseInt(meta[3]) || 0;
    return nearViewport(el, margin);
};
