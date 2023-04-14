function sums(n, notfirst) {
    if (n == 0) return []
    if (n == 1) {
        if (notfirst == null) return []
        else return [[1]]
    }
    let sum = sums(n-1, true), res = []
    // if (sum.length == 0) sum.push([1])
    for (let j = 0; j < sum.length; j++){
        let tmp =  structuredClone(sum[j])
        // console.log('sum[j]', tmp)
        tmp.push(1)
        tmp.sort()
        // console.log('sum[j] after push', tmp)
        if (isUnique(res, tmp)) res.push(tmp)
        // console.log('res after push', res)
        for (let i = 0; i < sum[j].length; i++) {
            let tmp = structuredClone(sum[j])
            tmp[i] += 1
            tmp.sort()
            if (tmp[0] != n && isUnique(res, tmp)) res.push(tmp)
        }
    }
    
    return res.sort()
}

function isUnique(res, tmp) {
    for (let i = 0; i < res.length; i++) {
        if (res[i].toString() == tmp.toString()) return false 
    }
    return true
}

console.log(sums(4))