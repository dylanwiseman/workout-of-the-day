const weights = require("./db.json");
console.log(weights);
//Functions to export:
module.exports = {
  getWeights: (req, res) => {
    res.status(200).send(weights);
  },
};
