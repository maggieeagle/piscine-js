function split(s, sep) {
    let res = [], prev = 0, next = 0
    while(next + sep.length <= s.length) {
        let tmp = s.indexOf(sep, prev)
        // console.log("tmp", tmp)
        if (tmp == -1) {
            // console.log('next!', next)
            // console.log('s.length-1!', s.length-1)
            // console.log("slice", s.slice(next+1, s.length))
            res.push(s.slice(next == 0 ? 0 : next + sep.length, s.length))
            break;
        }
        next = tmp
        // console.log("previous", prev)
        // console.log("next", next)
        res.push(s.slice(prev == 0 ? 0 : prev + sep.length-1, next))
        prev = next + 1
        // let isSep = s.slice(i - sep.length + 1, i + 1)
        // console.log("sep", isSep)
        // if (isSep == sep) {
        //     res.push(s.slice(prev+1, i - sep.length + 1))
        //     prev = i
        //     i += sep.length - 1
        // }
    }
    // res.push(s.slice(prev+1, s.length + 1))
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
// console.log(join(['Fire', 'Air', 'Water'], ''))