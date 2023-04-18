function isValid(date) {
    if (typeof date == 'string') return false
    if (typeof date == 'number' && date >= 0) return true
    return Number.isNaN(Date.parse(date)) && date != Date.now()? false : true
}

function isAfter(date1, date2) {
    if(isValid(date1) && isValid(date2)) {
        if (date1.getTime() > date2.getTime()) return true
        return false
    }
    return false
}

function isBefore(date1, date2) {
    if(isValid(date1) && isValid(date2)) {
        if (date1.getTime() < date2.getTime()) return true
        return false
    }
    return false
}

function isFuture(date) {
    if(isValid(date)) {
        if (date.getTime() > new Date.now()) return true
        return false
    }
    return false
}

function isPast(date) {
    if(isValid(date)) {
        if (date.getTime() < new Date.now()) return true
        return false
    }
    return false
}

console.log(isValid(new Date('1995-12-17T03:24:00').getTime()))