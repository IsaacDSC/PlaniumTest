const express = require('express')
const path = require('path')

class App {
    constructor() {
        this.express = express()
    }
}


module.exports = new App().express