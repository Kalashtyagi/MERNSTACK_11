// Display current date in front of user screen with the help of js Date() object.
const express = require('express');
const bodyparser = require('body-parser');
var app = express();
app.set("view engine", "ejs");
var daytext="";
app.get("/",function(req,res){
    var d = new Date();
    var day = d.getDay();
    if(day==6 || day ==0)
       daytext = "weekend";
    else
        daytext = "weekday";
        res.render("list",{dayej:daytext});
});
        
    // if(day==0)
    //     res.send("Day is Sunday");
    // else if(day==1)
    //     res.send("Day is Monday");
    // else if(day==2)
    //     res.send("Day is Tuesday");
    // else if(day==3)
    //     res.send("Day is Wednesday");
    // else if(day==4)
    //     res.send("Day is Thursday");
    // else if(day==5)
    //     res.send("Day is Friday");    
    // else
    //     res.send("Day is Saturday");

        
// });
app.listen(1000,function(){
    console.log("Server started");
});
