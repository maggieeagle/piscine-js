function ionOut(s) {
    let input  = s.split(', '), res = []
    input.forEach(word => {
        let re = /(?<=t)ion/
        if (re.test(s)) res.push(word.replace(re, '')) 
    });
    return res
}