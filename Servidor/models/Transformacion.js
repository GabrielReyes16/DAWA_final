const mongoose = require('mongoose');

const TransformacionSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        trim: true
    },
    descripcion: {
        type: String,
        required: true,
        trim: true
    }
});

module.exports = mongoose.model('Transformacion', TransformacionSchema);
