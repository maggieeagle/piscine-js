function getURL(dataSet) {
    let re = /https?:\/\/\w+\.[\w|\.]*\/[\w|?|=|&]*/g
    return dataSet.match(re) == null ? [] : dataSet.match(re)
}

function greedyQuery(dataSet) {
    let re = /https?:\/\/\w+\.[\w|\.]*\/\w*\?[\w|=]*(\&[\w|=]*){2,}/g
    return dataSet.match(re) == null ? [] : dataSet.match(re)
}

function notSoGreedy(dataSet) {
    let re = /https?:\/\/\w+\.[\w|\.]*\/\w*\?[\w|=]*(\&[\w|=]*){2,3}/g
    return dataSet.match(re) == null ? [] : dataSet.match(re)
    
}

const s = 'qqq http:// qqqq q qqqqq https://something.com/hello qqqqqqq qhttp://example.com/hello?you=something&something=you'
const s1 = 'jfbvjdhf'
console.log(getURL(s))
console.log(getURL(s1))