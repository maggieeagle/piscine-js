function getURL(dataSet) {
    let re = /https?:\/\/[\w|\-|\d]+(\.[\w|\.|\d]*){0,}[\w|\/|@|\.|\-]*(\?[\w|=|\#|\.]*)?(\&[\w|=|?|,|[|\]|%|\-]*){0,}/g
    return dataSet.match(re) == null ? [] : dataSet.match(re)
}

function greedyQuery(dataSet) {
    let re = /https?:\/\/[\w|\-|\d]+(\.[\w|\.|\d]*){0,}[\w|\/|@|\.|\-]*(\?[\w|=|\#|\.]*)?(\&[\w|=|?|,|[|\]|%|\-]*){2,}/g
    return dataSet.match(re) == null ? [] : dataSet.match(re)
}

function notSoGreedy(dataSet) {
    let re = /https?:\/\/[\w|\-|\d]+(\.[\w|\.|\d]*){0,}[\w|\/|@|\.|\-]*(\?[\w|=|\#|\.]*)?(\&[\w|=|?|,|[|\]|%|\-]*){1,}\b/g
    let match = dataSet.match(re), res = []
    match.forEach(url => {
        let r = /\&[\w|=|?|,|[|\]|%|\-]*/g
        if (url.match(r).length<=2) res.push(url)
    });
    return res == null ? [] : res
}
