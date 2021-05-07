const express = require('express');
 
const app = express();

app.use(express.static(__dirname+"/frontend"));
 
/*app.get("/", function(req, res){
    res.send("Welcome to Lalitha's Basic Site");
});*/
 
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


// Start the server
app.listen(PORT, function(){
    console.log("Server Starting running on http://localhost:"+PORT);
});
