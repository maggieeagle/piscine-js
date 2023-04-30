let words = process.argv[2].replaceAll(' ', ' . ').split(' ')
let splitWords = []
words = words.map((word) => {
    let middle = Math.ceil(word.length / 2)
    return [word.slice(middle, word.length), word.slice(0, middle)]
})
words = words.flat().join('').replaceAll('.', ' ')
console.log(words)