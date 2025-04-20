const express = require('express');
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const { isLoggedIn, validateListing, isOwner } = require("../middleware.js");
const listingController = require("../controllers/listing.js");

router
    .route("/")
    .get(wrapAsync(listingController.index))                                                              //Index Route
    .post(isLoggedIn, validateListing, wrapAsync(listingController.createListing));                       //Create Route

router.get("/new",isLoggedIn, listingController.renderNewForm);                                           //New Route

router
    .route("/:id")
    .get(wrapAsync(listingController.showListings))                                                //Show Route
    .put(isLoggedIn, isOwner, validateListing, wrapAsync(listingController.updateListing))        //Update Route
    .delete(isLoggedIn, isOwner, wrapAsync(listingController.destroyListing));                    //Delete Route

router.get("/:id/edit", isLoggedIn,isOwner, wrapAsync(listingController.renderEditForm));                  //Edit Route

module.exports = router;