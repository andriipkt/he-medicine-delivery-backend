const express = require("express");
const { validateBody } = require("../../middlewares");
const { orderSchema } = require("../../schemas");
const { addOrder } = require("../../controllers");

const router = express.Router();

router.post("/", validateBody(orderSchema), addOrder);

module.exports = router;
