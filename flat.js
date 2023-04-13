function flat(arr, depth) {
    let res = []
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i]) && (depth > 0 || depth == null)) {
            res = res.concat(flat(arr[i], depth-1))
        } else {
            res.push(arr[i])
        }
    }
    return res
}

console.log(flat([1, [2, [3]]], 2))