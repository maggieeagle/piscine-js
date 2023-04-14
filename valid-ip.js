function findIP(s) {
    let re = /(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})(:(\d*))?/g
    let matches = s.match(re), res = []
    if (matches == null) return []
    for (let i = 0; i < matches.length; i++) {
        const match = matches[i];
        // console.log('match', match)
        let re1 = /(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})(:(\d*))?/
        const groups = re1.exec(match);
        // console.log(groups);
        if (groups[6] == undefined) {
            if ((groups[1][0] != 0 || groups[1] == '0') && groups[1] >= 0 && groups[1] <= 255 &&
                (groups[2][0] != 0 || groups[2] == '0') && groups[2] >= 0 && groups[2] <= 255 &&
                (groups[3][0] != 0 || groups[3] == '0') && groups[3] >= 0 && groups[3] <= 255 &&
                (groups[4][0] != 0 || groups[4] == '0') && groups[4] >= 0 && groups[4] <= 255) {
                res.push(match)
            }
        } else {
            if ((groups[1][0] != 0 || groups[1] == '0') && groups[1] >= 0 && groups[1] <= 255 &&
                (groups[2][0] != 0 || groups[2] == '0') && groups[2] >= 0 && groups[2] <= 255 &&
                (groups[3][0] != 0 || groups[3] == '0') && groups[3] >= 0 && groups[3] <= 255 &&
                (groups[4][0] != 0 || groups[4] == '0') && groups[4] >= 0 && groups[4] <= 255 &&
                groups[6] > 0 && groups[6] <= 65535) {
                res.push(match)
            }
        }
    }
    return res == null ? [] : res
}