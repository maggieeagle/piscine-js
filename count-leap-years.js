function countLeapYears(date) {
    let year = date.getFullYear()
    return Math.floor(year/4-year/100+year/400)
}

console.log(countLeapYears(new Date('01-01-2023')))