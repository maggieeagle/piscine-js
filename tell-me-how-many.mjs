let path = process.argv[2] == undefined ? './' : process.argv[2]

import { readdir } from 'node:fs/promises';
const files = await readdir(path);
let count = 0
for (const file of files) count++
console.log(count)