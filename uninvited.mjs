import * as http from 'node:http'
import * as fs from 'node:fs';

const port = 5000;

// Create HTTP server
const server = http.createServer((req, res) => {
    if (req.method === 'POST') {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });
        req.on('end', () => {
            try {
                const guest = req.url.slice(1, req.url.length)
                const filename = './guests/' + guest + '.json';
                fs.writeFile(filename, body, (err) => {
                    if (err) {
                        // If there was an error writing the file
                        res.writeHead(500, { 'Content-Type': 'application/json' });
                        body = { error: "server failed" }
                        res.end(JSON.stringify(body));
                    } else {
                        // If the file was successfully written
                        res.writeHead(201, { 'Content-Type': 'application/json' });
                        res.end(body);
                    }
                });
            } catch (error) {
                res.writeHead(500, { 'Content-Type': 'application/json' });
                body = { error: "server failed" }
                res.end(JSON.stringify(body));
            }
        });
    }
});

// Start the server
server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});