function all(object) {
    if (Object.entries(object).length == 0) return {}
    const keys = Object.keys(object);
    const values = Object.values(object);

    let resolved = Object.entries(object).map(([key, value]) => {
        let newKey, newValue
        if (key instanceof Promise) newKey = key.then(function(result){return result.value})
        else newKey = key
        if (value instanceof Promise) newValue = value.then(function(result){return result.value})
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
