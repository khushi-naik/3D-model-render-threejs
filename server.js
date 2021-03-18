const express = require('express')
const app = express()
const nStatic = require('node-static');
const http = require('http')

app.set('view engine', 'ejs');

var fileServer = new nStatic.Server('./public');

http.createServer(function (req, res) {

    fileServer.serve(req, res);
    console.log("connected to 6060");

}).listen(6060);
app.use(express.static('public'));

console.log("hello world")

app.get('/', function (req, res) {
    res.render('index')

});

app.listen(5000, function () {
    console.log("connected to server 5000");
});