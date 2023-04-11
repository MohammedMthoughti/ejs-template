const http = require('http');
const https = require('https');
const fs = require('fs');
require('dotenv').config();

const app = require('./app');

let PROTOCOL;
let server;
const PORT = process.env.PORT || 3000;

if (process.env.NODE_ENV === 'production') {
    const httpsOptions = {
        key: fs.readFileSync('./ssl/key.pem'),
        cert: fs.readFileSync('./ssl/cert.pem')
    }
    server = https.createServer(httpsOptions, app);
    PROTOCOL = 'https';
} else {
    PROTOCOL = 'http';
    server = http.createServer(app);
}

server.listen(PORT, () => {
    console.log(`Server listening on ${PROTOCOL}://localhost:${PORT}`);
});