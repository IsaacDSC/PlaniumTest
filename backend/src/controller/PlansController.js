const PlansModel = require('../models/PlansModel')

class PlansController {
    async Index(req, res) {
        let Planos = await PlansModel.Plans()
        return res.status(200).send(Planos)
    }
    async ChoicePlans(req, res) {
        const { CodePlan, Years, NumberDependeces } = req.body
        let price = await PlansModel.ChoicePlans(CodePlan, Years, NumberDependeces)
        return res.status(200).send(price)
    }



}


module.exports = new PlansController