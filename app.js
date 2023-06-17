const express=require("express");
const bodyparser=require("body-parser");
const app=express();
app.set("view engine","ejs");
app.use(bodyparser.urlencoded({extended:true}));

var items=[];
app.get("/",function(req,res){
    // res.send("hello");
    var today=new Date();
    var options={
        weekday:"long",
        day:"numeric",
        month:"long"
    };
    var day=today.toLocaleDateString("en-us",options);
    res.render("list",{DayName:day,InputFields:items});
});

app.post("/",function(req,res){
    item=req.body.validinput;
    items.push(item);
    res.redirect("/");
    
});

app.listen(3000,function(){
    console.log("server started successfully");
});