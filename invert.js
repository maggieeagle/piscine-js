function invert(obj) {
    const entries = Object.entries(obj), res = {}
    for (let i = entries.length-1; i >= 0; i--) {
        res[entries[i][1]] = entries[i][0]
    }
    return res
}

// console.log(invert({1:'hey', 2:'Jude'}))