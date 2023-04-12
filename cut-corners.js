function round(n0) {
    let i = 0, n = Math.abs(n0)
    for (; i < n; i++) {}
    return i - n > n - i + 1 ? Math.sign(n0) * (i-1) : Math.sign(n0) * i
}

function floor(n0) {
    let i = 0, n = Math.abs(n0)
    for (; i < n; i++) {}
    return Math.sign(n0) < 1 ? (i != 0 ? -i : 0) : i-1
}

function trunc(n) {
    return Math.sign(n) < 0 ? ceil(n) : floor(n)
}

function ceil(n0) {
    let i = 0, n = Math.abs(n0)
    for (; i < n; i++) {}
    return Math.sign(n0) < 0 ? -i+1 : i
}
console.log()