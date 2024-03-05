const express = require("express");
const { getAll, addMedicine } = require("../../controllers");
const { validateBody } = require("../../middlewares");
const { medicineSchema } = require("../../schemas");

const router = express.Router();

router.get("/", getAll);

router.post("/", validateBody(medicineSchema), addMedicine);

module.exports = router;
