function slice(data, first, last) {
    if (typeof data == 'string') {
        data = Array.from(data)
    }
    let res = [], len = data.length
    for (let i = setIndex(len, first); i < (last == null ? len :  setIndex(len, last)); i++) {
        res.push(data[i])
    }
    return res
}

function setIndex(len, i) {
    return i < 0 ? len + i : i
}