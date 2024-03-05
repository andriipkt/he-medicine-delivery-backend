const Joi = require("joi");

const medicineSchema = Joi.object({
  name: Joi.string().required(),
  price: Joi.number().required(),
  favorite: Joi.boolean(),
});

module.exports = { medicineSchema };
