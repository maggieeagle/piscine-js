function round(n) {
    let i = 0, sign = Math.sign(n)
    if (Number.isInteger(n)) return n
    if (n == Number.POSITIVE_INFINITY || n == Number.NEGATIVE_INFINITY) return n
    if (n > Number.MAX_SAFE_INTEGER || n < -Number.MAX_SAFE_INTEGER) return n
    if (sign >= 0) {
        for (; i < n; i++) { }
        return i - n > n - i + 1 ? i - 1 : i
    }
    for (; i > n; i--) { }
    let res = i - n > n - i - 1 ? i : i + 1
    return res == 0 ? -0 : res
}

function floor(n0) {
    let i = 0, n = Math.abs(n0), sign = Math.sign(n0)
    if (Number.isInteger(n)) return n
    if (n0 == Number.POSITIVE_INFINITY || n0 == Number.NEGATIVE_INFINITY) return n0
    if (n0 > Number.MAX_SAFE_INTEGER || n0 < -Number.MAX_SAFE_INTEGER) return n0
    for (; i < n; i++) { }
    return sign < 1 ? (i != 0 ? -i : sign * 0) : i - 1
}

function trunc(n) {
    return Math.sign(n) < 0 ? ceil(n) : floor(n)
}

function ceil(n0) {
    let i = 0, n = Math.abs(n0), sign = Math.sign(n0)
    if (Number.isInteger(n)) return n
    if (n0 == Number.POSITIVE_INFINITY || n0 == Number.NEGATIVE_INFINITY) return n0
    if (n0 > Number.MAX_SAFE_INTEGER || n0 < -Number.MAX_SAFE_INTEGER) return n0
    for (; i < n; i++) { }
    if (-i == n0) return n
    return sign < 1 ? (-i + 1 != 0 ? -i + 1 : sign * 0) : i
}

console.log(round(Number.MAX_VALUE + 1))