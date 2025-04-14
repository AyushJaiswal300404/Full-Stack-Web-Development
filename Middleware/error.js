const express = require("express");
const app = express();
const ExpressError = require("./ExpressError")

const checkToken = (req,res,next)=>{
    let {token} = req.query;
    if(token == "giveaccess"){
        next();
    }
    throw new ExpressError("Access denied",401);
}

app.get("/api",checkToken, (req, res) => {
    res.send("API is working!");
});

app.get("/err",(req,res)=>{
    abcd=abcd;
})

app.get("/admin",(req,res)=>{
    throw  new ExpressError("Access is forbidden",403);
    //For async function, next(new ExpressError("Access is forbidden",403)) or use function wrapAsync
    // function asyncWrap(fn){
    //     return function(req,res,next){
    //         fn(req,res,next).catch(err=>next(err));
    //     }
    // }
})

//Mongoose error
app.use((err,req,res,next)=>{
    if(err.name === "CastError"){
        err.status = 400;
        err.message = "Invalid ID format";
    }
    if(err.name === "ValidationError"){
        err.status = 400;
        err.message = err.message;
    }
    if(err.name === "MongoServerError"){
        err.status = 500;
        err.message = "Internal Server Error";
    }
    next(err);
})


app.use((err,req,res,next)=>{
    let {status=500, message="Some error"}=err;
    res.status(status).send(message);
})

app.get("/", (req, res ) => {
    res.send("Hello World. I am root!");
});

app.get("/random",(req,res)=>{
    res.send("this is a random page")
})

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});