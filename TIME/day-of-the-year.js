function dayOfTheYear(d) {
    let date = new Date(d.toISOString().split('T')[0].split('-')[0] + '-01-01T00:00:00.000Z')
    console.log(date)
    return Math.ceil((d.getTime() - date.getTime())/(24*3600*1000)) + 1
}

console.log(dayOfTheYear(new Date('0001-01-01')))
console.log(dayOfTheYear(new Date('1664-08-09')))