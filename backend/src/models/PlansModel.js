const ReadWrite = require('../helpers/ReadWrite')
const Configurations = require('../config/Configurations')

class PlansModel {

    async Search(database) {
        if (database === 'plans') { //premission read files
            let plans = await ReadWrite.read(Configurations.params().folder_plans)
            return plans
        }
        if (database === 'prices') { //premission read files
            let prices = await ReadWrite.read(Configurations.params().folder_prices)
            return prices
        }
        if (database === 'propostas') { //premission read files
            let content = await ReadWrite.read(Configurations.params().folder_propotas)
            return content
        } else return 'Database não existe ou você não tem permissão de acesso.'
    }

    async ChoicePlans(CodePlan, Years, NumberDependeces) {
        try {
            let PricePrices = await this.Search('prices') // call datas prices
            let PricePlans = await this.Search('plans') // call datas prices
            let PRICES = JSON.parse(PricePrices)
            let PLANS = JSON.parse(PricePlans)

            //check years to price value plan => "faixa"
            let track_one = Years == 0 || Years < 18
            let track_tow = Years >= 18 && Years <= 40
            let track_three = Years > 40

            //console.log(track_one, track_tow, track_three)

            switch (true) {
                case track_one:
                    let PriceValueOne = ''
                    PRICES.forEach(element => { // search value to plan
                        if (element.codigo === CodePlan && element.minimo_vidas == NumberDependeces && element.faixa1) {
                            console.log(element.codigo)
                            let response = { codigo: element.codigo, minimo_vidas: element.minimo_vidas, faixa: element.faixa1 }
                            PriceValueOne = response
                        }
                        if (element.codigo > 6) {
                            PriceValueOne = { error: 'Opção Inválida' }
                        }
                    })
                    return PriceValueOne
                case track_tow:
                    let PriceValueTow = ''
                    PRICES.forEach(element => { // search value to plan
                        if (element.codigo === CodePlan && element.minimo_vidas == NumberDependeces && element.faixa2) {
                            let response = { codigo: element.codigo, minimo_vidas: element.minimo_vidas, faixa: element.faixa2 }
                            PriceValueTow = response
                        }
                        if (element.codigo > 6) {
                            PriceValueTow = { error: 'Opção Inválida' }
                        }
                    })

                    return PriceValueTow
                case track_three:
                    let PriceValueThree = ''
                    PRICES.forEach(element => { // search value to plan
                        if (element.codigo === CodePlan && element.minimo_vidas == NumberDependeces && element.faixa3) {
                            let response = { codigo: element.codigo, minimo_vidas: element.minimo_vidas, faixa: element.faixa3 }
                            PriceValueThree = response
                        }
                        if (element.codigo > 6) {
                            PriceValueThree = { error: 'Opção Inválida' }
                        }
                    })
                    return PriceValueThree
                default:
                    return 'Preencha os campos corretamente e tente novamente!'
            }
        } catch (error) {
            console.log(error)
            return error
        }

    }

    RegisterProposal(Content) {
        let insert = ReadWrite.write(Content, 'propostas')
        return insert
    }

}


/* ------------------para escolher o plano-------------------
    receive code the plans 
    receive years person (idade)
    receive number dependecies in plan (minimo_vidas)
    return price value plan

*/


module.exports = new PlansModel