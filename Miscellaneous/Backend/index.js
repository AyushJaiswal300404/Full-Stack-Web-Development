const express= require('express');
const app = express();
const port =8080;

app.use(express.urlencoded({extended: true})); //for post request, using middleware


app.get("/register", (req, res) => {
    let{username, password}= req.query;
    res.send("standard GET response. Welcome " + username + " with password " + password);
});

app.post("/register", (req, res) => {
    let{username, password}= req.body;
    res.send("standard POST response. Welcome " + username + " with password " + password);
});

app.listen(port, ()=>{
    console.log(`Server is running on http://localhost:${port}`);
});