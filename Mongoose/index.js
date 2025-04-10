const mongoose = require('mongoose');


// mongoose.connect('mongodb://127.0.0.1:27017/test');
main()
    .then((res) => {
        console.log("Connected to MongoDB successfully!");
    })
    .catch((err) => {
        console.log("Error connecting to MongoDB:", err);
    });

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');

}

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number
});

const User = mongoose.model('User', userSchema);

// const user1 = new User({
//     name: "John Doe",
//     email:"adam@gmail.com",
//     age: 30
// })
//  user1.save()
//     .then(() => console.log("User saved!"))
//     .catch((err) => console.log("Error saving user:", err));

// const user2 = new User({
//     name: "Jane Smith",
//     email: "eve@gmail.com",
//     age: 25
// });
// user2.save()

// User.find({age:{$gt: 25}}).then((res) =>{
//     console.log(res);
// })
// .catch((err) => {
//     console.log("Error fetching users:", err);
// });

// User.findById('67f702400214477e1cfb110f')
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log("Error fetching user:", err);
//     });

// User.updateOne(
//     { email:"adam@gmail.com" }, // Filter criteria
//     { age: 35 } // Update operation
// ).then((res) => {
//     console.log("User updated:", res);
// }
// ).catch((err) => {
//     console.log("Error updating user:", err);
// });

// User.findOneAndUpdate({email:"adam@gmail.com"}, {age: 52}, {new: true})
// .then((res) => {
//     console.log("User updated:", res);
// })
// .catch((err) => {
//     console.log("Error updating user:", err);
// });

// User.deleteOne({email:"adam@gmail.com"})
// .then((res) => {
//     console.log("User deleted:", res);
// })
// .catch((err) => {
//     console.log("Error updating user:", err);
// });