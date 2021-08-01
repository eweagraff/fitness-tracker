const router = require("express").Router();
const db = require("../models");

//find all workouts
router.get("/api/workouts", (req, res) => {
  db.Workout.find({}, (err, workouts) => {
    if (err) {
      console.log(err);
    } else {
      res.json(workouts);
    }
  });
});

//find a workout in range
//router.get("/api/workouts/range");
// put is gonna use $push somewhere
//add a new workout
router.post("/api/workouts", (req, res) => {
  db.Workout.create({}).then, (err, newWorkout) => {
    if (err) {
      console.log(err);
    } else {
      res.json(newWorkout);
    }
  });
});

module.exports = router;
