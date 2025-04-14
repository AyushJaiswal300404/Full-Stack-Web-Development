//One to many
const mongoose = require('mongoose');
const {Schema } = mongoose;
main()
    .then(() => {console.log("Connected to MongoDB successfully!")})
    .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/relC');
}


const orderSchema = new Schema({
    items: String,
    price: Number,
});

const customerSchema = new Schema({
    name: String,
    orders: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Order'
        }
    ]
});

const Order = mongoose.model('Order', orderSchema);
const Customer = mongoose.model('Customer', customerSchema);

const addCustomers = async () => {
    let order1 = await Order.findOne({ items: 'Laptop' });
    let order2 = await Order.findOne({ items: 'Phone' });
    const customer1 = new Customer({
        name: 'John Doe',
        orders: [order1._id, order2._id]
    });

    const customer2 = new Customer({
        name: 'Jane Smith',
        orders: [order1._id]
    });

    await customer1.save();
    await customer2.save();

    console.log('Customers added successfully!');
    console.log(customer1);
    console.log(customer2); //can also use populate to get the orders instead of the ids
}
addCustomers();

// const addOrders = async () => {
//     const order1 = new Order({
//         items: 'Laptop',
//         price: 1200,
//     });
//     const order2 = new Order({
//         items: 'Phone',
//         price: 800,
//     });
//     await order1.save();
//     await order2.save();
//     console.log('Orders added successfully!');
//     console.log(order1);
//     console.log(order2);
// }
// addOrders();
