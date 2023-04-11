const https = require('https');
const fs = require('fs');

const app = require('./app');

const httpsOptions = {
    key: fs.readFileSync('./ssl/key.pem'),
    cert: fs.readFileSync('./ssl/cert.pem')
}

const server = https.createServer(httpsOptions, app);

const PORT = 3000;

server.listen(PORT, console.log(`server listening to port ${PORT}`));