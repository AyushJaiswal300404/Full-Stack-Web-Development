const express = require('express');
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const passport = require("passport");
const { saveRedirectUrl } = require('../middleware.js');
const userController = require("../controllers/users.js");

// Signup Routes
router.get("/signup",userController.renderSignupForm);

router.post("/signup", wrapAsync(userController.signup));

// Login Routes
router.get("/login", userController.renderLoginForm);

router.post("/login", saveRedirectUrl,
    passport.authenticate("local", {
        failureRedirect: "/login",
        failureFlash: true
    }), 
    userController.login
);

// Logout Route
router.get("/logout", userController.logout);

module.exports = router;