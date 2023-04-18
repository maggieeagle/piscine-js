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

    s = s.replace(/yyyy\b/, year)
    s = s.replace(/y\b/, year.toString().slice(1, 4))
    s = s.replace(/GGGG\b/, 'Anno Domini')
    s = s.replace(/G\b/, 'AD')
    s = s.replace(/MMMM\b/, monthNames[parseInt(month)])
    s = s.replace(/MMM\b/, monthNames[parseInt(month)].slice(0,3))
    s = s.replace(/MM\b/, month>8?month+1:'0'+(month+1).toString())
    s = s.replace(/M\b/, (month+1)>9?(month+1).toString()[1]:month+1)
    s = s.replace(/dd\b/,day>9?day.toString():'0'+day)
    s = s.replace(/d\b/, day>9?day.toString()[1]:day)
    s = s.replace(/EEEE\b/, dayNames[dayOfWeek])
    s = s.replace(/E\b/, dayNames[dayOfWeek].slice(0,3))
    s = s.replace(/hh\b/, hours%12 > 9 ? hours%12 : '0' + hours%12)
    s = s.replace(/h\b/, hours%12>9?(hours%12).toString()[1]:hours%12)
    s = s.replace(/mm\b/, minutes>9?minutes.toString():'0'+minutes)
    s = s.replace(/m\b/, minutes>9?minutes.toString()[1]:minutes)
    s = s.replace(/ss\b/, seconds>9?seconds.toString():'0'+seconds)
    s = s.replace(/s\b/, seconds>9?seconds.toString()[1]:seconds)
    s = s.replace(/HH\b/, hours > 9 ? hours : '0' + hours)
    s = s.replace(/H\b/, hours>9?hours.toString()[1]:hours)
    s = s.replace(/a\b/, 'PM')

    return s
}

const d = new Date('7 January 1985, 3:08:19')

console.log(format(d, 'HH(mm)ss [dd] <MMM>'))