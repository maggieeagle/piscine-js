function letterSpaceNumber(s) {
    const re = /\w \d\b/g
    return s.match(re)
}

console.log(letterSpaceNumber('example 1, example 20'))