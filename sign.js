function sign(n) {
    if (n > 0) return 1
    if (n < 0) return -1
    return 0
}

function sameSign(a, b) {
    return sign(a*b)==1 || sign(a*b)==0 ? true : false
}