const mongoose = require('mongoose');

const surveySchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    questions: [{
        question: { type: String, required: true },
        options: [{ type: String }],
        answer: { type: String }
    }],
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
});

const Survey = mongoose.model('Survey', surveySchema);

module.exports = Survey;