import * as http from 'node:http'
import { writeFile } from 'fs/promises';
import * as fs from 'node:fs';

let body

const server = http.createServer(async function (req, res) {
    if (req.method === 'POST') {
        let name = req.url.slice(1, req.url.length)
        let filename = './guests/' + name + '.json'

        let requestBody = '';
        req.on('data', (chunk) => {
            requestBody += chunk;
        });
        req.on('end', () => { 
            canWrite(filename, function (err, isWritable) {
            console.log(isWritable); // true or false
            if (isWritable){
            try {
                JSON.parse(requestBody)
                writeToFile(requestBody, filename)
                res.writeHead(201, { 'Content-Type': 'application/json' });
                res.end(requestBody);
            } catch (err) {
                res.writeHead(500, { 'Content-Type': 'application/json' });
                body = { error: "server failed" }
                res.end(JSON.stringify(body));
            }}
            else {
                res.writeHead(500, { 'Content-Type': 'application/json' });
                body = { error: "server failed" }
                res.end(JSON.stringify(body));
            }
        });
            
        });

    }
});

server.listen(5000, () => console.log(`The server is listening on port 5000`));

function canWrite(path, callback) {
    fs.access(path, fs.constants.F_OK, function (err) {
        if (err) {
            callback(null, true); // file doesn't exist, return true
          } else {
            fs.access(path, fs.constants.W_OK, (err) => {
              callback(null, !err); // file exists and is writable
            });
          }
    });
}

function writeToFile(content, filename) {
    writeFile(filename, content, err => {
        if (err) console.log(err)
    });
}