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
quizRouter.post('/hero-matches', (req, res) => {
    const { options } = req.body;
    const heroesMatches = [];
    heroList.forEach(hero => {
        let thatHeroMatches = 0;
        const gen = hero.caracteristicas[0];
        const haveCover = hero.caracteristicas[1];
        const humanOrnot = hero.caracteristicas[2];
        const fly = hero.caracteristicas[3];
        console.log({ gen, haveCover, humanOrnot, fly })
        console.log(req.body);

        //localStorage.setItem("answers",`["Homem","Tem Capa","É humano","Voa"]`) 
        if (gen == options[0]) {
            thatHeroMatches++
        }
        if (haveCover == options[1]) {
            thatHeroMatches++
        }
        if (humanOrnot == options[2]) {
            thatHeroMatches++
        }
        if (fly == options[3]) {
            thatHeroMatches++
        }
        if (thatHeroMatches == 4) {
            heroesMatches.push(hero);

        }

    })
    return res.json({ message: "Qual o poder do seu herói?", answers: heroesMatches });
})
module.exports = quizRouter;