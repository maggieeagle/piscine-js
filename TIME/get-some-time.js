function firstDayWeek(week, year) {
    let date = new Date(year+'-01-01T00:00:00.000Z'), date2 = new Date(year+'-01-01T00:00:00.000Z')
    // console.log(date)
    // console.log('day', date.getDay())
    date2.setDate(date.getDate() - (date.getDay()==0?6:(date.getDay()-1)) + (week-1)*7)
    // console.log(date2.getTime(), date.getTime())
    if (date2.getTime() < date.getTime()) {
        let s = date.toISOString().split('T')[0]
        return s.split('-').reverse().join('-')
    }
    let s = date2.toISOString().split('T')[0]
    return s.split('-').reverse().join('-')
}

console.log(firstDayWeek(52, '1000')) // 22-12-1000
console.log(firstDayWeek(2, '2017'))