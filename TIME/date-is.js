function isValid(date) {
    if (typeof date == 'string') return false
    if (typeof date == 'number' && date >= 0) return true
    return Number.isNaN(Date.parse(date)) && date != Date.now()? false : true
}

function isAfter(date1, date2) {
    if(isValid(date1) && isValid(date2)) {
        let date1int, date2int
        if (typeof date1 != 'number') {
            date1int = date1.getTime()
        }
        if (typeof date2 != 'number') {
            date2int = date2.getTime()
        }
        if (date1 > date2) return true
        return false
    }
    return false
}

function isBefore(date1, date2) {
    if(isValid(date1) && isValid(date2)) {
        let date1int, date2int
        if (typeof date1 != 'number') {
            date1int = date1.getTime()
        }
        if (typeof date2 != 'number') {
            date2int = date2.getTime()
        }
        if (date1 < date2) return true
        return false
    }
    return false
}

function isFuture(date) {
    if(isValid(date)) {
        if (date.getTime() > Date.now()) return true
        return false
    }
    return false
}

function isPast(date) {
    if(isValid(date)) {
        if (date.getTime() < Date.now()) return true
        return false
    }
    return false
}

console.log(isAfter(123123, 526))