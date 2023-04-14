function sameAmount(s, re1, re2) {
    let fir = s.match(re1)
    let sec = s.match(re2)
    return fir == null || sec == null || fir.length != s.match(re2).length ? false : true
}

console.log(sameAmount('kjdnkruhikejrbjhb', /h/, /w/))