const { HttpError, ctrlWrapper } = require("../../helpers");
const { Medicine } = require("../../models");

const updateFavorite = async (req, res) => {
  const { medicineId } = req.params;

  const result = await Medicine.findByIdAndUpdate(medicineId, req.body, {
    new: true,
  });

  if (!result) {
    throw HttpError(404);
  }

  res.json(result);
};

module.exports = {
  updateFavorite: ctrlWrapper(updateFavorite),
};
