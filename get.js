function get(src, path) {
    let a = path.split('.'), current = src
    for (let i = 0; i < a.length; i++) {
        current = current[a[i]]
    }
    return current
}