function multiply(a, b) {
    let sign = Math.abs(Math.sign(a) + Math.sign(b)) - 1
    let res = 0
    for (let i=0; i < Math.abs(b); i++) {
        res += Math.abs(a)
    }
    return (sign < 0 && res != 0 ? "-" : "") + res
}

function devide(a0, b0) {
    let a = Math.abs(a0), b = Math.abs(b0)
    let sign = Math.abs(Math.sign(a0) + Math.sign(b0)) - 1
    let res = 0
    for (;a >= b;a-=b) {
        res += 1
    }
    return (sign < 0 && res != 0 ? "-" : "") + res
}

function modulo(a, b) {
    return Math.abs(a-multiply(b, devide(a, b)))
}