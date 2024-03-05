const express = require("express");
const controller = require("../../controllers/medicines/getAll");
const router = express.Router();

router.get("/", controller.getAll);

module.exports = router;
