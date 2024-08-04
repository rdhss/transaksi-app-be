require('dotenv').config()
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()

const corsOptions ={
    origin: '*', 
    credentials:true,
    optionSuccessStatus:200
}

// middleware


app.use(express.json())

app.use(express.urlencoded({ extended: true }))

app.use(cors(corsOptions))



// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


// routers

const routeBarang = require('./routes/barangRoutes') 
const routeCustomer = require('./routes/customerRoutes') 
const routeSales = require('./routes/salesRoutes') 
const routeSalesDetail = require('./routes/salesDetailRoutes') 



app.use('/barang', routeBarang)
app.use('/customer', routeCustomer)
app.use('/sales', routeSales)
app.use('/sales-detail', routeSalesDetail)








// testing api

app.get('/', (req, res) => {
    res.json({message : 'hello world'})
})

// port

const PORT = process.env.PORT || 8080

// server

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
})
