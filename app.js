

const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require("body-parser");
const adminRoutes = require("./Routes/admin");
const shopRoute = require("./Routes/shop");


//bodyParser.urlencoded register a parser
//extended to parse non default value
app.use(bodyParser.urlencoded({extended:true}));

app.use('/admin',adminRoutes);

app.use(shopRoute);

//404 page
app.use((req,res,next) => {
    res.status(404).sendFile(path.join(__dirname,"Views","pageNotFound.html"));
})



app.listen(3000);
// const server = http.createServer(app);
// //listen will keep listenning 
// server.listen(3000);