function words(s) {
    return s.split(' ')
}

function sentence(arr){
    return arr.join(' ')
}

function yell(s){
    return s.toUpperCase()
}

function whisper(s) {
    return '*' + s.toLowerCase() + '*'
}

function capitalize(s) {
    return s[0].toUpperCase() + s.substr(1, s.length - 1)
}

console.log(words("Hello world !"))
console.log(sentence(['Hello', 'world', '!']))
console.log(yell("Hello world !"))
console.log(whisper("Hello world !"))
console.log(capitalize('str'))