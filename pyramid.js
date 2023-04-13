function pyramid(s, n) {
    let res = ''
    for (let i = 1; i <= n; i++) {
        res += (' ').repeat((n-i)*s.length) + s.repeat(2*i-1)
        if  (i < n) res += '\n'
    }
    return res
}

console.log(pyramid('{}', 12))