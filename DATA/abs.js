function isPositive(n) {
    if (n > 0) {
        return true
    }
    return false
}

function abs(n) {
    if (!isPositive(n) && n != 0) {
        return -n
    }
    return n
}

console.log(abs(0))