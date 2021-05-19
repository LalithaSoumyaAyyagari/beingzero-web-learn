const mongoose = require('mongoose');

var password = process.env.Mongo_password;
var connection_string = "mongodb+srv://ALS1:"+password+"@cluster0.5w4v1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose.connect(connection_string, {});
var db = mongoose.connection;
db.on('connected', function () {
console.log('MongoDB connected!');
});

const courselib = require('./backend/lib/courselib');

courselib.delall(function(err, course){
    console.log(course);
})