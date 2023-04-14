function vowelDots(s) {
    const vowels = /([aeiou])/g
    s = s.replace(vowels, '$1.')
    return s
}