const { ctrlWrapper } = require("../../helpers");
const { Medicine } = require("../../models");

const getAll = async (req, res) => {
  const { page = 1, limit = 8, type, price, date, name } = req.query;

  const skip = (page - 1) * limit;

  let criteria = {};
  if (type !== "" && type !== "favorite") {
    criteria.type = type;
  } else if (type === "favorite") {
    criteria.favorite = true;
  }

  let sortOptions = {};
  if (price) {
    sortOptions.price = price === "Lowest to highest" ? 1 : -1;
  }
  if (date) {
    sortOptions.createdAt = date === "Oldest to latest" ? 1 : -1;
  }
  if (name) {
    sortOptions.name = name === "Reverse alphabetical order" ? -1 : 1;
  }

  const result = await Medicine.find(criteria, null, {
    skip,
    limit,
    sort: { ...sortOptions, _id: 1 },
  });

  res.json(result);
};

module.exports = {
  getAll: ctrlWrapper(getAll),
};
