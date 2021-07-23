const { Router } = require('express')
const router = Router()
const PlansController = require('../controller/PlansController')

router.get('/', PlansController.Index)
router.post('/plan', PlansController.ChoicePlans)


module.exports = router