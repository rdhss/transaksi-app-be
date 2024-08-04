const customerController = require('../controllers/customerCotroller')


const router = require('express').Router()

router.post('/', customerController.addCustomer)
router.get('/', customerController.listCustomer)
router.get('/:id', customerController.listCustomerById)
router.patch('/:id', customerController.updateCustomer)
router.delete('/:id', customerController.deleteCustomer)

module.exports = router