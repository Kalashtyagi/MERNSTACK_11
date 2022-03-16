const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(express.urlencoded({extended:true}));
app.get("/",function(request,response){
    response.sendFile(__dirname + "/index.html");
});
app.post("/",function(req,res){
    var n1 = Number(req.body.num1);
    var n2 = Number(req.body.num2);
    var result = n1 + n2;
    console.log(result);
});
app.listen(3000,function(){
    console.log("Server started");
});