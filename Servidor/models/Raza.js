const mongoose = require('mongoose');

const RazaSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        trim: true
    },
    descripcion: {
        type: String,
        required: true,
        trim: true
    },
    planeta_origen: {
        type: String,
        required: false,
        trim: true
    },
    estado: {
        type: Boolean,
        default: true

    }
});

module.exports = mongoose.model('Raza', RazaSchema);