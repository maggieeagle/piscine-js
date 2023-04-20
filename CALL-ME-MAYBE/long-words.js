function longWords(arr) {
    return arr.every((value) => typeof value == 'string' && value.length >= 5)
}

function oneLongWord(arr) {
    return arr.some((value) => typeof value == 'string' && value.length >= 10)
}

function noLongWords(arr) {
    return !arr.some((value) => typeof value == 'string' && value.length >= 7)
}