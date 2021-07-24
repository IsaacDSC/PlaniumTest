const PlansModel = require('../models/PlansModel')

class PlansController {
    async Index(req, res) {
        let Planos = await PlansModel.Search('plans')
        return res.status(200).send(Planos)
    }
    async ChoicePlans(req, res) {
        /* const { CodePlan, Years, NumberDependeces } = req.body */
        let price = await PlansModel.ChoicePlans(5, 41, 1)
        return res.status(200).json(price)
    }

    async registerProposal(req, res) {
        console.log(req.body)
            /*   let DATA = []
              DATA.push({ nome: 'IsaacDSC', idade: 19, codigo: 1, minimo_vidas: 1, value: 80 }) */
        return res.status(200).send(req.body)
    }


}


module.exports = new PlansController