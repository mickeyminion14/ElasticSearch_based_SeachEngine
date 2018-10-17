const express = require('express');
const app = express();
const PORT = process.env.PORT || 7000; 
const HOST = process.env.host || '0.0.0.0';
const routes = require('./app/routes')



app.use('/', routes);
app.use(express.static('./public'));


app.listen(PORT, function () {
	console.log("server running on https://"+HOST+":"+PORT+"/");
});