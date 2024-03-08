const { Schema, model } = require("mongoose");
const { handleMongooseError } = require("../helpers");
const { medicineSchema } = require("./medicine");

const orderSchema = new Schema(
  {
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
    medicines: {
      type: [medicineSchema],
      required: true,
    },
    totalPrice: {
      type: Number,
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

orderSchema.post("save", handleMongooseError);

const Order = model("order", orderSchema);

module.exports = Order;
