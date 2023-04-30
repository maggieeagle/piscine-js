import * as http from 'node:http'
import { readFile } from 'fs';
import { readdir } from 'node:fs/promises';

let body

const server = http.createServer(async function (req, res) {
    if (req.method === 'GET') {
        let name = req.url.slice(1, req.url.length)
        try {
            const files = await readdir('./guests/');
            // console.log(files)
            if (files.indexOf(name) == -1) {
                res.writeHead(404, { 'Content-Type': 'application/json' });
                body = { error: "guest not found" }
            } else {
                res.writeHead(200, { 'Content-Type': 'application/json' });
                await readFileAsync('./guests/' + name + '.json')
            }
            res.end(body);
        } catch (err) {
            res.writeHead(500, { 'Content-Type': 'application/json' });
            body = { error: "server failed" }
            res.end(body);
        }
    }
});

// server.on('kill', function() {
//     if (server.listening === false) {
//         res.writeHead(500, { 'Content-Type': 'application/json' });
//         body = { error: "server failed" };
//         res.end(JSON.stringify(body));
//     }
// });

server.listen(5000, () => console.log(`The server is listening on port 5000`));

async function readFileAsync(file) {
    return new Promise((resolve, reject) => {
        readFile(file, 'utf8', (err, data) => {
            if (err) {
                reject(err);
            } else {
                body = data
                resolve();
            }
        });
    });
}