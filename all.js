function all(object) {
    let resolved = Object.entries(object).map(([key, value]) => [key, Promise.resolve(value)]);
    return Object.fromEntries(resolved)
}