function ionOut(s) {
    let input  = s.split(', '), res = []
    input.forEach(word => {
        let re = /(?<=t)ion/
        if (re.test(word)) res.push(word.replace(re, '')) 
    });
    return res
}