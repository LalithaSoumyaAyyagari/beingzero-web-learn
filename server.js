const express = require('express');
const path = require('path') 
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser')
const courselib = require('./backend/lib/courseLib')
const config = require('./backend/config/config')
const dbconnectLib = require('./backend/lib/dbConnectLib')

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(__dirname+"/frontend"));
app.use(express.static(path.join(__dirname+"/frontend")))

dbconnectLib.connect()
 
// Heroku will automatically set an environment variable called PORT
const PORT = process.env.PORT || 3000;

app.get("/", function(req, res){
    let i = __dirname + "/frontend/html/home.html";
    res.sendFile(i);
});
 
app.get("/resume", function(req, res){
    let i=__dirname + "/frontend/html/resume.html";
    res.sendFile(i);

});

app.get("/home", function(req, res){
    let i=__dirname + "/frontend/html/home.html";
    res.sendFile(i);

});

app.get("/google", function(req, res){
    let i = __dirname + "/frontend/html/googlePage.html";
    res.sendFile(i);
});

app.get("/color", function(req, res)
{
    let i = __dirname + "/frontend/html/colorPicker.html";
    res.sendFile(i);
});

app.get("/login", function(req, res)
{
    let i = __dirname + "/frontend/html/login.html";
    res.sendFile(i);
});

app.get("/register", function(req, res)
{
    let i = __dirname + "/frontend/html/register.html";
    res.sendFile(i);
});

app.get("/todo", function(req, res)
{
    let i = __dirname + "/frontend/html/todo.html";
    res.sendFile(i);
});

app.get("/crud", function(req, res)
{
    let i = __dirname + "/frontend/html/crud.html";
    res.sendFile(i);
});

app.get("/crud", courselib.getall);
app.delete("/crud/:idd", courselib.deleteone);
app.put("/crud/:idd", courselib.update);
app.post("/crud",courselib.addnewone);

// Start the server
app.listen(PORT, function(){
    console.log("Server Starting running on http://localhost:"+PORT);
});






