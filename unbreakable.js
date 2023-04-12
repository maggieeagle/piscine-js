function split(s) {
    let res = []
    for (let i = 0; i < s.length; i++) {
        if (s[i] != ' ') res.push(s[i])
    }
    return res
}

function join(arr) {
    let res = ''
    for (let i = 0; i < arr.length; i++) {
        res += arr[i]
    }
    return res
}

console.log(join([ "h", "e", "l", "l", "o" ]))