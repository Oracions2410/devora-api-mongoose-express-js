const express = require('express')
const cors = require('cors')
const morgan = require('morgan')

const expenseRouter = require('./api/routes/expenseRoutes')
const { API_ROOT_URL } = require('./api/constants/url')

const app = express()

const corsOptions = {
    origin: 'https://localhost:4200'
}

app.use(cors(corsOptions))
app.use(morgan('dev'))

app.use('/ping', (req, res) => {
    res.send(`Devora API is running on ${req.protocol}://${req.host}:${process.env.port}`)
})


app.use(API_ROOT_URL, expenseRouter)

app.use((req, res, next) => {
    const error = new Error('Ressource not found')
    error.status = 404
    next(error)
})

app.use((error, req, res, next) => {
    res.status(error.status || 500)
    res.json({ error: error.message })
})

module.exports = app

