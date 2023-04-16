function sameAmount(s, re1, re2) {
    let fir = s.match(new RegExp(re1,'g'))
    let sec = s.match(new RegExp(re2,'g'))
    return fir == null || sec == null || fir.length != sec.length ? false : true
}