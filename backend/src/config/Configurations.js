const path = require('path')
class Configurations {
    params() {
        const configuration = {
            PORT: process.env.PORT || 3333,
            folder_plans: path.join(__dirname, '../', 'database', 'plans.json'),
            folder_prices: path.join(__dirname, '../', 'database', 'prices.json'),
            folder_propotas: path.join(__dirname, '../', 'database', 'proposta.json')
        }
        return configuration
    }
}


module.exports = new Configurations