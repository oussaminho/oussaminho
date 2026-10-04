const http = require('http');
const fs = require('fs');
const path = require('path');

const root = __dirname;
const port = Number(process.env.PORT || 3000);
const mime = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.ico': 'image/x-icon',
};

const server = http.createServer((req, res) => {
  const cleanPath = decodeURIComponent((req.url || '/').split('?')[0]);
  const requested = cleanPath === '/' ? '/index.html' : cleanPath;
  const publicPath = requested === '/manus-routes.json' ? '/public/manus-routes.json' : requested;
  const filePath = path.join(root, publicPath);
  if (!filePath.startsWith(root)) {
    res.writeHead(403); res.end('Forbidden'); return;
  }
  fs.readFile(filePath, (error, data) => {
    if (error) {
      if (error.code === 'ENOENT' && !path.extname(requested)) {
        fs.readFile(path.join(root, 'index.html'), (fallbackError, fallbackData) => {
          if (fallbackError) { res.writeHead(500); res.end('Server error'); return; }
          res.writeHead(200, { 'Content-Type': mime['.html'] }); res.end(fallbackData);
        });
        return;
      }
      res.writeHead(404); res.end('Not found'); return;
    }
    const extension = path.extname(filePath).toLowerCase();
    res.writeHead(200, { 'Content-Type': mime[extension] || 'application/octet-stream' });
    res.end(data);
  });
});

server.listen(port, '0.0.0.0', () => {
  console.log(`Oussaminho Creator Hub listening on ${port}`);
});
