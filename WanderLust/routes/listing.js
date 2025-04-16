const express = require('express');
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const { listingSchema} = require("../schema.js");
const ExpressError = require("../utils/ExpressError.js");
const Listing = require("../models/listing.js");

const validateListing = (req, res, next) => {
    // Add console.log for debugging
    console.log("Request body:", req.body);
    
    let {error} = listingSchema.validate(req.body);
    if(error) {
        let errorMessage = error.details.map((el) => el.message).join(",");
        throw new ExpressError(400, errorMessage);
    } else {
        next();
    }
}

//Index Route
router.get("/",  wrapAsync(async (req, res) => {
    const allListings = await Listing.find({});
    res.render("listings/index", { allListings });
}));

//New Route
router.get("/new",(req,res)=>{
    res.render("listings/new");
});

//Show Route
router.get("/:id", wrapAsync(async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id).populate("reviews");
    if (!listing) {
        throw new ExpressError(404, "Listing not found");
    }
    res.render("listings/show", { listing });
}));

//Create Route
router.post("/", validateListing, wrapAsync(async (req, res) => {
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
router.get("/:id/edit", wrapAsync(async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);
    if (!listing) {
        throw new ExpressError(404, "Listing not found");
    }
    res.render("listings/edit", { listing });
}));

//Update Route
router.put("/:id", validateListing,wrapAsync(async (req, res) => {
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
router.delete("/:id", wrapAsync(async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findByIdAndDelete(id);
    if (!listing) {
        throw new ExpressError(404, "Listing not found");
    }
    res.redirect("/listings");
}));

module.exports = router;