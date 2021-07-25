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

                    if (CodePlan > 6) return 'Código inválido' // check if injection code true or false                         
                    let PriceValueOne = PRICES.filter((data, index, array) => data.codigo === CodePlan && data.minimo_vidas == NumberDependeces && data.faixa1)
                    if (PriceValueOne.length > 0) return PriceValueOne
                    if (!PriceValueOne <= 0) return PRICES

                case track_tow:

                    if (CodePlan > 6) return 'Código inválido' // check if injection code true or false                         
                    let PriceValueTow = PRICES.filter((data, index, array) => data.codigo === CodePlan && data.minimo_vidas == NumberDependeces && data.faixa2)
                    if (PriceValueTow.length > 0) return PriceValueTow
                    if (!PriceValueTow <= 0) return PRICES

                case track_three:

                    if (CodePlan > 6) return 'Código inválido' // check if injection code true or false                         
                    let PriceValueThree = PRICES.filter((data, index, array) => data.codigo === CodePlan && data.minimo_vidas == NumberDependeces && data.faixa3)
                    if (PriceValueThree.length > 0) return PriceValueThree
                    if (!PriceValueThree <= 0) return PRICES

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