function split(s, sep) {
    let res = [], prev = 0, next = 0
    const sepLen = sep.length
    while(next + sepLen <= s.length) {
        let next = s.indexOf(sep, prev)
        if (next == -1) {
            res.push(s.substring(next == 0 ? 0 : prev, s.length))
            break;
        }
        let slice = s.substring(prev == 0 ? 0 : prev, next)
        res.push(slice)
        prev = next + sepLen
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

console.log(split('ggg - ddd - b', ' - '))
console.log(split('a b c', ' '))
console.log(split('ee,ff,g,', ','))
console.log(split('Riad', ' '))
console.log(split('rrrr', 'rr'))
console.log(split('rrirr', 'rr'))
console.log(join(['Fire', 'Air', 'Water'], '-'))