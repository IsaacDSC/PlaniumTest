const PlansModel = require('../models/PlansModel')


const run = async() => {
    let price = await PlansModel.ChoicePlans(1, 20, 1)
    console.log(price)
}

run()