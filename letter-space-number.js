function letterSpaceNumber(s) {
    const re = /\w \d\b/g
    return s.match(re) == null ? [] : s.match(re)
}

console.log(letterSpaceNumber('I like 7up.'))