class Configurations {
    params() {
        const configuration = {
            PORT: process.env.PORT || 3333,
            folder_plans: path.join(__dirname, '../', 'database', 'plans.json'),
            folder_prices: path.join(__dirname, '../', 'database', 'plans.json')
        }
        return configuration
    }
}


module.exports = new Configurations