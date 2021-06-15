const express = require('express');
const path = require('path') 
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser')
const courselib = require('./backend/lib/courseLib')
const config = require('./backend/config/config')
const dbconnectLib = require('./backend/lib/dbConnectLib')
var users = require('./backend/models/userModel')

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(__dirname+"/frontend"));
app.use(express.static(path.join(__dirname+"/frontend")))

var cookieParser = require("cookie-parser")
var session = require("express-session");
const MongoStore = require('connect-mongo');


dbconnectLib.connect()

app.use(session({
    secret: "thi is secret!!!!",
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 60 * 60 * 1000
    },
    store: MongoStore.create({ mongoUrl: process.env.MONGO_CONNECTION_STRING })

}))
 
// Heroku will automatically set an environment variable called PORT
const PORT = process.env.PORT || 3000;

app.use(cookieParser());
app.post('/api/login', function(req, res) {
    users.find(req.body, function(err, data) {
        if (err) { res.status(400).json({ msg: "Failed" }); } else if (data.length == 1) {
            req.session.userid = data[0]._id
            req.session.username = data[0].username
            console.log(req.session)
            res.redirect("/home");

        } else {

            res.redirect("/login");

        }
    });
})


var isAuthenticated = (req, res, next) => {
    if (req.session && req.session.userid)
        next();
    else
        return res.redirect("/login");
}


var isNotAuthenticated = (req, res, next) => {
    if (!req.session || !req.session.userid)
        next();
    else
        return res.redirect("/");
}

app.get("/home", isAuthenticated, (req, res) => {
    res.sendFile(__dirname + "/frontend/html/home.html")
})

app.get("/getdetails", isAuthenticated, (req, res) => {
    res.json({
        username: req.session.username
    });
})

app.get("/api/logout", isAuthenticated, (req, res) => {
    req.session.destroy(err => {
        if (err)
            return res.status(404).json({
                err: "error"
            })
    })

    return res.status(200).json({
        message: "succcessfully signout"
    })

})


app.post('/api/register', function(req, res) {
    users.find({ email: req.body.email }, function(err, data) {
        if (err) { res.status(400).json({ msg: "Failed" }); } else { //console.log(data);
            if (data.length > 0)
                res.status(200).json({ msg: "Saved Successful", result: data });
            else {

                var add = new users(req.body);
                add.save(function(err, record) {
                    if (err) {
                        res.redirect("/register");
                    } else {
                        res.redirect("/login");
                    }
                });
            }
        }
    });
})


app.get("/", function(req, res){
    let i = __dirname + "/frontend/html/home1.html";
    res.sendFile(i);
});
 
app.get("/resume", function(req, res){
    let i=__dirname + "/frontend/html/resume.html";
    res.sendFile(i);

});

// app.get("/home", function(req, res){
//     let i=__dirname + "/frontend/html/home1.html";
//     res.sendFile(i);

// });

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

app.get("/game", function(req, res)
{
    let i = __dirname + "/frontend/html/game.html";
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






