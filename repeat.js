function repeat(s, n) {
    if (n < 0) return "Error: Invalid count value: -1"
    let output = ""
    for (let i = 0; i < n; i++) {
        output += s
    }
    return output
}

console.log(repeat("hi", 3))