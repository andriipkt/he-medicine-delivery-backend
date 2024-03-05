const { Schema, model } = require("mongoose");
const { handleMongooseError } = require("../helpers");

const orderSchema = new Schema({
  address: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
});

orderSchema.post("save", handleMongooseError);

const Order = model("order", orderSchema);

module.exports = Order;
