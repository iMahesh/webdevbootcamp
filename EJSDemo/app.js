var express=require("express");
var app=express();

app.get("/",function(req,res){
   res.send("This is Home page"); 
});

app.listen(process.env.PORT,process.env.IP,function(){
   console.log("Server has started.."); 
});

