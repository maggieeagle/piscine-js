const hashCode = str =>
  (
    [...str].reduce((h, c) => (h = (h << 5) - h + c.charCodeAt(0)) & h, 0) >>> 0
  ).toString(36)

class Block {
    constructor(data, prev) {
        if (prev == null) prev = { index: 0, hash: "0" }
        this.index = prev.index + 1
        this.hash = hashCode(this.index + prev.hash + JSON.stringify(data))
        this.data = data
        this.prev = prev
    }
    chain(data) {
        return new Block(data, this)
    }
}

function blockChain(data, prev) {
    if (prev == null) {
        return new Block(data, prev)
    } else {
        return prev.chain(data, prev)
    }
}