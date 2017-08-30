var express = require("express");
var app = express();
var bodyparser = require("body-parser");
app.use("/",express.static(__dirname+"/public"));
app.use("/",bodyparser.urlencoded({extended:false}));
app.set("view engine","hbs");
app.set("views","./public");

app.post("/submit",function (req,res) {
    res.render(
        "index",
        {title : "Welcome", message : "Hey "+req.body.firstname+" , you have lived "+ ((new Date() - new Date(req.body.dob))/86400000).toFixed()+" days."
        });
});
app.listen(2000);