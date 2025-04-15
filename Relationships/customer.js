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

// customerSchema.pre("findOneAndDelete", async()=>{
//     console.log("Pre Middleware");
// })

customerSchema.post("findOneAndDelete", async(customer) => {
    try {
        if (customer && customer.orders) {
            console.log("Deleting the orders of the customer...");
            let res = await Order.deleteMany({ _id: { $in: customer.orders } });
            console.log("Deleted orders:", res);
        } else {
            console.log("No customer or orders found");
        }
    } catch (error) {
        console.error("Error in post middleware:", error);
    }
});

const Order = mongoose.model('Order', orderSchema);
const Customer = mongoose.model('Customer', customerSchema);

// const addCustomers = async () => {
//     let order1 = await Order.findOne({ items: 'Laptop' });
//     let order2 = await Order.findOne({ items: 'Phone' });
//     const customer1 = new Customer({
//         name: 'John Doe',
//         orders: [order1._id, order2._id]
//     });

//     const customer2 = new Customer({
//         name: 'Jane Smith',
//         orders: [order1._id]
//     });

//     await customer1.save();
//     await customer2.save();

//     console.log('Customers added successfully!');
//     console.log(customer1);
//     console.log(customer2); //can also use populate to get the orders instead of the ids
// }
// addCustomers();

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

// const findCustomer = async () => {
//     let result= await Customer.find({}).populate('orders');
//     console.log(result[0]);
// };




const delCustomer = async () => {
    try {
        const data = await Customer.findByIdAndDelete('67fd82a7ab0b992be59ca9d8');
        if (data) {
            console.log("Customer deleted:", data);
        } else {
            console.log("Customer not found");
        }
    } catch (error) {
        console.error("Error deleting customer:", error);
    }
}

delCustomer();