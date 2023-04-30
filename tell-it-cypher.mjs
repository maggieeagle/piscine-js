const file = process.argv[2]
const keyword = process.argv[3]
const newName = process.argv[4]==undefined?(keyword=='encode'?'cypher.txt':'clear.txt'):process.argv[4]

import { Buffer } from 'node:buffer';
import { readFile } from 'fs';
import { writeFile } from 'fs/promises';

let fileData = ''
switch (keyword) {
    case 'encode':
        await readFileAsync(file)
        const buf1 = Buffer.from(fileData)
        writeToFile(buf1.toString('base64'), newName)
        break;
    case 'decode':
        await readFileAsync(file)
        const buf2 = new Buffer.from(fileData, 'base64')
        writeToFile(buf2.toString(), newName)
        break;
    default:
        console.log('no keyword')
}

async function readFileAsync(file) {
    return new Promise((resolve, reject) => {
      readFile(file, 'utf8', (err, data) => {
        if (err) {
          reject(err);
        } else {
          fileData = data
          resolve();
        }
      });
    });
  }

function writeToFile(content, filename) {
    writeFile(filename, content, err => {
        if (err) console.log(err)
    });
}