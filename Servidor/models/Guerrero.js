const mongoose = require('mongoose');

const GuerreroSchema = mongoose.Schema({
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
    raza: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Raza', // Referencia al modelo de Raza
        required: true
    },
    transformaciones: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Transformacion' // Referencia al modelo de Transformacion
    }],
    foto: {
        type: String,
        required: false
    },
    tipo :{
        type: String,
        required: true,
    },
    estado: {
        type: String,
        enum: ['Vivo', 'Muerto'], // Valores permitidos para estado
        default: 'Vivo' // Valor por defecto
    }
});

module.exports = mongoose.model('Guerrero', GuerreroSchema);
