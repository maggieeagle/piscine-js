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
    let re = /[a|e|i|o|u|A|E|I|O|U]/
    return arr.filter(item => item.capital != null && item.capital.length >= 8 && filterStartVowel([item.name]) == [] && re.test(item.tag) && item.region != 'South')
}

console.log(filter1DistinctVowel([
    'Alabama',
    'Alaska',
    'Arizona',
    'Arkansas',
    'California',
    'Colorado',
    'Connecticut',
    'Delaware',
    'Florida',
    'Georgia',
    'Hawaii',
    'Idaho',
    'Illinois',
    'Indiana',
    'Iowa',
    'Kansas',
    'Kentucky',
    'Louisiana',
    'Maine',
    'Maryland',
    'Massachusetts',
    'Michigan',
    'Minnesota',
    'Mississippi',
    'Missouri',
    'Montana',
    'Nebraska',
    'Nevada',
    'New Hampshire',
    'New Jersey',
    'New Mexico',
    'New York',
    'North Carolina',
    'North Dakota',
    'Ohio',
    'Oklahoma',
    'Oregon',
    'Pennsylvania',
    'Rhode Island',
    'South Carolina',
    'South Dakota',
    'Tennessee',
    'Texas',
    'Utah',
    'Vermont',
    'Virginia',
    'Washington',
    'West Virginia',
    'Wisconsin',
    'Wyoming',
  ]))