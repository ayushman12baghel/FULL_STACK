const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
const methodOverride=require("method-override");
app.use(methodOverride("_method"));

const { v4: uuidv4 } = require("uuid");

app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

let posts = [
    {
        id: uuidv4(),
        username: "ayushman",
        content: "I love coding"
    },
    {
        id: uuidv4(),
        username: "ayush",
        content: "Hard work is Important"
    },
    {
        id: uuidv4(),
        username: "ayushman_baghel",
        content: "If you don't sacrifice for what you want, what you want becomes sacrifice"
    }
];

app.get("/posts", (req, res) => {
    res.render("index.ejs", { posts });
});

app.post("/posts", (req, res) => {
    let { username, content } = req.body;
    let id = uuidv4();
    posts.push({ id, username, content });
    res.redirect("/posts");
});
app.get("/posts/new", (req, res) => {
    res.render("new.ejs");
});

app.get("/posts/:id", (req, res) => {
    let { id } = req.params;
    let post = posts.find((p) => id === p.id);
    res.render("show.ejs", { post });
});

app.patch("/posts/:id",(req,res)=>{
    let { id } = req.params;
    let newContent=req.body.content;
    let post=posts.find((p)=>id===p.id);
    post.content=newContent;
    console.log(post);
    res.redirect("/posts");
});

app.get("/posts/:id/edit",(req,res)=>{
    let { id } = req.params;
    let post=posts.find((p)=>id===p.id);
    res.render("edit.ejs",{post});
});

app.delete("/posts/:id",(req,res)=>{
    let { id } = req.params;
    posts=posts.filter((p)=>id!==p.id);
    res.redirect("/posts");
})

app.listen(port, () => {
    console.log("Listening on port: " + port);
});
