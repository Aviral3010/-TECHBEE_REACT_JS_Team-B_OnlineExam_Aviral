const express = require('express')
const User = require('../models/User')
const Question = require('../models/Ques')
const Score = require('../models/Score')
const router = express.Router();
var jwt = require('jsonwebtoken');
const fetchuser = require('../middleware/fetchuser')



//  to get all questions GET /user/quiz

router.get('/quiz', async (req, res) => {
    user = await Question.create(
        [
            {
                ques: "__________ is known as the City of Lakes in India?",
                option: ['Indore', 'Udaipur', 'Jaipur', 'Surat'],
                correct: 1,
                quiz: 'gk'

            },
            {
                ques: "__________ is known as the City of Lakes in India?",
                option: ['Indore', 'Udaipur', 'Jaipur', 'Surat'],
                correct: 1,
                quiz: 'gk'

            },
            {
                ques: "__________ is known as the City of Lakes in India?",
                option: ['Indore', 'Udaipur', 'Jaipur', 'Surat'],
                correct: 1,
                quiz: 'gk'

            },
            {
                ques: "__________ is known as the City of Lakes in India?",
                option: ['Indore', 'Udaipur', 'Jaipur', 'Surat'],
                correct: 1,
                quiz: 'gk'

            },
            {
                ques: "__________ is known as the City of Lakes in India?",
                option: ['Indore', 'Udaipur', 'Jaipur', 'Surat'],
                correct: 1,
                quiz: 'gk'

            },
            {
                ques: "__________ is known as the City of Lakes in India?",
                option: ['Indore', 'Udaipur', 'Jaipur', 'Surat'],
                correct: 1,
                quiz: 'gk'

            },
            {
                ques: "__________ is known as the City of Lakes in India?",
                option: ['Indore', 'Udaipur', 'Jaipur', 'Surat'],
                correct: 1,
                quiz: 'gk'

            },
            {
                ques: "__________ is known as the City of Lakes in India?",
                option: ['Indore', 'Udaipur', 'Jaipur', 'Surat'],
                correct: 1,
                quiz: 'gk'

            },
            {
                ques: "__________ is known as the City of Lakes in India?",
                option: ['Indore', 'Udaipur', 'Jaipur', 'Surat'],
                correct: 1,
                quiz: 'gk'

            },
            {
                ques: "__________ is known as the City of Lakes in India?",
                option: ['Indore', 'Udaipur', 'Jaipur', 'Surat'],
                correct: 1,
                quiz: 'gk'

            },
            {
                ques: "__________ is known as the City of Lakes in India?",
                option: ['Indore', 'Udaipur', 'Jaipur', 'Surat'],
                correct: 1,
                quiz: 'gk'

            },
            {
                ques: "__________ is known as the City of Lakes in India?",
                option: ['Indore', 'Udaipur', 'Jaipur', 'Surat'],
                correct: 1,
                quiz: 'gk'

            },
            {
                ques: "__________ is known as the City of Lakes in India?",
                option: ['Indore', 'Udaipur', 'Jaipur', 'Surat'],
                correct: 1,
                quiz: 'gk'

            },
            {
                ques: "__________ is known as the City of Lakes in India?",
                option: ['Indore', 'Udaipur', 'Jaipur', 'Surat'],
                correct: 1,
                quiz: 'gk'

            },
            {
                ques: "__________ is known as the City of Lakes in India?",
                option: ['Indore', 'Udaipur', 'Jaipur', 'Surat'],
                correct: 1,
                quiz: 'gk'

            },
            {
                ques: "__________ is known as the City of Lakes in India?",
                option: ['Indore', 'Udaipur', 'Jaipur', 'Surat'],
                correct: 1,
                quiz: 'gk'

            },
        ]
    )
    console.log("ok");
    res.json({ message: "Success" })
})



router.get('/score', async (req, res) => {
    user = await Score.create(
        {
            user: "61fb5e40b6aa9a9249cfcbe6",

            score: 12,
            quiz: 'gk'

        }
    )
    console.log("ok", user);
    res.json({ message: "Success" })
})

router.get('/quiz/:quizID', fetchuser, async (req, res) => {
    try {
        userID = req.user.id
        const quizData = await Question.find({quiz : req.params.quizID})
        res.send(quizData)
    } catch (error) {

    }
})


router.get('/getscore', fetchuser, async (req, res) => {
    try {
        userID = req.user.id
        const score = await Score.find({ user:userID })
        res.send(score)
    } catch (error) {
        
    }
})
router.get('/contact', fetchuser, async (req, res) => {
    try {
        userID = req.user.id
        const score = await Score.find({ user:userID })
        res.send(score)
    } catch (error) {

    }
})



module.exports = router