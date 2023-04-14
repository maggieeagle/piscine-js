function findIP(s) {
    let re = /([123456789]{1}\d{0,2})\.([123456789]{1}\d{0,2})\.([123456789]{1}\d{0,2})\.([123456789]{1}\d{0,2})(:(\d*))?/g
    let matches = s.match(re), res = []
    if (matches.length == 0) return []
    for (let i = 0; i < matches.length; i++) {
        const match = matches[i];
        // console.log('match', match)
        const groups = re.exec(match);
        // console.log(groups);
        if (groups.length[5] == undefined) {
            if (groups[1] > 0 && groups[1] < 255 &&
                groups[2] > 0 && groups[2] < 255 &&
                groups[2] > 0 && groups[2] < 255 &&
                groups[3] > 0 && groups[3] < 255) {
                res.push(match)
            }
        } else {
            if (groups[1] > 0 && groups[1] < 255 &&
                groups[2] > 0 && groups[2] < 255 &&
                groups[2] > 0 && groups[2] < 255 &&
                groups[3] > 0 && groups[3] < 255 &&
                groups[5] > 0 && groups[5] < 65535) {
                res.push(match)
            }
        }
    }
    return res == null ? [] : res
}

// let data = '55.234.100.20:34555'
// console.log(findIP(data))