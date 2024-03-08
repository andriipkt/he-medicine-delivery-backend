const Joi = require("joi");
const { medicineSchema } = require("./medicine");

const orderSchema = Joi.object({
  address: Joi.string().required(),
  email: Joi.string().required(),
  phone: Joi.string().required(),
  name: Joi.string().required(),
  medicines: Joi.array().items(medicineSchema).required(),
  totalPrice: Joi.number().required(),
});

module.exports = {
  orderSchema,
};
