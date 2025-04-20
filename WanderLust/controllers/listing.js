const Listing = require("../models/listing.js");

module.exports.index=async  (req, res) => {
    const allListings = await Listing.find({});
    res.render("listings/index", { allListings });
}

module.exports.renderNewForm = (req,res)=>{
    res.render("listings/new");
}

module.exports.showListings = async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id)
        .populate("owner")
        .populate({path: "reviews", populate: { path: "author" }});
    
    if (!listing) {
        req.flash("error", "Listing not found!");
        return res.redirect("/listings");
    }
    res.render("listings/show", { listing });
}

module.exports.createListing =async (req, res) => {
    const listing = req.body.listing;
    const defaultImage = {
        url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
        filename: "default-image"
    };
    
    if(!listing.image || listing.image === '') {
        listing.image = defaultImage;
    }

    const newListing = new Listing(listing);
    newListing.owner = req.user._id;
    await newListing.save();
    req.flash("success", "Successfully created a new listing!");
    res.redirect("/listings");
}

module.exports.renderEditForm = async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);
    if (!listing) {
        // throw new ExpressError(404, "Listing not found");
        req.flash("error", "Listing you requested for does not exist!");
        return res.redirect("/listings");
    }
    res.render("listings/edit", { listing });
}

module.exports.updateListing = async (req, res) => {
    const { id } = req.params;
    const updatedData = req.body.listing;

    if (updatedData.image && typeof updatedData.image === "string") {
        updatedData.image = {
            url: updatedData.image,
            filename: "manual-entry"
        };
    }
    await Listing.findByIdAndUpdate(id, updatedData, { runValidators: true });
    res.redirect(`/listings/${id}`);
}

module.exports.destroyListing = async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findByIdAndDelete(id);
    if (!listing) {
        throw new ExpressError(404, "Listing not found");
    }
    req.flash("success", "Successfully deleted the listing!");
    res.redirect("/listings");
}