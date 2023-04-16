const vowels = /([aeiouAEIOU])/g

function vowelDots(s) {
    s = s.replace(vowels, '$1.')
    return s
}