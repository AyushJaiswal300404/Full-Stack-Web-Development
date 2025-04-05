const express = require("express");
const app = express();
const port = 8080;
const path=require("path");
const { v4: uuidv4 } = require('uuid');

const methodOverride = require('method-override')
// Ensure method-override middleware is used to support PATCH and DELETE methods
app.use(methodOverride('_method'))

app.set("view engine", "ejs");
app.set("views",path.join(__dirname,"views"));

app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extended:true}));

let posts = [
    {   
        id:uuidv4(),
        username: "ayushblues",
        content: "I code "
    },
    {   
        id:uuidv4(),
        username: "shradhakhapra",
        content: "I teach coding "
    },
    {   
        id:uuidv4(),
        username: "siddharth",
        content: "I am a student "
    }
]

app.get("/posts", (req, res) => {
    res.render("index.ejs", { posts }); // Pass the posts array to the template
});

app.get("/posts/new", (req, res) => {
    res.render("new.ejs");
});

app.post("/posts", (req, res) => {
    let { username, content } = req.body;
    let id = uuidv4();
    posts.push({ id,username, content });
    // res.send("Post request working")
    res.redirect("/posts");
});

app.get("/posts/:id", (req, res) => {
    let {id} =req.params;
    let post = posts.find((p) => id==p.id);
    res.render("show.ejs",{ post });
});

app.patch("/posts/:id", (req, res) => { 
    let { id } = req.params;
    let newContent = req.body.content;
    let post = posts.find((p) => id == p.id);
    if (post) {
        post.content = newContent;
        res.redirect("/posts"); 
    } else {
        res.status(404).send("Post not found");
    }
});

app.get("/posts/:id/edit",(req, res)=>{
    let {id} =req.params;
    let post = posts.find((p) => id==p.id);
    res.render("edit.ejs",{ post });
});

app.delete("/posts/:id", (req,res)=>{
    let {id} =req.params;
    posts = posts.filter((p) => id!==p.id);
    res.redirect("/posts")
})

app.listen(port,()=>{
    console.log("listening to port: 8080");
});
