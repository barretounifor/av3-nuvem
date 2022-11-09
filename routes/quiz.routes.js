const quizRouter = require('express').Router()
const heroList = require('../heroes.json')

quizRouter.get('/find-hero', (req, res) => {
    const { details } = req.body;
    let resultHero;
    heroList.forEach(hero => {
        let equalsQuantity = 0;
        hero.caracteristicas.map(e => {
            details.map(detail => {
                console.log(equalsQuantity)
                if (e == detail) {
                    equalsQuantity++
                }
                if (equalsQuantity == 5) {
                    resultHero = hero;
                }
            })
        })
    })

    if (resultHero) {
        resultHero.imgUrl = '/images/' + resultHero.profilePicture.replace('./', '')
        return res.json(resultHero)
    }
    return res.json({ message: 'Nenhum herói encontrado com essas características.' })
})

module.exports = quizRouter;