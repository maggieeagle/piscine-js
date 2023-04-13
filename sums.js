function sums(n) {
    if (n == 0) return []
    let res = [], p = []
    for (let i = 0; i < n; i++) {
        p.push(1)
    }
    res.push([p])
    
    for (let i = n-1; i >= 2; i--) {
        res.push(partition(n, i))
    }

    return res.flat()
}

function partition(n, len) {
    let part = [], res = []

    part.push(n - len + 1)
    for (let i = 0; i < len - 1; i++) {
        part.push(1)
    }
    res.push(structuredClone(part).reverse())

    // console.log('start', part)
    let flag = true
    while (part[0] > part[1] && flag) {
        flag = false
        for (let i = 1; i < part.length; i++) {
            n = part[i] + 1
            let compare = i == 1 ? part[0] - 1 : part[i - 1]
            if (i < part.length - 1 && n >= part[i + 1] && n <= compare && n - part[i + 1] <= compare - n + 1 ||
                i == part.length - 1 && n <= part[i-1] && compare >= part[1]) {
                part[i] += 1
                part[0] -= 1
                res.push(structuredClone(part).reverse())
                // console.log(part)
                flag = true
                break;
            }
        }
        // console.log('finish')
    }
    // console.log(res)
    return res
}

console.log(sums(0))