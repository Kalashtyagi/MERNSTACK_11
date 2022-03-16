const express = require('express');
const app = express();
// app.get("/",function(req,res){
//     res.send("Hi welcome to our webpage!!");

// });
// app.get("/about",function(request,respond){
//     respond.send("hi, i have created this about section");
// })
// app.get("/services",function(req,res){
//     res.send("we provide many services as app development and web development");
// })
app.get("/",function(req,res){
    res.sendFile(__dirname + "/index.html"); //respond using html file.
});
app.listen(3000,function(){
    console.log("server started");
});
