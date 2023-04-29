function all(obj) {
    if (Object.entries(obj).length == 0) return {}
    let resolved = Object.entries(obj).map(([key, value]) => {
        let newKey, newValue
        // if (key instanceof Promise) newKey = key.then(function(result){return result})
        /* else*/ newKey = key
        console.log(value instanceof Promise)
        if (value instanceof Promise) newValue = value.then(function(result){return result})
        else newValue = value
        return [newKey, newValue]
    })
    return Object.fromEntries(resolved)


    // return Promise.all(values).then((resolvedValues) => {
    //   const resolvedObject = {};
    //   for (let i = 0; i < keys.length; i++) {
    //     resolvedObject[keys[i]] = resolvedValues[i];
    //   }
    //   return resolvedObject;
    // });
}
