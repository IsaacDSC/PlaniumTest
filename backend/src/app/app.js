const express = require('express')
const router = require('../routes/routes')
const cors = require('cors')

class App {
    constructor() {
        this.express = express()
        this.middlewares()
        this.cors()
        this.routes()
    }
    routes() {
        this.express.use(router)
    }
    middlewares() {
        this.express.use(express.json())
        this.express.use(express.urlencoded({ extended: true }))
    }
    cors() {
        this.express.use(cors())
    }
}


module.exports = new App().express