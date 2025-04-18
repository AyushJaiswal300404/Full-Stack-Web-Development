const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const ExpressError = require("./utils/ExpressError.js");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const flash = require("connect-flash");

const listings = require("./routes/listing.js");
const reviews = require("./routes/review.js");

//Database
const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main()
.then(()=>{
    console.log("Connected to MongoDB successfully!");
})
.catch(err=>console.log(err));
async function main(){
    await mongoose.connect(MONGO_URL);
}

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method"));
app.engine("ejs",ejsMate);
app.use(cookieParser("secretKey"));

const sessionOptions = {
    secret: "mysupersecretcode",
    resave: false,
    saveUninitialized: true,
    cookie:{
        expires: Date.now() + 1000 * 60 * 60 * 24 * 30, // 1 month
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 24 * 30, // 1 month

    }
}


//Basic API
app.get("/",(req,res)=>{
    // res.cookie("name", "Ayush",{signed:true, httpOnly:true});
    let {name="Harry"} = req.cookies;
    res.send(`Hello ${name}, welcome to WanderLust!`);
});

app.use(session(sessionOptions));
app.use(flash());

app.use((req, res, next) => {
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    // res.locals.currentUser = req.session.userId;
    next();
});

app.use("/listings", listings);
app.use("/listings/:id/reviews", reviews);

// 404 handler - place this after all your routes
app.use((req, res, next) => {
    next(new ExpressError(404, "Page Not Found!"));
});

// Error handling middleware - keep this as the last middleware
app.use((err, req, res, next) => {
    let { statusCode = 500, message = "Something went wrong!" } = err;
    if (!err.message) err.message = message;
    
    res.status(statusCode).render("error", { 
        err: {
            statusCode,
            message: err.message,
            stack: process.env.NODE_ENV !== "production" ? err.stack : undefined
        },
        layout: false
    });
});

// Server startup
app.listen(8080, () => {
    console.log("Server is running on port 8080");
});