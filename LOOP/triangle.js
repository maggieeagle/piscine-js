function triangle(s, n) {
    let res = ''
    for (let i = 1; i <= n; i++) {
        res += s.repeat(i)
        if  (i < n) res += '\n'
    }
    return res
}