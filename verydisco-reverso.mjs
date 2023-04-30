const filename = process.argv[2]

import { readFile } from 'fs';
readFile(filename, 'utf8', function(err, words){
    words = words.replaceAll(' ', ' . ').split(' ')
    words = words.map((word) => {
        let middle = Math.floor(word.length / 2)
        return [word.slice(middle, word.length), word.slice(0, middle)]
    })
    words = words.flat().join('').replaceAll('.', ' ')
    console.log(words)
});