let path = process.argv[2] == undefined ? './' : process.argv[2]

import { readdir } from 'node:fs/promises';
const files = await readdir(path);
let guests = []
for (const file of files) {
    guests.push(file.slice(0, file.indexOf('.')).split('_').reverse().join(' '))
}
guests.sort()
for (const guest of guests) {
    console.log(guests.indexOf(guest) + '.' + guest)
}