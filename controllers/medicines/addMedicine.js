const { HttpError, ctrlWrapper } = require("../../helpers");
const { Medicine } = require("../../models");

const addMedicine = async (req, res) => {
  const result = await Medicine.create(req.body);
  if (!result) {
    throw HttpError(404);
  }

  res.status(201).json(result);
};

module.exports = {
  addMedicine: ctrlWrapper(addMedicine),
};
