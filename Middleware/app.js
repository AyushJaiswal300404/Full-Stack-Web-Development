const express = require("express");
const app = express();


//middleware
// app.use((req,res,next)=>{
//     console.log("Middleware is working!")
//     next();
// });
//logger using middleware
// app.use((req, res, next) => {
//     req.time = new Date().toString();
//     console.log(req.method, req.path, req.time);
//     next();
// });

// app.use("/api",(req,res,next)=>{
//     let {token} = req.query;
//     if(token == "giveaccess"){
//         next();
//     }
//     res.send("Access denied");
// })

const checkToken = (req,res,next)=>{
    let {token} = req.query;
    if(token == "giveaccess"){
        next();
    }
    throw new Error("Access denied");
}

app.get("/api",checkToken, (req, res) => {
    res.send("API is working!");
});

app.get("/", (req, res ) => {
    res.send("Hello World. I am root!");
});

app.get("/random",(req,res)=>{
    res.send("this is a random page")
})

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});