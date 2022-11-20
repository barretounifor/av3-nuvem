const express = require('express');
const allRoutes = require('./routes/allRoutes.routes');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000
app.use(express.json())
app.use(cors())
app.use('/images', express.static('./herois_fotos'))
app.use(allRoutes)

app.listen(port, () => {
    console.log(`Server listening in ${port}`)
})