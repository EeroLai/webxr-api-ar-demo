const express = require('express');
const http = require('http');
const app = express();
const fs = require('fs');

// const privateKey  = fs.readFileSync('./ssl/private.key');
// const certificate = fs.readFileSync('./ssl/certificate.crt');
//const credentials = { key: privateKey, cert: certificate};

app.use(express.static('public'));

const httpServer = http.createServer(app);
httpServer.listen(3000);