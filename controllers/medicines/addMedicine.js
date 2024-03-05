const { HttpError, ctrlWrapper } = require("../../helpers");
const { Medicine } = require("../../models");

const addMedicine = async (req, res) => {
  const result = await Medicine.create(req.body);
  res.status(201).json(result);
};

module.exports = {
  addMedicine: ctrlWrapper(addMedicine),
};
