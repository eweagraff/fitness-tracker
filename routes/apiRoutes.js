const router = require("express").Router();
const db = require("../models");

router.get("/api/workouts", (req, res) => {
  db.Workout.find({})
    .then((dbWorkout) => {
      // console.log("ALL WORKOUTS");
      // console.log(dbWorkout);
      dbWorkout.forEach((workout) => {
        var total = 0;
        workout.exercises.forEach((e) => {
          total += e.duration;
        });
        workout.totalDuration = total;
      });

      res.json(dbWorkout);
    })
    .catch((err) => {
      res.json(err);
    });
});

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

router.put("/api/workouts/:id", (req, res) => {
  db.Workout.findOneAndUpdate(
    { _id: req.params.id },
    {
      $inc: { totalDuration: req.body.duration },
      $push: { exercises: req.body },
    },
    { new: true }
  )
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.json(err);
    });
});

//find a workout in range
//router.get("/api/workouts/range");
// put is gonna use $push somewhere
//add a new workout
//router.post("/api/workouts", (req, res) => {
//db.Workout.create({}).then, (err, newWorkout) => {
// if (err) {
// console.log(err);
//  } else {
// res.json(newWorkout);
//}
//});
//});

// get workouts in range
router.get("/api/workouts/range", (req, res) => {
  db.Workout.find({})
    .then((dbWorkout) => {
      console.log("ALL WORKOUTS");
      console.log(dbWorkout);

      res.json(dbWorkout);
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;
