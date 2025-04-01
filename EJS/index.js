const express= require('express');
const app= express();
const path = require('path');

const port = 8080;

app.set("view engine", "ejs");
app.set("views",path.join(__dirname,"/views") )

app.get("/", (req, res) => {
    // res.send("This is home");
    res.render("home.ejs")
});

app.get("/ig/:username", (req, res)=>{
    // const followers = ["Adam", "Sam", "Sophie", "John", "Doe"];
    // let {username}= req.params;
    // console.log(`Username is ${username}`);
    // res.render("instagram.ejs", {username, followers})

    let {username}= req.params;

    const instaData = require("./data.json");
    const data = instaData[username];
    if(data){
        res.render("instagram.ejs", {data}) 
    }else{
        res.render("error.ejs",)
    }
    
})

app.get("/rolldice", (req, res) => {
    // res.send("This is home");
    // res.render("rolldice.ejs")
    let diceVal = Math.floor(Math.random()*6)+1;
    res.render("rolldice.ejs", {diceVal});
});
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});