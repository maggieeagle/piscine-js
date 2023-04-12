function split(s, sep) {
    let res = [], prev = -1, word = ''
    for (let i = 0; i < s.length; i++) {
        let isSep = ''
        for (let j = i - sep.length + 1; j <= i; j++) {
            isSep += s[j]
        }
        if (isSep == sep) {
            // for (let j = prev + 1; j < i - sep.length + 1; j++) {
            //     word += s[j]
            // }
            res.push(s.slice(prev, i-sep.length))
            prev = i
            word = ''
            i += sep.length-1
        }
    }
    for (let j = prev + 1; j < s.length; j++) {
        word += s[j]
    }
    res.push(word)
    return res
}

function join(arr, sep) {
    let res = ''
    for (let i = 0; i < arr.length; i++) {
        res += arr[i]
        if (i < arr.length-1) res += sep
    }
    return res
}

console.log(split('bla bla bla bla', 'bl'))
console.log(join(['Fire', 'Air', 'Water'], ''))