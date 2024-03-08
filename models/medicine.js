const { Schema, model } = require("mongoose");
const { handleMongooseError } = require("../helpers");

const medicineSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    type: {
      type: String,
      enum: ["drugs", "pharmacy"],
      required: true,
    },
    favorite: {
      type: Boolean,
      default: false,
    },
    quantity: {
      type: Number,
      default: 1,
    },
  },
  { versionKey: false, timestamps: true }
);

medicineSchema.post("save", handleMongooseError);

const Medicine = model("medicine", medicineSchema);

module.exports = { Medicine, medicineSchema };
