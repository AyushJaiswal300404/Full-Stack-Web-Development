import { faker } from '@faker-js/faker';
import mysql from 'mysql2';
import express from 'express';

import path from 'path';
import { fileURLToPath } from 'url';
import methodOverride from 'method-override';
import { v4 as uuidv4 } from 'uuid'; 


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app =express();

app.set("view engine","ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(methodOverride('_method'));
app.use(express.urlencoded({extended: true}));


const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'delta_app',
    password: '1234'
});

// let q = "INSERT INTO user(id,username,email,password) VALUES ?";

let getRandomUser = ()=> {
    return [
      faker.string.uuid(),
      faker.internet.username(), 
      faker.internet.email(),
      faker.internet.password(),
    ];
};


// let data =[];
// for(let i=1;i<=100;i++){
//     data.push(getRandomUser());
// }

// try{
//     connection.query(q, [data],(err,result) => {
//         if(err) throw err;
//         console.log(result);
//         console.log(result.length);
//     })
// }catch (err){
//     console.log(err);
// }
// connection.end();

app.listen("8080", ()=>{
    console.log("listening to port: 8080");
})
//HOME ROUTE
app.get("/", (req, res) => {
    let q = "SELECT count(*) FROM user";
    try{
    connection.query(q,(err,result) => {
        if(err) throw err;
        let count = result[0]["count(*)"]
        res.render("home.ejs",{count});
     });
    }catch (err){
        console.log(err);
        res.send("result not found");
    }
});

//SHOW ROUTE
app.get("/user",(req,res)=>{
    let q= `SELECT * FROM user`;
    try{
        connection.query(q,(err,users) => {
            if(err) throw err;
            // console.log(result);
            res.render("user.ejs",{users});
        });
    }catch (err){
        console.log(err);
        res.send("result not found");
    }
})

//EDIT ROUTE
app.get("/users/:id/edit", (req, res) => {
    let { id } = req.params;
    let q = `SELECT * FROM user WHERE id = '${id}'`;
    try{
        connection.query(q,(err,result) => {
            if(err) throw err;
            let user= result[0]; //store username
            res.render("edit.ejs",{user});
        });
    }catch (err){
        console.log(err);
        res.send("result not found");
    };
}); 

//UPDATE ROUTE
app.patch("/users/:id", (req, res) => {
    const { id } = req.params;
    const { password: formPass, username: newUsername } = req.body;

    const q = `SELECT * FROM user WHERE id = ?`;
    connection.query(q, [id], (err, result) => {
        if (err) {
            console.log(err);
            return res.send("Database error");
        }

        const user = result[0];
        if (!user) return res.send("User not found");

        if (formPass !== user.password) {
            return res.send("Wrong Password");
        }

        const updateQ = `UPDATE user SET username = ? WHERE id = ?`;
        connection.query(updateQ, [newUsername, id], (err, updateResult) => {
            if (err) {
                console.log(err);
                return res.send("Update failed");
            }
            res.redirect("/user");
        });
    });
});

//NEW ROUTE
app.get("/users/new", (req, res) => {
    res.render("new.ejs");
});

app.post("/users", (req, res) => {
    const { username, email, password } = req.body;
    const id = faker.string.uuid(); // or use uuidv4()
  
    const q = `INSERT INTO user (id, username, email, password) VALUES (?, ?, ?, ?)`;
    const values = [id, username, email, password];
  
    connection.query(q, values, (err, result) => {
      if (err) {
        console.log(err);
        return res.send("Failed to insert user");
      }
      res.redirect("/user"); 
    });
});

//DELETE ROUTE
app.get("/users/delete", (req, res) => {
    res.render("delete.ejs");
});
  
  
app.delete("/users/delete", (req, res) => {
    const { email, password } = req.body;
  
    const findQuery = `SELECT * FROM user WHERE email = ?`;
    connection.query(findQuery, [email], (err, results) => {
      if (err) {
        console.log(err);
        return res.send("Database error.");
      }
  
      const user = results[0];
      if (!user) {
        return res.send("User not found.");
      }
  
      if (user.password !== password) {
        return res.send("Incorrect password.");
      }
  
      const deleteQuery = `DELETE FROM user WHERE email = ?`;
      connection.query(deleteQuery, [email], (err, result) => {
        if (err) {
          console.log(err);
          return res.send("Error deleting user.");
        }
        res.send("Account successfully deleted.");
      });
    });
  });
  