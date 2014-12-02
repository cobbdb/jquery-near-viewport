var jQuery = require('jquery');

module.exports = {
    moveTo: function (top) {
        jQuery('#test').css({
            'position': 'absolute',
            'top': top + 'px'
        });
    }
};
