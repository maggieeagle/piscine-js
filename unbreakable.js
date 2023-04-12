function split(s, sep) {
    let res = []
    if (!(sep == null || sep == '')) {
        let prev = 0, next = 0
        while(next + sep.length <= s.length) {
            let next = s.indexOf(sep, prev)
            if (next == -1) {
                res.push(s.substring(next == 0 ? 0 : prev, s.length))
                break;
            }
            let slice = s.substring(prev == 0 ? 0 : prev, next)
            res.push(slice)
            prev = next + sep.length
        }
    } else {
        for (let i = 0; i < s.length; i++) {
            if (s[i] != ' ') res.push(s[i])
        }
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
console.log(split('hello', ''))
console.log(join(['Fire', 'Air', 'Water'], '-'))