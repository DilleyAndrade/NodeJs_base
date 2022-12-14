const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');
const adminRouter = require('./router/admin');
const shopRouter = require("./router/shop");
app.use(bodyParser.urlencoded({extended:false}));
app.use(adminRouter);
app.use(shopRouter);
app.use(express.static(path.join(__dirname, 'public')));
app.use((req, res, next)=>{
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});
app.listen(3000);