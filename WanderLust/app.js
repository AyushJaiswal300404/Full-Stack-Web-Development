const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const wrapAsync = require("./utils/wrapAsync.js");
const ExpressError = require("./utils/ExpressError.js");
const { listingSchema } = require("./schema.js");


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

//Basic API
app.get("/",(req,res)=>{
    res.send("Hello World. I am root!");
});

//middleware for schema validation
const validateListing = (req,res,next)=>{
    let {error} = listingSchema.validate(req.body);
    if(error){
        let errorMessage = error.details.map((el) => el.message).join(",");
        throw new ExpressError(400, errorMessage);
    } else {
        next();
    }
}

 //Index Route
app.get("/listings",  wrapAsync(async (req, res) => {
    const allListings = await Listing.find({});
    res.render("listings/index", { allListings });
}));

//New Route
app.get("/listings/new",(req,res)=>{
    res.render("listings/new");
});

//Show Route
app.get("/listings/:id", wrapAsync(async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);
    if (!listing) {
        throw new ExpressError(404, "Listing not found");
    }
    res.render("listings/show", { listing });
}));

//Create Route
app.post("/listings", validateListing, wrapAsync(async (req, res) => {
    const listing = req.body.listing;
    const defaultImage = {
        url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
        filename: "default-image"
    };
    
    if(!listing.image || listing.image === '') {
        listing.image = defaultImage;
    }

    const newListing = new Listing(listing);
    await newListing.save();
    res.redirect("/listings");
}));

//Edit Route
app.get("/listings/:id/edit", wrapAsync(async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);
    if (!listing) {
        throw new ExpressError(404, "Listing not found");
    }
    res.render("listings/edit", { listing });
}));

//Update Route
app.put("/listings/:id", validateListing,wrapAsync(async (req, res) => {
    const { id } = req.params;
    const updatedData = req.body.listing;

    if (updatedData.image && typeof updatedData.image === "string") {
        updatedData.image = {
            url: updatedData.image,
            filename: "manual-entry"
        };
    }
    const listing = await Listing.findByIdAndUpdate(id, updatedData, { new: true });
    
    res.redirect(`/listings/${id}`);
}));


//Delete Route
app.delete("/listings/:id", wrapAsync(async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findByIdAndDelete(id);
    if (!listing) {
        throw new ExpressError(404, "Listing not found");
    }
    res.redirect("/listings");
}));

//importing listings
// app.get("/testListing", async (req, res)=>{
//     let sampleListing = new Listing({
//         title: "Sample Listing",
//         description: "This is a sample listing.",
//         image: {
//             filename: "sample",
//             url: "https://images.unsplash.com/photo-example"
//         },
//         price: 100,
//         location: "Sample Location",
//         country: "Sample Country"
//     });
//     await sampleListing.save();
//     res.send("Sample listing created!");

// })

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
        layout: false  // Add this to prevent layout rendering
    });
});

// Server startup
app.listen(8080, () => {
    console.log("Server is running on port 8080");
});