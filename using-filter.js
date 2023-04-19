function filterShortStateName(arr) {
    return arr.filter(word => word.length < 7)
}

function filterStartVowel(arr) {
    let re = /^[a|e|i|o|u|A|E|I|O|U]/
    return arr.filter(word => re.test(word))
}

function filter5Vowels(arr) {
    let re = /[a|e|i|o|u|A|E|I|O|U]/g
    return arr.filter(word => word.match(re).length >= 5)
}

function filter1DistinctVowel(arr) {
    let re = /[a|e|i|o|u|A|E|I|O|U]/g
    return arr.filter(word => re.test(word) && word.match(re).filter(x => x.toLowerCase() == word.match(re)[0].toLowerCase()).length == word.match(re).length);
}

function multiFilter(arr) {
    let re = /[a|e|i|o|u|A|E|I|O|U]/, re2 = /^[a|e|i|o|u|A|E|I|O|U]/
    return arr.filter(item => item.capital.length >= 8 && !re2.test(item.name) && re.test(item.tag) && item.region != 'South')
}