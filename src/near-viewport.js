/**
 * # nearViewport()
 * Global function attached to the `window` object.
 */

/**
 * ### getWinTop()
 * Cross-browser check for the the window's scroll top.
 * @return {Number}
 */
function getWinTop() {
    if (window.pageYOffset === undefined) {
        return (document.documentElement || document.body.parentNode || document.body).scrollTop;
    }
    return window.pageYOffset;
}

/**
 * ## nearViewport(el, margin)
 * @param {Element} el The DOM element to check.
 * @param {Number} [margin] Offset in pixels from
 * the top and bottom of the viewport to include when
 * checking for the element. Defaults to 0.
 * @return {Boolean} True if the element is near
 * the viewport.
 */
module.exports = function (el, margin) {
    var winTop = getWinTop();
    var winHeight = document.documentElement.clientHeight;
    var winBottom = winTop + winHeight;
    margin = margin || 0;

    var rect = el.getBoundingClientRect();
    var elTop = rect.top + winTop - margin;
    var elBottom = rect.bottom + winTop + margin;

    return elBottom > winTop && elTop < winBottom;
};
