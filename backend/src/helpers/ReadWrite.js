const fs = require('fs');
const Configurations = require('../config/Configurations');

class ReadWrite {
    async read(database) {
        if (database == 'plans') {
            let plans = await fs.readFileSync(Configurations.params().folder_plans, "utf8");
            return plans
        }
        if (database == 'prices') {
            let prices = await fs.readFileSync(Configurations.params().folder_prices, "utf8");
            return prices
        }
    }
    async write() {}
}

module.exports = new ReadWrite