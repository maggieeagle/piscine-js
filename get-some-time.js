function firstDayWeek(week, year) {
    let date = new Date(year+'-01-01T00:00:00.000Z'), date2 = new Date(year+'-01-01T00:00:00.000Z')
    console.log(date)
    console.log('day', date.getDay())
    date2.setDate(date.getDate() + week*7 - (7-date.getDay()))
    console.log(date2.getTime(), date.getTime())
    if (date2.getTime() < date.getTime()) return date
    return date2
}

console.log(firstDayWeek(2, 2023))