const express = require("express");
const app = express();


app.get("/test",function(req,res){
    res.send("Another route");
})

app.get("/",function(req,res){
    res.send("Home route");
})


app.listen(3000, function() {
  console.log("Server started on port 3000");
});