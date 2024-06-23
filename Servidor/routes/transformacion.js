const express = require('express');
const router = express.Router();
const controller = require('../controllers/transformacionController');

// api/transformaciones
router.post('/', controller.crearTransformacion);
router.get('/', controller.obtenerTransformaciones);
router.put('/:id', controller.modificarTransformacion);
router.get('/:id', controller.obtenerTransformacion);
router.delete('/:id', controller.eliminarTransformacion);

module.exports = router;
