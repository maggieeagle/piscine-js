function RNA(s) {
    let res = ''
    for (let i = 0; i < s.length; i++) {
        switch (s[i]) {
            case 'G': {
                res += 'C'
                break
            }
            case 'C': {
                res += 'G'
                break
            }
            case 'T': {
                res += 'A'
                break
            }
            case 'A': {
                res += 'U'
                break
            }
        }
    }
    return res
}

function DNA(s) {
    let res = ''
    for (let i = 0; i < s.length; i++) {
        switch (s[i]) {
            case 'C': {
                res += 'G'
                break
            }
            case 'G': {
                res += 'C'
                break
            }
            case 'A': {
                res += 'T'
                break
            }
            case 'U': {
                res += 'A'
                break
            }
        }
    }
    return res
}