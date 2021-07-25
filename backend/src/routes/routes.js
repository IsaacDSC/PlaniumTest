const { Router } = require('express')
const router = Router()
const PlansController = require('../controller/PlansController')

router.get('/', PlansController.Index)
router.post('/plan', PlansController.ChoicePlans)
router.post('/plan/choice', PlansController.ChoicePlans)
router.post('/plan/register', PlansController.registerProposal)
router.get('/choices/disponibles', PlansController.ChoicesDisponibles)



module.exports = router