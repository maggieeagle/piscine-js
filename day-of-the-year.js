function dayOfTheYear(d) {
    let date = new Date(d.getFullYear()+'-01-01T00:00:00.000Z')
    return d.getDate() - date.getDate() + 1
}

// console.log(dayOfTheYear(new Date('2001-01-28')))