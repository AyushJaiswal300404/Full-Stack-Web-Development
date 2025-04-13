const express =require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");
const path = require("path");
const methodOverride = require("method-override");


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
// app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method"));

//Basic API
app.get("/",(req,res)=>{
    res.send("Hello World. I am root!");
});
 //Index Route
app.get("/listings", async (req,res)=>{
    try {
        const allListings = await Listing.find({});
        res.render("listings/index", { allListings });
    } catch(err) {
        console.log(err);
        res.status(500).send("Internal Server Error");
    }
});

//New Route
app.get("/listings/new",(req,res)=>{
    res.render("listings/new");
});

//Show Route
app.get("/listings/:id", async (req,res)=>{
    try {
        let {id} = req.params;
        const listing = await Listing.findById(id);
        res.render("listings/show", { listing });
    } catch(err) {
        console.log(err);
        res.status(500).send("Internal Server Error");
    }
});

//Create Route
app.post("/listings", async (req, res) => {
    try {
        const listing = req.body;
        if(!listing.image) {
            listing.image = "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60";
        }
        const newListing = new Listing(listing);
        await newListing.save();
        res.redirect("/listings");
    } catch(err) {
        console.log(err);
        res.status(500).send("Error creating listing");
    }
});

//Edit Route
app.get("/listings/:id/edit", async (req,res)=>{
    try {
        let {id} = req.params;
        const listing = await Listing.findById(id);
        console.log("Listing data:", listing); // Add this to debug
        res.render("listings/edit", { listing });
    } catch(err) {
        console.log(err);
        res.status(500).send("Internal Server Error");
    }
})

//Update Route
app.put("/listings/:id", async (req,res)=>{
    try {
        let {id} = req.params;
        await Listing.findByIdAndUpdate(id, {...req.body.listing}, { new: true });
        res.redirect(`/listings`);
    } catch(err) {
        console.log(err);
        res.status(500).send("Internal Server Error");
    }
})

//Delete Route
app.delete("/listings/:id", async (req,res)=>{
    try {
        let {id} = req.params;
        await Listing.findByIdAndDelete(id);
        res.redirect("/listings");
    } catch(err) {
        console.log(err);
        res.status(500).send("Internal Server Error");
    }
})

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

//Run the server
app.listen(8080, ()=>{
    console.log("Server is running on port 8080");
});