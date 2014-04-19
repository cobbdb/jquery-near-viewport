# near-viewport [![Build Status](https://travis-ci.org/cobbdb/jsinclude.svg?branch=master)](https://travis-ci.org/cobbdb/jsinclude)

A jQuery selector to find elements near the viewport.

    $ bower install jquery-near-viewport

-------------
### Selecting visible elements
By default the selector will match elements that are at least partially showing in the viewport.

    var visibleImages = $('img:near-viewport');

### Using the offset option
An offset can be set which will increase the range beyond the viewport both top and bottom.
For example, if given an offset of 100, then items will match 100px above the viewport and 100px below the viewport.

    $('.ad:near-viewport(100)').loadFromServer();

---------
* See: http://plugins.jquery.com/near-viewport/
* See: http://github.com/cobbdb/jquery-near-viewport
* License: MIT
---------
## Change Log

#### 1.0.0

* Offset option to match above and below the viewport.
