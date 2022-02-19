const mongoose = require('mongoose')
const { Schema } = mongoose;

const QuestionSchema = new Schema({
    ques: {
        type: String,
        required: true
    },
    option: {
        type: [String],
        required: true
    },
    correct: {
        type: Number,
        required: true
    },
    quiz:{
        type:String,
        default:'mock'
    }


})

module.exports = mongoose.model("questions", QuestionSchema)