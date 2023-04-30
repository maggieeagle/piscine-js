// import * as http from 'node:http'
// import { writeFile } from 'fs/promises';
// import * as fs from 'node:fs';

// let body

// const server = http.createServer(async function (req, res) {
//     if (req.method === 'POST') {
//         let name = req.url.slice(1, req.url.length)
//         let filename = './guests/' + name + '.json'

//         let requestBody = '';
//         req.on('data', (chunk) => {
//             requestBody += chunk;
//         });
//         req.on('end', () => { 
//             canWrite(filename, function (err, isWritable) {
//             console.log(isWritable); // true or false
//             if (isWritable){
//             try {
//                 writeToFile(requestBody, filename)
//                 try {JSON.parse(requestBody)}
//                 catch(e) {
//                     requestBody = '{"answer" :"' + requestBody + '"}'
//                 }
//                 res.writeHead(201, { 'Content-Type': 'application/json' });
//                 res.end(requestBody);
//             } catch (err) {
//                 res.writeHead(500, { 'Content-Type': 'application/json' });
//                 body = { error: "server failed" }
//                 res.end(JSON.stringify(body));
//             }}
//             else {
//                 res.writeHead(500, { 'Content-Type': 'application/json' });
//                 body = { error: "server failed" }
//                 res.end(JSON.stringify(body));
//             }
//         });

//         });

//     }
// });

// server.listen(5000, () => console.log(`The server is listening on port 5000`));

// function canWrite(path, callback) {
//     fs.access(path, fs.constants.F_OK, function (err) {
//         if (err) {
//             callback(null, true); // file doesn't exist, return true
//           } else {
//             fs.access(path, fs.constants.W_OK, (err) => {
//               callback(null, !err); // file exists and is writable
//             });
//           }
//     });
// }

// function writeToFile(content, filename) {
//     writeFile(filename, content, err => {
//         if (err) console.log(err)
//     });
// }

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
                // if (!guest) {
                //   // If the request does not contain a guest key in the body
                //   res.writeHead(500, { 'Content-Type': 'application/json' });
                //   res.end(JSON.stringify({ error: 'Invalid request: missing guest key' }));
                //   return;
                // }
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
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
    }
});

// Start the server
server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

// Handle server errors
process.on('uncaughtException', () => {
    server.close(() => {
        console.log('Server closed');
    });
    console.log('Server failed');
});