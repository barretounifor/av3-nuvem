const allRoutes = require('express').Router();
const questionsRoutes = require('./questions.routes')
const quizRouter = require('./quiz.routes')

allRoutes.use(quizRouter, questionsRoutes);

module.exports = allRoutes