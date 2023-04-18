function format(date, s) {
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const dayOfWeek = date.getDay();
    
    console.log(year, month, day, hours, minutes, seconds, dayOfWeek)

    s = s.replace(/yyyy\b/, ('0000'+Math.abs(year).toString()).slice(-4))
    s = s.replace(/y\b/, Math.abs(year))
    s = s.replace(/GGGG\b/, year<0?'Before Christ':'Anno Domini')
    s = s.replace(/G\b/, year<0?'BC':'AD')
    s = s.replace(/MMMM\b/, monthNames[parseInt(month)])
    s = s.replace(/MMM\b/, monthNames[parseInt(month)].slice(0,3))
    s = s.replace(/MM\b/, month>8?month+1:'0'+(month+1).toString())
    s = s.replace(/M\b/, (month+1)>9?(month+1).toString()[1]:month+1)
    s = s.replace(/dd\b/,('0'+Math.abs(day).toString()).slice(-2))
    s = s.replace(/d\b/, day)
    s = s.replace(/EEEE\b/, dayNames[dayOfWeek])
    s = s.replace(/E\b/, dayNames[dayOfWeek].slice(0,3))
    s = s.replace(/hh\b/, ('0'+Math.abs(hours%12).toString()).slice(-2))
    s = s.replace(/h\b/, hours%12)
    s = s.replace(/mm\b/, ('0'+Math.abs(minutes).toString()).slice(-2))
    s = s.replace(/m\b/, minutes)
    s = s.replace(/ss\b/, ('0'+Math.abs(seconds).toString()).slice(-2))
    s = s.replace(/s\b/, seconds)
    s = s.replace(/HH\b/, ('0'+Math.abs(hours).toString()).slice(-2))
    s = s.replace(/H\b/, hours)
    s = s.replace(/a\b/, 'PM')

    return s
}

// const landing = new Date('July 20, 1969, 20:17:40')
// const returning = new Date('July 21, 1969, 17:54:12')
// const eclipse = new Date(-585, 4, 28)
// const ending = new Date('2 September 1945, 9:02:14')

// console.log(format(eclipse, 'y'))
// console.log(format(landing, 'y'))
// console.log(format(eclipse, 'yyyy'))
// console.log(format(landing, 'yyyy'))
// console.log(format(eclipse, 'yyyy G'))