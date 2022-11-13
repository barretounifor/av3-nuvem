const questionsRoute = require('express').Router()

questionsRoute.get("/questions/1", (req, res) => {
    const firstQuestion = require('../question/1st-question.json');

    return res.json(firstQuestion)
})

questionsRoute.get("/questions/2", (req, res) => {
    const secondQuestion = require('../question/2st-question.json');

    return res.json(secondQuestion)
})

questionsRoute.get("/questions/3", (req, res) => {
    const thirdQuestion = require('../question/3st-question.json');

    return res.json(thirdQuestion)
})

questionsRoute.get("/questions/4", (req, res) => {
    const fourthQuestion = require('../question/4st-question.json');

    return res.json(fourthQuestion)
})

module.exports = questionsRoute