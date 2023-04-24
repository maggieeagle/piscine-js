function pick(obj, keys) {
    let string
    if (typeof keys != 'string') string = keys.join(',')
    else string = keys
    let arr = Object.entries(obj).filter(pair => string.includes(pair[0]))
    return Object.fromEntries(arr)
}

function omit(obj, keys) {
    let string
    if (typeof keys != 'string') string = keys.join(',')
    else string = keys
    let arr = Object.entries(obj).filter(pair => !string.includes(pair[0]))
    return Object.fromEntries(arr)
}

console.log(pick({1:'hey', 2:'Jude', 3:'how', four:'are'}, ['four', '2']))