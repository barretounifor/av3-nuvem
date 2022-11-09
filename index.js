const express = require('express');
const quizRouter = require('./routes/quiz.routes');
const app = express();
const port = process.env.PORT || 3000
app.use(express.json())
app.use('/images', express.static('./herois_fotos'))
app.use(quizRouter)

app.listen(port, () => {
    console.log(`Server listening in ${port}`)
})