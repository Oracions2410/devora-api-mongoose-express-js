require('dotenv').config()
const http = require('http')

const app = require('./app')

const server = http.createServer(app)

const port = process.env.PORT || 17300

server.listen(port, console.log(`Server is running on http://localhost:${port}`))