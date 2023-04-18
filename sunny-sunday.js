function sunnySunday(date) {
    var epochDate = new Date('0001-01-01T00:00:00.000Z')
    var res = Math.floor(date.getTime() - epochDate.getTime()) / (24 * 60 * 60 * 1000);
    // console.log(Math.floor(res % 6))
    switch (Math.floor(res % 6)) {
        case 0: return 'Monday'
        case 1: return 'Tuesday'
        case 2: return 'Wednesday'
        case 3: return 'Thursday'
        case 4: return 'Friday'
        case 5: return 'Saturday'
    }
}

// console.log(sunnySunday(new Date(03-01-0001)))