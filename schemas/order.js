const Joi = require("joi");

const orderSchema = Joi.object({
  address: Joi.string().required(),
  email: Joi.string().required(),
  phone: Joi.string().required(),
  name: Joi.string().required(),
});

module.exports = {
  orderSchema,
};
