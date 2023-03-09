const express = require('express');
const https = require('https');
const app = express();
const fs = require('fs');
const options = {
  key: fs.readFileSync('ssl/private.key'),
  cert: fs.readFileSync('ssl/certificate.crt')
}

app.use(express.static('public'));

const httpsServer = https.createServer(options, app);
httpsServer.listen(3000);