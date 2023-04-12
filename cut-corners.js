function round(n0) {
    if (isNaN(n0)) return 'Error: Nan is not defined'
    let i = 0, n = Math.abs(n0)
    if (n == Infinity) return Math.sign(n0) * Infinity
    for (; i < n; i++) {}
    return i - n > n - i + 1 ? Math.sign(n0) * (i-1) : Math.sign(n0) * i
}

function floor(n0) {
    if (isNaN(n0)) return 'Error: Nan is not defined'
    let i = 0, n = Math.abs(n0)
    if (n == Infinity) return Math.sign(n0) * Infinity
    for (; i < n; i++) {}
    return Math.sign(n0) < 1 ? (i != 0 ? -i : 0) : i-1
}

function trunc(n) {
    return Math.sign(n) < 0 ? ceil(n) : floor(n)
}
function ceil(n0) {
    if (isNaN(n0)) return 'Error: Nan is not defined'
    let i = 0, n = Math.abs(n0)
    if (n == Infinity) return Math.sign(n0) * Infinity
    for (; i < n; i++) {}
    return Math.sign(n0) < 0 ? -i+1 : i
}

console.log(trunc(NaN))