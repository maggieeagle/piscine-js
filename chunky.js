function chunk(arr, size) {
    let res=[], i = 0
    for (; i < arr.length; i+=size) {
        res.push(arr.slice(i, i+size))
    }
    return res
}