const express = require("express");
const app = express();
const helmet = require('helmet');
const ExpressError=require("./ExpressError");

app.use(helmet());
// app.use((req, res, next) => {
//     console.log("Hi I am a middleware");
//     next();
//     console.log("this is after next()");
// })
// app.use((req, res, next) => {
//     console.log("Hi I am a 2nd middleware");
//     next();
// })

//logger-morgan
// app.use((req,res,next)=>{
//     req.time=new Date(Date.now()).toString();
//     console.log(req.method,req.path,req.hostname,req.time);
//     next();
// })

const checkToken=(req,res,next)=>{
    let {token}=req.query;
    if(token==='giveaccess'){
        next();
    }
    throw new ExpressError(401,"Access Denied");
};

app.get("/api",checkToken,(req,res)=>{
    res.send("data");
})


app.get("/", (req, res) => {
    res.send("hi I am root");
});

app.get("/random", (req, res) => {
    res.send("this is a random page");
})

app.get("/err",(req,res)=>{
    abcd=abcd;
})

app.use((err,req,res,next)=>{
    let{status=500,message="Some error occured"}=err;
    res.status(status).send(message);
})

app.get("/admin",(req,res)=>{
    throw new ExpressError(403,"Access Denied");
})

//404
// app.use((req,res)=>{
//     res.status(404).send("Page not found");
// })
app.listen(8080, () => {
    console.log("server is listening to port 8080");
})