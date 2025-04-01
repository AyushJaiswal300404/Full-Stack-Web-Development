const express= require('express');
const app= express();

const port = 8080;

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    // res.send("This is home");
    res.render("home.ejs")
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
