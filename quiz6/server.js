const express = require('express')
const app = express()
const {productRouter} = require('../quiz6/backend/routers/routes/productRouter');
const { product, accounts } = require('./backend/Data/product');

app.use(express.json());

// GET
app.use('/',productRouter)
app.use('/',productRouter )

// POST
app.use('/', productRouter)

app.use('/', productRouter)

const PORT = process.env.PORT||5000
app.listen(PORT, () =>{
    console.log(`listen on the port ${PORT}`);
})
