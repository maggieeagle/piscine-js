let path = process.argv[2] == undefined ? './' : process.argv[2]

import { readdir } from 'node:fs/promises';
import { readFile } from 'fs';
import { writeFile } from 'fs/promises';

const files = await readdir(path);
let guests = []
for (const file of files) {
   await readFileAsync(file)
}
guests.sort()
let list = ''
for (const guest of guests) {
    list += guests.indexOf(guest) + 1 + '. ' + guest + '\n'
}
writeToFile(list.slice(0, -1))

function writeToFile(content) {
    writeFile('vip.txt', content, err => {
        if (err) console.log(err)
    });
}

async function readFileAsync(file) {
    return new Promise((resolve, reject) => {
      readFile(path + '/' + file, 'utf8', (err, data) => {
        if (err) {
          reject(err);
        } else {
          if (JSON.parse(data).answer == "yes") {
            guests.push(file.slice(0, file.indexOf('.')).split('_').reverse().join(' '));
          }
          resolve();
        }
      });
    });
  }