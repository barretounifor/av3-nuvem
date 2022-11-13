const questionsRoute = require('express').Router()

questionsRoute.get("/questions/1", (req, res) => {
    const firstQuestion = require('../question/1st-question.json');

    return res.json(firstQuestion)
})

module.exports = questionsRoute