function get(src, path) {
    let a = path.split('.'), current = src
    for (let i = 0; i < a.length; i++) {
        if (a[i] in current) current = current[a[i]]
        else return undefined
    }
    return current
}

const src = { nested: { key: 'peekaboo' } }
const path = 'nested.key'
console.log(get({ nested: { key: 'value' } }, 'nx.nx'))