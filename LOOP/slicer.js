function slice(data, first, last) {
    let flag = false
    if (typeof data == 'string') {
        data = Array.from(data)
        flag = true
    }
    let res = [], len = data.length
    for (let i = setIndex(len, first); i < (last == null ? len :  setIndex(len, last)); i++) {
        res.push(data[i])
    }
    return flag ? res.join('') : res
}

function setIndex(len, i) {
    return i < 0 ? len + i : i
}

console.log(slice('abcdef', 2))