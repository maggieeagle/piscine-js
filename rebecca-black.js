function isFriday(date) {
    if (date.getDay() == 5) return true
    return false
}

function isWeekend(date) {
    if (date.getDay() == 6 || date.getDay() == 0) return true
    return false
}

function isLeapYear(date) {
    let year = date.getFullYear()
    console.log(year)
    if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) return true
    return false
}

function isLastDayOfMonth(date) {
    date.setDate(date.getDate() + 1)
    console.log(date)
    let s = date.toISOString().split('T')[0]
    if (s.split('-')[2] == '01') return true
    return false
}

console.log(isLastDayOfMonth(new Date('2000-01-31')))