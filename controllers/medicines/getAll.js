const { HttpError, ctrlWrapper } = require("../../helpers");
const { Medicine } = require("../../models");

const getAll = async (req, res) => {
  const result = await Medicine.find();
  res.json(result);
};

module.exports = {
  getAll: ctrlWrapper(getAll),
};
