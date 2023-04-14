function sameAmount(s, re1, re2) {
    return s.match(re1).length == s.match(re2).length ? true : false
}