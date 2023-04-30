import * as http from 'node:http'
import { readFile } from 'fs';

const server = http.createServer();
let body

server.on('request', async function(req, res) {
    if (req.method === 'GET') {
        try {
            let name = req.url.slice(1, req.url.length)
            res.writeHead(200, { 'Content-Type': 'application/json' });
            await readFileAsync(name + '.json')
            res.end(body);
        } catch (err) {
            console.log(err)
            res.writeHead(500, { 'Content-Type': 'application/json' });
            if(err.code = 'ENOENT')  body = { error: "guest not found" }
            else body = { error: "server failed" }
            res.end(JSON.stringify(body));
        }
    } else {
        // If the request is not a GET request with the URL "/", send a 404 response
        res.writeHead(404, { 'Content-Type': 'application/json' });
        body = { error: "no page found" }
        res.end(JSON.stringify(body));
    }
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