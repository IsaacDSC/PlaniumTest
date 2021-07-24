const { Router } = require('express')
const router = Router()
const PlansController = require('../controller/PlansController')

router.get('/', PlansController.Index)
router.post('/plan', PlansController.ChoicePlans)
router.get('/plan/choice', PlansController.ChoicePlans)
router.post('/plan/register', PlansController.registerProposal)



module.exports = router