const workouts = require("./db.json");

//Functions to export:
module.exports = {
  getWorkouts: (req, res) => {
    res.status(200).send(workouts);
  },
};
