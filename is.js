is.num = function(n) {
    return typeof n == 'number' ? true : false
}
is.nan = function(n) {
    return Number.isNaN(n) ? true : false
}
is.str = function(n) {
    return typeof n == 'string' ? true : false
}
is.bool = function(n) {
    return typeof n == 'boolean' ? true : false
}
is.undef = function(n) {
    return typeof n == 'undefined' ? true : false
}
is.def = function(n) {
    return typeof n != 'undefined' ? true : false
}
is.arr = function(n) {
    return Array.isArray(n) ? true : false
}
is.obj = function(n) {
    return typeof n === 'object' && n != null ? true : false
}
is.fun = function(n) {
    return n instanceof Function ? true : false
}
is.truthy = function(n) {
    return n ? true : false
}
is.falsy = function(n) {
    return !n ? true : false
}

console.log(is.f())