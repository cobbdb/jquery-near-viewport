function nearViewport(el, margin) {
    var winTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
    var winHeight = document.documentElement.clientHeight;
    var winBottom = winTop + winHeight;
    margin = margin || 0;

    var rect = el.getBoundingClientRect();
    var elTop = rect.top + winTop - margin;
    var elBottom = rect.bottom + winTop + margin;

    return elBottom > winTop && elTop < winBottom;
}
