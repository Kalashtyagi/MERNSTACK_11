const express = require("express");
const bodyparser = require("body-parser");
var app = express();
app.set("view engine","ejs");
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));

const mongoose = require("mongoose"); //import mongoose module
mongoose.connect("mongodb://localhost:27017/todo");
const trySchema = new mongoose.Schema({
    name: String
});
const item = mongoose.model("task",trySchema);
const todo = new item({
    name : "complete my course"
});
const todo1 = new item({
    name : "Study"
});
const todo2 = new item({
    name : "mernstack"
});
const todo3 = new item({
    name : "dancing"
});
const todo4 = new item({
    name : "speaking"
});
// todo1.save();
// todo2.save();
// todo3.save();
// todo4.save();
// var items = [];
app.get("/",function(req,res){
    item.find({},function(err,foundItems){
        if(err){
            console.log(err);
        }
        else{
            res.render("list",{ejes:foundItems});

        }
    });
});
app.post("/",function(req,res){
    const itemName =   req.body.ele1;
    const todo5 = new item({
        name : itemName
    });
    todo5.save();
    res.redirect("/");
    
});
app.post("/delete",function(req,res){
    const checked = req.body.checkbox1;
    item.findByIdAndRemove(checked,function(err){
        if(!err){
            console.log("deleted");
            res.redirect("/");
        }
    })
})
app.listen(1000,function(){
    console.log("server started");
});