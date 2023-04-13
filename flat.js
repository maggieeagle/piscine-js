function flat(arr) {
    let res = []
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            res = res.concat(flat(arr[i]))
        } else {
            res.push(arr[i])
        }
    }
    return res
}

console.log(flat([0, 1, 2, [3, 4]]))