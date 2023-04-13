function pyramid(s, n) {
    let res = ''
    for (let i = 1; i <= n; i++) {
        res += (' ').repeat(n-i) + s.repeat(2*i-1)
        if  (i < n) res += '\n'
    }
    return res
}