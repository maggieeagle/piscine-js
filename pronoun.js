const pronouns = ['i', 'you', 'he', 'she', 'it', 'they', 'we']

function pronoun(str) {
    let words = str.split(/\s|\s,/)
    let found = pronouns.filter(pronoun => str.includes(' ' + pronoun + ' '))
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