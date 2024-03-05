const { getAll } = require("./medicines/getAll");
const { addOrder } = require("./orders/addOrder");
const { addMedicine } = require("./medicines/addMedicine");

module.exports = {
  getAll,
  addMedicine,
  addOrder,
};
