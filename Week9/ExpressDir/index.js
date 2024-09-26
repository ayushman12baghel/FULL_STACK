const express =require("express");
const app=express();

// console.dir(app);

let port=8080;

app.listen(port,()=>{
    console.log(`app is listening on port ${port}`);
})

// app.use((req,res)=>{
//     // console.log(req);
//     console.log("request received");
//     // res.send("This is a basic response");
//     res.send({
//         name:"apple",
//         color:"red"
//     });
// })

app.get("/",(req,res)=>{
    res.send("hello i am root");
})

// app.get("/apple",(req,res)=>{
//     res.send({
//         name:"apple",
//         color:"red"
//     });
// })

// app.get("/:username",(req,res)=>{
//     console.log(req.params);
//     res.send()
// });

app.get("/search",(req,res)=>{
    let {q}=req.query;
    res.send(`These are the search results for query ${q}`);
});