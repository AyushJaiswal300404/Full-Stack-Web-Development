const mongoose = require('mongoose');
const Chat = require('./models/chat');

main()
.then(() => {
    console.log("Connected to MongoDB successfully!");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

// let chat1 = new Chat({
//     from: "John",
//     to: "Doe",
//     msg: "Hello, how are you?",
//     created_at: new Date()
// });
// chat1.save()
//     .then(res => console.log("Chat saved!", res))
//     .catch(err => console.log("Error saving chat:", err));

let allChats = [
    {
        from: "Alice",
        to: "Bob",
        msg: "Hi Bob!",
        created_at: new Date()
    },
    {
        from: "Bob",
        to: "Alice",
        msg: "Hello Alice!",
        created_at: new Date()
    },
    {
        from: "Alice",
        to: "Charlie",
        msg: "Hey Charlie!",
        created_at: new Date()
    },
    {
        from: "Charlie",
        to: "Alice",
        msg: "Hi Alice!",
        created_at: new Date()
    },
    {
        from: "Bob",
        to: "Charlie",
        msg: "Hello Charlie!",
        created_at: new Date()
    },
    {
        from: "Charlie",
        to: "Bob",
        msg: "Hey Bob!",
        created_at: new Date()
    }
];

Chat.insertMany(allChats);