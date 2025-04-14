//One to few
const mongoose = require('mongoose');
const {Schema } = mongoose;
main()
    .then(() => {console.log("Connected to MongoDB successfully!")})
    .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/rel');
}


const userSchema = new Schema({
    username: String,
    addresses: [
        {
            _id:false,
            location: String,
            city: String
        }
    ]
});

const User = mongoose.model('User', userSchema);

const addUsers = async () => {
    const user1 = new User({
        username: 'John Doe',
        addresses: [
            {  location: '123 Main St', city: 'New York' },
            {  location: '456 Elm St', city: 'Los Angeles' }
        ]
    });
    const user2 = new User({
        username: 'Jane Smith',
        addresses: [
            {  _id:false,location: '789 Oak St', city: 'Chicago' },
            {  _id:false,location: '101 Pine St', city: 'Houston' }
        ]
    });
    await user1.save();
    await user2.save();
    console.log('Users added successfully!');
    console.log(user1);
    console.log(user2);
}
addUsers();