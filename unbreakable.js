function split(s, sep) {
    let res = [], prev = 0
    for (let i = 0; i < s.length; i++) {
        let isSep = s.slice(i - sep.length + 1, i + 1)
        console.log("sep", isSep)
        if (isSep == sep) {
            // for (let j = prev + 1; j < i - sep.length + 1; j++) {
            //     word += s[j]
            // }
            res.push(s.slice(prev, i - sep.length + 1))
            prev = i
            i += sep.length - 1
        }
    }
    // for (let j = prev + 1; j < s.length; j++) {
    //     word += s[j]
    // }
    res.push(s.slice(prev, s.length + 1))
    return res
}

function join(arr, sep) {
    let res = ''
    for (let i = 0; i < arr.length; i++) {
        res += arr[i]
        if (i < arr.length - 1) res += sep
    }
    return res
}

console.log(split('a b c', ' '))
console.log(join(['Fire', 'Air', 'Water'], ''))