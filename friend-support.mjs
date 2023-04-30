import * as http from 'node:http'
import { readFile } from 'fs';
import { readdir } from 'node:fs/promises';

const server = http.createServer();
let body

server.on('request', async function (req, res) {
    if (req.method === 'GET') {
        let name = req.url.slice(1, req.url.length)
        try {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            await readFileAsync('./guests/' + name + '.json')
            res.end(body);
            nonExistentFunction();
        } catch (err) {
            const files = await readdir('./guests/');
            console.log(files)
            if (files.indexOf(name) == -1) {
                res.writeHead(404, { 'Content-Type': 'application/json' });
                body = { error: "guest not found" }
            }
            else {
                // res.writeHead(500, { 'Content-Type': 'application/json' });
                // body = { error: "server failed" }
                throw new Error("Internal server error");
            }
            res.end(JSON.stringify(body));
        }
    } else {
        // If the request is not a GET request with the URL "/", send a 404 response
        res.writeHead(404, { 'Content-Type': 'application/json' });
        body = { error: "no page found" }
        res.end(JSON.stringify(body));
    }
});

server.on('error', (err) => {
    console.error('Server error:', err);
    // Send a 500 Internal Server Error response to clients
    res.writeHead(500, {'Content-Type': 'text/plain'});
    body = { error: "server failed" }
    res.end(JSON.stringify(body));
  });

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