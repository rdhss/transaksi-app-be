const barangController = require('../controllers/barangCotroller')


const router = require('express').Router()

router.post('/', barangController.addBarang)
router.get('/', barangController.listBarang)
router.patch('/:id', barangController.updateBarang)
router.delete('/:id', barangController.deleteBarang)

module.exports = router