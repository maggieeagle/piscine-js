function cutFirst(s) {
    return s.slice(2)
}

function cutLast(s) {
    return s.slice(0, s.length-2)
}

function cutFirstLast(s) {
    return s.slice(2, s.length-2)
}

function keepFirst(s) {
    return s.slice(0, 2)
}

function keepLast(s) {
    return s.slice(s.length-2, s.length)
}

function keepFirstLast(s) {
    return keepFirst(s) + keepLast(cutFirst(s))
}

console.log(keepFirstLast("af"))