function matchCron(s, d) {
    let template = s.split(' ')
    // console.log(d.toISOString())
    let date = d.toISOString().split('T')[0].split('-')
    let time = d.toISOString().split('T')[1].split(':')

    if (template[0] != '*' && parseInt(template[0]) != parseInt(time[1])) return false//minutes
    if (template[1] != '*' && parseInt(template[1]) != parseInt(time[0])) return false//hours
    if (template[2] != '*' && parseInt(template[2]) != parseInt(date[2])) return false//day of the month
    if (template[3] != '*' && parseInt(template[3]) != parseInt(date[1])) return false//month of the year
    if (template[4] != '*') {
        day = date.getDay()==0?7:date.getDay()
        if (template[4] != day) return false
    }
    return true
}

console.log(matchCron('9 * * * *', new Date('2020-05-30 18:09:00')))
console.log(matchCron('9 * * * *', new Date('2020-05-30 19:09:00')))
console.log(matchCron('9 * * * *', new Date('2020-05-30 19:21:00')))