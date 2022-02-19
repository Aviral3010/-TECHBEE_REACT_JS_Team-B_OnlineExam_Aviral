const mongoose = require('mongoose')
const { Schema } = mongoose;

const ScoreSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    score: {
        type: Number,
        required: true,
    },
    quiz: {
        type: String,
        required: true
    }
})
module.exports = mongoose.model("score", ScoreSchema)