const ReadWrite = require('../helpers/ReadWrite')

class PlansModel {
    async Plans() {
        let Plans = await ReadWrite.read('plans')
        return Plans
    }
    async ChoicePlans(CodePlan, Years, NumberDependeces) {
        let PricePlans = await ReadWrite.read('prices') // call datas prices

        //check years to price value plan => "faixa"
        let track_one = Years == 0 || Years <= 17
        let track_tow = Years >= 18 || Years <= 40
        let track_three = Years > 40

        switch (PricePlans) {
            case track_one:
                let PriceValueOne = PricePlans.find(code => code.codigo === CodePlan && code.faixa1 && code.minimo_vidas == NumberDependeces) // search value to plan
                return (PriceValueOne)
            case track_tow:
                let PriceValueTow = PricePlans.find(code => code.codigo === CodePlan && code.faixa2 && code.minimo_vidas == NumberDependeces) // search value to plan
                return (PriceValueTow)
            case track_three:
                let PriceValueThree = PricePlans.find(code => code.codigo === CodePlan && code.faixa3 && code.minimo_vidas == NumberDependeces) // search value to plan
                return (PriceValueThree)
            default:
                return 'Preencha os campos corretamente e tente novamente!'
        }


    }

}


/* ------------------para escolher o plano-------------------
    receive code the plans 
    receive years person (idade)
    receive number dependecies in plan (minimo_vidas)
    return price value plan

*/


module.exports = new PlansModel