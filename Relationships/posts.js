//One to squillion
const mongoose = require('mongoose');
const { listIndexes } = require('../WanderLust/models/listing');
const {Schema } = mongoose;
main()
    .then(() => {console.log("Connected to MongoDB successfully!")})
    .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/rel');
}


const userSchema = new Schema({
    username: String,
    email: String,
});

const postSchema = new Schema({
    content: String,
    likes: Number,
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
});

const User = mongoose.model('User', userSchema);
const Post = mongoose.model('Post', postSchema);

// const addData = async () => {
//     let user1 = new User({
//         username: 'John Doe',
//         email: "john@gmail.com"
//     });

//     let post1 = new Post({
//         content: 'Hello World!',
//         likes: 100,
//         user: user1._id
//     });

//     let post2 = new Post({
//         content: 'Hello World!',
//         likes: 100,
//         user: user1._id
//     });

//     await user1.save();
//     await post1.save();
//     console.log('Data added successfully!');
//     console.log(user1);
//     console.log(post1);
//     console.log(post2);
// }
// addData();

const getData = async ()=>{
    let result =await Post.findOne({}).populate("user","username");
    console.log(result);
}
getData();