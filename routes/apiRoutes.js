const router = require("express").Router();
const db = require("../models/workout.js");

//Get request for all workouts
router.get("/api/workouts", (req, res) => {
  db.find({})
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

//get workouts in range
router.get("/api/workouts/range", (req, res) => {
  db.find()
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.json(err);
    });
});

//Post a workout
router.post("/api/workouts", ({ body }, res) => {
  db.create(body)
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});
//create and update a workout
router.put("/api/workouts/:id", ({ body, params }, res) => {
  db.findByIdAndUpdate(params.id, { $push: { exercises: body } })
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.json(err);
    });
});

//export the API routes
module.exports = router;
