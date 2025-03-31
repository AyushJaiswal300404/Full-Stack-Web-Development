const express = require('express');
const app = express();
console.dir(app );

let port=3000;

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})

// app.use((req,res)=>{
//     console.log(req);
//     res.send("<h1>Fruits</h1>");
// })

// let code= "<h1>Fruits</h1> <ul> <li>apple<li> <li> oranage</li> </ul>";

// app.get("/",(req,res)=>{
//     res.send("You are on root page");
// });
// app.get("/apple",(req,res)=>{
//     res.send("You are  on apple page");
// });
// app.get("/orange",(req,res)=>{
//     res.send("You are on orange  new page");
// });


// app.get("*",(req,res)=>{
//     res.send("You are on a page that does not exist");
// });

app.get("/", (req,res)=>{
    res.send("hello, i am root");
});

app.get("/:username/:id", (req,res)=>{
    let {username, id} = req.params;
    res.send(`Hello @${username}, your id is ${id}`); 
});

app.get("/search", (req,res)=>{
    // console.log(req.query);
    // res.send("no result");
    let {q} = req.query;
    res.send(`You are searching for ${q}`);
}); 