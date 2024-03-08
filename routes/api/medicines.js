const express = require("express");
const { getAll, addMedicine, updateFavorite } = require("../../controllers");
const { validateBody } = require("../../middlewares");
const { medicineSchema } = require("../../schemas");

const router = express.Router();

router.get("/", getAll);

router.post("/", validateBody(medicineSchema), addMedicine);

router.patch("/:medicineId/favorite", updateFavorite);

module.exports = router;
