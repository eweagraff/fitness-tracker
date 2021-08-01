const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now,
  },
  exercises: [
    {
      type: {
        type: String,
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
      weight: Number,
      reps: {
        type: Number,
      },
      sets: {
        type: Number,
      },
      distance: {
        type: Number,
      },
    },
  ],
});

const Workout = mongoose.model("Workout", WorkoutSchema);
module.exports = Workout;
