const express = require('express');
const router = express.Router();
const controller = require('../controllers/guerreroController');

// Rutas para API de Guerreros
router.post('/', controller.crearGuerrero);       // Crear un guerrero
router.get('/', controller.obtenerGuerreros);     // Obtener todos los guerreros
router.get('/:id', controller.obtenerGuerrero);   // Obtener un guerrero por ID
router.put('/:id', controller.modificarGuerrero); // Modificar un guerrero por ID
router.delete('/:id', controller.eliminarGuerrero); // Eliminar un guerrero por ID

module.exports = router;
