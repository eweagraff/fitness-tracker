const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  workout: {
    type: String,
    enum: ["resistance", "cardio"],
    required: "You must pick resistance or cardio",
  },
  name: {
    type: String,
    trim: true,
    required: "What is the name of the exercise",
  },
  duration: {
    type: Number,
    required: "How long did the exercise last?",
  },
  weight: {
    type: Number,
  },
  reps: {
    type: Number,
  },
  sets: {
    type: Number,
  },
});

const Workout = mongoose.model("Workout", WorkoutSchema);
module.exports = Workout;
