const mongoose = require('mongoose');
const initData = require('./data.js');
const Listing = require('../models/listing.js');

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";
main()
.then(()=>{
    console.log("Connected to MongoDB successfully!");
})
.catch(err=>console.log(err));
async function main(){
    await mongoose.connect(MONGO_URL);
}

const initDB = async() => {
    try {
        //delete previous data
        await Listing.deleteMany({});
        //insert new data
        await Listing.insertMany(initData.data);
        console.log("Database initialized with new data!");
    } catch(err) {
        console.log("Error initializing database!");
        console.log(err);
    } finally {
        mongoose.connection.close();
    }
}

initDB();
