const router = require('express').Router()
const expenseController = require('../controllers/expenseContolleur')

const { EXPENSES_URL } = require('../constants/url')

router.post(EXPENSES_URL, expenseController.create)
router.get(EXPENSES_URL, expenseController.findAll)
router.get(EXPENSES_URL + '/:id', expenseController.findById)
router.put(EXPENSES_URL + '/:id', expenseController.updateAll)
router.patch(EXPENSES_URL + '/:id', expenseController.update)
router.delete(EXPENSES_URL + '/:id', expenseController.remove)

module.exports = router