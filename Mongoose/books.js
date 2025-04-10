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
  await mongoose.connect('mongodb://127.0.0.1:27017/amazon');

}

const bookSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    author:{
        type: String,
    },
    price:{
        type: Number,
        min: 0
    },
    discount:{
        type: Number,

        default: 0
    }
});

const Book = mongoose.model('Book', bookSchema);

// let book1 = new Book({
//     title: "The Great Gatsby",
//     author: "F. Scott Fitzgerald",
//     price: 1500
// })
// book1.save()
//     .then((res) => console.log("Book saved!", res))
//     .catch((err) => console.log("Error saving book:", err));

// let book2 = new Book({
//     title: "To Kill a Mockingbird",
//     author: "Harper Lee",
//     price: 1200,
// });
// book2.save()
//     .then((res) => console.log("Book saved!", res))
//     .catch((err) => console.log("Error saving book:", err));

Book.findByIdAndUpdate('67f70fab5d39ab084b35fd64', { price: -2000 }, { runValidators: true , new: true })
    .then((res) => {
        console.log("Book updated!", res);
    })
    .catch((err) => {
        console.log("Error updating book:", err.errors.price.properties.message);
    });
