const { getAll } = require("./medicines/getAll");
const { addOrder } = require("./orders/addOrder");
const { addMedicine } = require("./medicines/addMedicine");
const { updateFavorite } = require("./medicines/updateFavorite");

module.exports = {
  getAll,
  addMedicine,
  addOrder,
  updateFavorite,
};
