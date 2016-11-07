# near-viewport

[![License](https://img.shields.io/npm/l/jquery-near-viewport.svg)](http://npmjs.com/package/jquery-near-viewport)
[![Bower version](https://badge.fury.io/bo/jquery-near-viewport.svg)](http://badge.fury.io/bo/jquery-near-viewport)
[![NPM version](https://badge.fury.io/js/jquery-near-viewport.svg)](http://badge.fury.io/js/jquery-near-viewport)
[![Dependencies](https://img.shields.io/david/dev/cobbdb/jquery-near-viewport.svg)](./package.json)

A jQuery selector to find elements near the viewport.

    $ bower i jquery-near-viewport --save
    $ npm i jquery-near-viewport --save

-------------
### Selecting visible elements
By default the selector will match elements that are at least partially showing in the viewport.
```js
var visibleImages = $('img:near-viewport');
```

### Testing if an element is visible
The selector can be used with .is() to test if an element is or is not in range of the viewport.
```js
var pixel = $('#lower-tp');
if (pixel.is(':near-viewport')) {
    pixel.recordMetrics();
}
```

### Using the offset option
An offset can be set which will increase the range beyond the viewport both top and bottom.
For example, if given an offset of 100, then items will match 100px above the viewport and 100px below the viewport.
```js
$('.ad:near-viewport(100)').loadFromServer();
```

## Formats
Near-Viewport is provided in three formats:
as a jQuery selector,
as a pure JavaScript global function,
and as a Browserify/Node/CommonJS module.

#### jQuery Selector
The selector will try to load itself into the global jQuery object.
This means that the `dist/jquery-near-viewport.min.js` file should be
loaded immediately after the main `jquery.min.js` library is loaded.

#### Pure JS Global Function
The global version can be used in any project and has zero dependencies.
Cross browser testing is done via SauceLabs (see chart above).
Just use `dist/near-viewport.js` instead of the jQuery plugin.
```js
var el = document.getElementById('mydiv'),
    visible = nearViewport(el),
    nearby = nearViewport(el, 100);
```

#### Browserify/CommonJS Module
To build Near-Viewport with your Browserify bundle, just install with
`npm install jquery-near-viewport` and then `require` it like usual.
```js
var nearViewport = require('jquery-near-viewport'),
    el = document.getElementById('mydiv'),
    visible = nearViewport(el),
    nearby = nearViewport(el, 100);
```

---------
* See: http://github.com/cobbdb/jquery-near-viewport
* License: MIT
