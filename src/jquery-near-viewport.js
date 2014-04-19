(function ($) {
    $.extend($.expr[':'], {
        /**
         *  @see https://developer.mozilla.org/en-US/docs/Web/API/Window.scrollY
         */
        'near-viewport': function (el, i, meta) {
            var margin = parseInt(meta[3]) || 0;

            var winTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
            var winHeight = window.innerHeight || $(window).height();
            var winBottom = winTop + winHeight;

            var rect = el.getBoundingClientRect();
            var elTop = rect.top + winTop - margin;
            var elBottom = rect.bottom + winTop + margin;

            // Debug panel (removed by minification)
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
        }
    });
}(jQuery));
