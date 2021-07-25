const PlansModel = require('../models/PlansModel')

let DATA = []

class PlansController {
    async Index(req, res) {
        let Planos = await PlansModel.Search('plans')
        return res.status(200).send(Planos)
    }
    async ChoicePlans(req, res) {
        const { _token, nome, codigo, dependentes, idade } = req.body
        if (_token) {
            let price = await PlansModel.ChoicePlans(Number(codigo), Number(idade), Number(dependentes))
            DATA.push({ price })
            return res.status(200).send({ _token: req.body._token, prices: price })
        } else res.status(404).send('Token não Encontrado')
    }

    async registerProposal(req, res) {
        if (req.body._token) {
            const insertJson = await PlansModel.RegisterProposal(req.body)
            return res.status(200).send(req.body._token)
        } else res.status(404).send('Token não Encontrado')
    }

    async ChoicesDisponibles(req, res) {
        DATA.pop()
        return res.status(200).json({ DATA })
    }


}


module.exports = new PlansController