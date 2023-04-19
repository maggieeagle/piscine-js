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

function filterDistinctVowel(arr) {
    let re = /(?<=[^a|^e|^i|^o|^u|^A|^E|^I|^O|^U])[a|e|i|o|u|A|E|I|O|U](?=[^a|^e|^i|^o|^u|^A|^E|^I|^O|^U])/
    return arr.filter(word => re.test(word))
}

function multiFilter(arr) {
    let re = /[a|e|i|o|u|A|E|I|O|U]/
    return arr.filter(item => item.capital != null && item.capital.length >= 8 && filterStartVowel([item.name]) == [] && re.test(item.tag) && item.region != 'South')
}

console.log(filter1DistinctVowel(['alabama', 'apple', 'bear', 'euiofjshiie']))