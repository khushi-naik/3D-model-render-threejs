const express = require('express')
const app = express()
const nStatic = require('node-static');
const http = require('http')

app.set('view engine', 'ejs');
var port= process.env.PORT || 3000 ;

//var fileServer = new nStatic.Server('./public');

/*http.createServer(function (req, res) {

    fileServer.serve(req, res);
    console.log("connected to 6060");

}).listen(6060);*/
app.use(express.static('public'));

console.log("hello world")

app.get('/', function (req, res) {
    res.render('index')

});

app.listen(port,process.env.IP,()=>{
    console.log("Server is running on port 3000");
})