/*const person = require('./person');

const person1 = new person('sushant vaidya', 24);

person1.greeting();
*/

//---------------------------------------------------------------------------

/*const logger = require('./logger');
const fs = require('fs');
const path = require('path');

const logger1 = new logger();

logger1.on('message', (data) => {
  fs.readFile(
    path.join(__dirname, '/test', 'event.txt'),
    'utf8',
    (err, data) => {
      if (err) throw err;
      console.log(data);
    }
  );
});

logger1.log('hello world');
*/

const fs = require('fs');
const path = require('path');
const http = require('http');

const server = http.createServer((req, res) => {
  //   if (req.url === '/') {
  //     fs.readFile(path.join(__dirname, 'test', 'index.html'), (err, content) => {
  //       res.writeHead(200, { 'Content-Type': 'text/html' });
  //       res.end(content);
  //     });
  //   }
  //   if (req.url === '/api/users') {
  //     const users = [
  //       { name: 'sushant vaidya', age: 24 },
  //       { name: 'john doe', age: 32 },
  //     ];
  //     res.writeHead(200, { 'Content-Type': 'applicationjson' });
  //     res.end(JSON.stringify(users[0].name));
  //   }

  // Build file path
  let filepath = path.join(
    __dirname,
    'test',
    req.url === '/' ? 'index.html' : req.url
  );
  //   console.log(filepath);
  //   res.end();

  // Extension of file
  let extname = path.extname(filepath);

  // Initial content type
  let contenttype = 'text/html';

  // check ext and set content type
  switch (extname) {
    case '.js':
      contenttype = 'text/javascript';
      break;
    case '.css':
      contenttype = 'text/css';
      break;
    case '.json':
      contenttype = 'application/json';
      break;
    case '.png':
      contenttype = 'image/png';
      break;
    case '.jpg':
      contenttype = 'image/jpg';
      break;
  }

  // Read file
  fs.readFile(filepath, (err, content) => {
    if (err) {
      if (err.code === 'ENOENT') {
        // Page not found
        fs.readFile(
          path.join(__dirname, 'test', '404.html'),
          (err, content) => {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(content, 'utf8');
          }
        );
      } else {
        // Some server error
        res.writeHead(500);
        res.end(`Server Error:${err.code}`);
      }
    } else {
      //Sucess
      res.writeHead(200, { 'Content-Type': contenttype });
      res.end(content);
    }
  });
});

const PORT = process.env.PORT || 8080;
server.listen(PORT, () =>
  console.log(`I have created APP and its running on the ${PORT}`)
);
