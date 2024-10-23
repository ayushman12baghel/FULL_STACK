const mongoose = require("mongoose");
main()
  .then(() => console.log("connection successful"))
  .catch((err) => console.log(err));
const { Schema } = mongoose;

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo");
}

const orderSchema = new Schema({
  item: String,
  price: Number,
});

const customerSchema = new Schema({
  name: String,
  orders: [
    {
      type: Schema.Types.ObjectId,
      ref: "Order",
    },
  ],
});

// customerSchema.pre("findOneAndDelete", async () => {
//   console.log("Pre MiddleWare");
// });
customerSchema.post("findOneAndDelete", async (customer) => {
  if (customer.orders.length) {
    let res = await Order.deleteMany({
      _id: { $in: customer.orders },
    });
    console.log(res);
  }
});

const Order = mongoose.model("Order", orderSchema);
const Customer = mongoose.model("Customer", customerSchema);

// Find customer and populate orders
const findCustomer = async () => {
  let result = await Customer.find({}).populate("orders");
  console.log(result[0]);
};

const addCust = async () => {
  let newCust = new Customer({
    name: "Karan Arjun",
  });

  let newOrder1 = new Order({
    item: "Pizza",
    price: 200,
  });

  let newOrder2 = new Order({
    item: "Burger",
    price: 100,
  });

  await newOrder1.save();
  await newOrder2.save();

  console.log("New Orders saved: ", newOrder1, newOrder2);
  newCust.orders.push(newOrder1._id);
  newCust.orders.push(newOrder2._id);

  let result = await newCust.save();
  console.log(result);
  console.log("Added new Customer");
  await findCustomer();
};

const delCust = async () => {
  let data = await Customer.findByIdAndDelete("67101a8b487b0d11b1c52ffb");
};

// addCust();
delCust();
