function all(obj) {
    if (Object.entries(obj).length == 0) return {}
    let resolved = Object.entries(obj).map(([key, value]) => {
        let newKey, newValue
        // if (key instanceof Promise) newKey = key.then(function(result){return result})
        /* else*/ newKey = key
        console.log(value instanceof Promise)
        if (value instanceof Promise) {
            newValue = await resolveValue(value)
        }
        else newValue = value
        return [newKey, newValue]
    })
    return Object.fromEntries(resolved)

}

async function resolveValue(value) {
    return value.then(function (result) {
        console.log('result', result)
        return result
    })
}

console.log(all({
    a: Promise.resolve(1),
    b: Promise.resolve(true),
}))
