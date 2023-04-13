function nasa(N) {
    let res = ''
    for (let i = 1; i <= N; i++) {
        if (i % 5 == 0 && i % 3 == 0) {
            res += 'NASA'
            continue;
        }
        if (i % 3 == 0) {
            res += 'NA'
            continue;
        }
        if (i % 5 == 0) {
            res += 'SA'
        } else {
            res += i
        }
    }
    return res
}

console.log(nasa(10))