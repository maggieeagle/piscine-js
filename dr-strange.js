function addWeek(date) {
    var epochDate = new Date('0001-01-01T00:00:00.000Z')
    var res = Math.floor(date.getTime() - epochDate.getTime()) / (24 * 60 * 60 * 1000);
    // console.log(Math.floor(res / 7))
    if (Math.floor(res / 7) % 2 == 0) {
        switch (res % 7) {
            case 0: return 'Monday'
            case 1: return 'Tuesday'
            case 2: return 'Wednesday'
            case 3: return 'Thursday'
            case 4: return 'Friday'
            case 5: return 'Saturday'
            case 6: return 'Sunday'
        }
    }
        switch (res % 7) {
            case 0: return 'secondMonday'
            case 1: return 'secondTuesday'
            case 2: return 'secondWednesday'
            case 3: return 'secondThursday'
            case 4: return 'secondFriday'
            case 5: return 'secondSaturday'
            case 6: return 'secondSunday'
        }
}

function timeTravel(time) {
    time.date.setTime((time.hour*3600 + time.minute*60 + time.second)*1000)
}

// timeTravel({
//     date: new Date('2020-05-29 23:25:22'),
//     hour: 21,
//     minute: 22,
//     second: 22,
//   })

// let date = new Date('0001-01-09')
// console.log(addWeek(date))