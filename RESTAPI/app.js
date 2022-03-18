const express = require("express");
const bodyparser = require("body-parser");
const ejs = require("ejs");
const mongoose = require('mongoose');   //imported all dependecies
const req = require("express/lib/request");
const app = express();
app.set('view engine',ejs);
app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));
mongoose.connect("mongodb://localhost:27017/api",{         //connected mongodb
    useNewUrlParser: true
});
const articleSchema = {
    name : String,
    title: String
};

const Article = mongoose.model("item",articleSchema); //article is the model name and items is the collection name
app.get("/articles",function(req,res){ //article is the route
    Article.find(function(err,found){
        if(err){
            console.log(err); //displayed in terminal
        }
        else{
            res.send(found);  //displayed in server
        }
    });
});
app.post("/articles",function(req,res){
    const element1 = new Article({
         name: req.body.name,
         title: req.body.title
    });
    element1.save();

});
// app.delete("/articles",function(req,res){
//     Article.deleteMany(function(err){
//         if(!err){
//             res.send("Deleted");
//         }
//         else{
//             res.send(err);
//         }
//     });
// });
// localhost:3000/articles/aws //user want to see the article related to aws
app.get("/articles/:articleTitle",function(req,res){   //can add title name to search in route
         Article.findOne({title:req.params.articleTitle},function(err,articleFound){
             if(err){
                 console.log(err);
             }
             else{
                 res.send(articleFound);
             }

         });
});
app.put("/articles/:articleTitle",function(req,res){ //update entire document
    Article.updateOne(
        {title:req.params.articleTitle},
        {title: req.body.title, name: req.name},
        {overwrite: true},
        function(err){
            if(err){
                console.log(err);
            }
            else{
                res.send("updated");
            }
        });
});
app.patch("/articles/:articleTitle",function(req,res){ //update value at the prticulr position
    Article.updateOne(
        {title:req.params.articleTitle},
        {$set: {name:req.body.name}},
        function(err){
            if(err){
                console.log(err);
            }
            else{
                res.send("succes");
            }
        });
});
app.delete("/articles/:articleTitle",function(req,res){ //deleted only specific record.
    Article.deleteOne({title:req.params.articleTitle},function(err){
        if(err){
            console.log(err);
        }
        else{
            res.send("deleted");
        }
    })
     

})
app.listen(3000,function()    //created server using listen function
{
    console.log("Server started on port 3000");
})

