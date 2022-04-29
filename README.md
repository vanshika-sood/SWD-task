# SWD-task


## The task was to check whether an error is shown if home route is declared after another route

#### Conclusion: The web app shows no error if the home route is declared after another route . It was also observed that the app works even if the home route is not declared at all.


```
app.get("/test",function(req,res){
    res.send("Another route");
})

app.get("/",function(req,res){
    res.send("Home route");
})

```
