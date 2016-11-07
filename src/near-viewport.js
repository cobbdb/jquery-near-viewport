module.exports = function (el, offset) {
    var vert, hori,
        rect = el.getBoundingClientRect();
    offset = offset || 0;
    
    vert = rect.bottom + offset > 0 && rect.top - offset < global.innerHeight;
    hori = rect.right + offset > 0 && rect.left - offset < global.innerWidth;

    return vert && hori;
};
