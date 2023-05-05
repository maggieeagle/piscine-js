import * as http from 'node:http'
import * as fs from 'node:fs';

const port = 5000;

// const authorizedUsers = ['Caleb_Squires', 'Tyrique_Dalton', 'Rahima_Young'];
// const secretPassword = 'abracadabra';

// Create HTTP server
const server = http.createServer((req, res) => {
    if (req.method === 'POST') {
        const auth = req.headers['authorization'];
        if (!auth) {
            // If the request does not contain an authorization header
            res.writeHead(401, { 'Content-Type': 'application/json', 'WWW-Authenticate': 'Basic realm="Authentication required"' });
            res.end(JSON.stringify({ error: 'Unauthorized' }));
            return;
        }
        const [username, password] = Buffer.from(auth.split(' ')[1], 'base64').toString().split(':');
        if (!authorizedUsers.includes(username) || password !== secretPassword) {
            // If the request contains an invalid username or password
            res.writeHead(401, { 'Content-Type': 'application/json', 'WWW-Authenticate': 'Basic realm="Authentication required"' });
            res.end(JSON.stringify({ error: 'Unauthorized' }));
            return;
        }
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
                        res.setHeader('Body', JSON.stringify(JSON.parse(body)));
                        res.writeHead(200, { 'Content-Type': 'application/json' });
                        res.end(JSON.stringify(JSON.parse(body)));
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