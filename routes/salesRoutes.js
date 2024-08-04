const salesController = require('../controllers/salesController')


const router = require('express').Router()

router.post('/', salesController.addSales)
router.get('/', salesController.listSales)
router.get('/:id', salesController.listSalesbyId)
router.patch('/:id', salesController.updateSales)
router.delete('/:id', salesController.deleteSales)

module.exports = router