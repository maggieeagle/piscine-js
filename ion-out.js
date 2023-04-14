function ionOut(s) {
    let input  = s.split(/,?\s+/), res = []
    input.forEach(word => {
        let re = /(?<=t)ion/
        if (re.test(word)) res.push(word.replace(re, '')) 
    });
    return res
}

console.log(ionOut(' 1st position is the vision of the 2nd position'))