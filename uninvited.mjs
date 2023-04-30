import * as http from 'node:http'
import { writeFile } from 'fs/promises';

let body

const server = http.createServer(async function (req, res) {
    if (req.method === 'POST') {
      let name = req.url.slice(1, req.url.length);
  
      let requestBody = '';
      req.on('data', (chunk) => {
        requestBody += chunk;
      });
  
      req.on('end', async () => {
        try {
          await writeToFile(requestBody, './guests/' + name + '.json');
          res.writeHead(201, { 'Content-Type': 'application/json' });
          res.end(requestBody);
        } catch (err) {
          console.error(err);
          res.writeHead(500, { 'Content-Type': 'application/json' });
          const body = { error: "server failed" };
          res.end(JSON.stringify(body));
        }
      });
    }
  });
  
  server.listen(5000, () => console.log(`The server is listening on port 5000`));
  
  function writeToFile(content, filename) {
    return new Promise((resolve, reject) => {
      writeFile(filename, content, (err) => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    });
  }