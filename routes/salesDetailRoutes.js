const salesController = require('../controllers/salesDetailController')


const router = require('express').Router()

router.post('/', salesController.addSalesDetail)
router.get('/', salesController.listSalesDetail)
router.get('/:id', salesController.listSalesDetailbyId)
router.patch('/:id', salesController.updateSalesDetail)
router.delete('/:salesId/:id', salesController.deleteSalesDetail)

module.exports = router