//Rutas para la raza
const express = require('express');
const router = express.Router();
const controller = require('../controllers/razaController');

//api/razas
router.post('/', controller.crearRaza);
router.get('/', controller.obtenerRazas);
router.put('/:id', controller.modificarRaza);
router.get('/:id', controller.obtenerRaza);
router.delete('/:id', controller.eliminarRaza);

module.exports = router;
