const Joi = require("joi");

const medicineSchema = Joi.object({
  name: Joi.string().required(),
  price: Joi.number().required(),
  type: Joi.string().required(),
  favorite: Joi.boolean(),
  quantity: Joi.number(),
});

module.exports = { medicineSchema };
