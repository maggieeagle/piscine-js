function round(n) {
    let i = 0, sign = Math.sign(n)
    if (Number.isInteger(n)) return n
    if (n == Number.POSITIVE_INFINITY || n == Number.NEGATIVE_INFINITY || Number.isNaN(n)) return n
    if (n >= Number.MAX_VALUE || n <= -Number.MAX_VALUE) return n
    if (sign >= 0) {
        while (i < n) {
            if(n - i > 10000000000) i+=10000000000
            else if(n-i > 100000000) i += 100000000
            else if(n-i > 1000000) i += 1000000
            else if(n-i > 10000) i += 10000
            else if(n-i > 100) i += 100
            else i++
        }
        return i - n > n - i + 1 ? i - 1 : i
    }
    for (; i > n; i--) { }
    let res = i - n > n - i - 1 ? i : i + 1
    return res == 0 ? -0 : res
}

function floor(n0) {
    let i = 0, n = Math.abs(n0), sign = Math.sign(n0)
    if (Number.isInteger(n)) return n
    if (n0 == Number.POSITIVE_INFINITY || n0 == Number.NEGATIVE_INFINITY  || Number.isNaN(n0)) return n0
    if (n0 >= Number.MAX_VALUE || n0 <= -Number.MAX_VALUE) return n0
    while (i < n) {
        if(n - i > 10000000000) i+=10000000000
        else if(n-i > 100000000) i += 100000000
        else if(n-i > 1000000) i += 1000000
        else if(n-i > 10000) i += 10000
        else if(n-i > 100) i += 100
        else i++
    }
    return sign < 1 ? (i != 0 ? -i : sign * 0) : i - 1
}

function trunc(n) {
    return Math.sign(n) < 0 ? ceil(n) : floor(n)
}

function ceil(n0) {
    let i = 0, n = Math.abs(n0), sign = Math.sign(n0)
    if (Number.isInteger(n)) return n
    if (n0 == Number.POSITIVE_INFINITY || n0 == Number.NEGATIVE_INFINITY  || Number.isNaN(n0)) return n0
    if (n0 >= Number.MAX_VALUE || n0 <= -Number.MAX_VALUE) return n0
    while (i < n) {
        if(n - i > 10000000000) i+=10000000000
        else if(n-i > 100000000) i += 100000000
        else if(n-i > 1000000) i += 1000000
        else if(n-i > 10000) i += 10000
        else if(n-i > 100) i += 100
        else i++
    }
    return sign < 1 ? (-i + 1 != 0 ? -i + 1 : sign * 0) : i
}

console.log(round(1000000000000.2))