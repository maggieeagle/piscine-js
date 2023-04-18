function dayOfTheYear(d) {
    let date = new Date(d.getFullYear(), 1, 1)
    return d.getDate() - date.getDate() + 1
}

// console.log(dayOfTheYear(new Date('0001-01-01')))