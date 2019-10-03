
const http= require('http');


//import express
const express = require('express');
//initialize express object
const app = express();

const server = http.createServer(app);
//listen will keep listenning 
server.listen(3000);