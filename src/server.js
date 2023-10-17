// import React from "react";

// const express = require('express');
// const https = require('https');
// const fs = require('fs');

// const app = express();
// const port = process.env.PORT||3000;

// const privatekey = fs.readFileSync('server.key','utf8');
// const certificate = fs.readFileSync('server.cert','utf8');
// const credentials = { key:privatekey, cert:certificate};

// const httpsServer = https.createServer(credentials, app);

// app.get('/',(req,re) =>{
//     res.send('Hello,HTTPS WORLD!');
// });

// httpsServer.listen(port, () => {
//     console.log("Server is runing on htttps:/localhost:${port}")
// })