function reverse(data) {
    let flag = false
    if (typeof data == 'string') {
        data = Array.from(data)
        flag = true
    }
    let res = [], len = data.length
    for (let i = data.length-1; i >= 0; i--) {
        res.push(data[i])
    }
    return flag ? res.join('') : res
}

console.log(reverse([1, 2, 54, 3]))