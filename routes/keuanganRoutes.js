const express = require('express');
const router = express.Router();
const keuanganController = require('../controllers/keuanganController');

router.get('/', keuanganController.getAllPemasukan);
router.get('/:id', keuanganController.getPemasukanById);
router.post('/', keuanganController.createPemasukan);
router.put('/:id', keuanganController.updatePemasukan);
router.delete('/:id', keuanganController.deletePemasukan);

module.exports = router;