function split(s, sep) {
    let res = [], prev = 0, next = 0
    while(next + sep.length <= s.length) {
        let tmp = s.indexOf(sep, prev)
        if (tmp == -1) {
            res.push(s.substring(next == 0 ? 0 : prev, s.length))
            break;
        }
        next = tmp
        let slice = s.substring(prev == 0 ? 0 : prev, next)
        res.push(slice)
        prev = next + sep.length
    }
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

// console.log(split('ggg - ddd - b', ' - '))
// console.log(split('a b c', ' '))
// console.log(split('ee,ff,g,', ','))
// console.log(split('Riad', ' '))
// console.log(split('rrrr', 'rr'))
// console.log(split('rrirr', 'rr'))
// console.log(join(['Fire', 'Air', 'Water'], ''))