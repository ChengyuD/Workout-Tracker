const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: () => new Date()
    },
    exercises: [
        {
            type: {
                type: String,
                Trim: true,
                required: "Type of exercise"
            },
            name: {
                type: String,
                trim: true,
                required: "Name of exercise"
            },
            duration: {
                type: Number,
                required: "Duration of exercise (min)"
            },
            weight: {
                type: Number,
            },
            distance: {
                type: Number,
            },
            sets: {
                type: Number,
            },
        }
    ]
});

workoutSchema.virtual("totalDuration").get(function () {
    return this.exercises.reduce((total, exercise) => {
        return total + exercise.duration;
    }, 0);
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;