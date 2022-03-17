const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/data");
const fruitsSchema = new mongoose.Schema(
    {
        name : String,
        rating : Number
        // {
        //     type : Number,
        //     min: 1,
        //     max: 10
        // }

    }
);
const item = mongoose.model("firsts",fruitsSchema);
//connect Documents
const personSchema = new mongoose.Schema(
    {
        name : String,
        age : Number,
        fav : fruitsSchema
    }
);
const per = mongoose.model("favperson",personSchema);
const grapes = new item(
    {
        name: "cheery",
        rating: 9
    }
);
const person1 = new per(
    {
        name : "kalash",
        age : 21,
        fav : grapes
    }
);
person1.save();
// const element = new item(
//     {
//         name : "Apple",
//         rating: 10
//     }
// );
// const element = new item(
//     {
//         name : "watermelon",
//         rating : 25
//     }
// );
// element.save();
// const element3 = new item({
//     name : "guava",
//     rating: 8
// });
// item.insertMany([element2,element3],function(err){
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log("Inserted");
//     }
// });

// item.find(function(err,data){
//     if(err){
//         console.log(err);
//     }
//     else{
//           data.forEach(function(data){
//               console.log(data.name);
//           })
//     }
// });
// this above code is for whwn we want to display our data in node js terminal.

// item.deleteOne({name:"Apple"},function(err) //delete
// {
//     if(err)
//         console.log(err);
//     else
//         console.log("deleted");
// });
// item.updateOne({name:"Apple"},{name:"pineapple"},function(err){ //updated query
//     if(err)
//         console.log(err);
//     else 
//         console.log("Updated");
// });