const mongoose = require("mongoose");

const submitSchema = new mongoose.Schema({
    student: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users",
        required: true
    },

    Quiz: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Quiz",
        required: true
    },

    answers: [
        {
            questionId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Question",
                required: true
            },
            selectedAnswer: {
                type: String,
                required: true
            },
            isCorrect: {
                type: Boolean,
                required: true
            }
        }
    ],

    score: {
        type: Number,
        required: true
    },

    totalQuestions: {
        type: Number,
        required: true
    },

    percentage: {
        type: Number,
        required: true
    },

    status: {
        type: String,
        enum: ["failed", "success"],
        required: true
    },

    submittedAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Submit", submitSchema);