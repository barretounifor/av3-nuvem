const express = require('express');
const allRoutes = require('./routes/allRoutes.routes');
const app = express();
const port = process.env.PORT || 3000
app.use(express.json())
app.use('/images', express.static('./herois_fotos'))
app.use(allRoutes)

app.listen(port, () => {
    console.log(`Server listening in ${port}`)
})