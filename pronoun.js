const pronouns = ['i', 'you', 'he', 'she', 'it', 'they', 'we']

function pronoun(str) {
    str = str.toLowerCase()
    let words = str.split(/\s|\s,|\n|,\n/)
    // console.log(words)
    let found = pronouns.filter(pronoun => words.indexOf(pronoun) != -1)
    // console.log(found)
    let obj = {}
    found.forEach(pronoun => {
        var count = words.reduce(function (n, val) {
            return n + (val === pronoun);
        }, 0);
        obj[pronoun] = { word: getWordsAfter(words, pronoun), count: count }
    });
    return obj
}

function getWordsAfter(arr, val) {
    var i=-1, words = [];
    while ((i = arr.indexOf(val, i+1)) != -1){
        if (pronouns.indexOf(arr[i+1]) == -1)
        words.push(arr[i+1]);
    }
    return words;
}

// const ex = 'If he you want to buy something you have to pay.'
// const ex2 = 'Using Array Destructuring, you you can iterate through objects easily.'

// console.log(pronoun(ex))
// console.log(pronoun(ex2))

// console.log(pronoun('I buy,\ni to,\nYOU buy,\nit have,\nIt buys,\nit is,\nyou go'))