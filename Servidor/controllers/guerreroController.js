const Guerrero = require('../models/Guerrero');

// Crear un guerrero
exports.crearGuerrero = async (req, res) => {
    try {
        let guerrero = new Guerrero(req.body);
        await guerrero.save();
        res.json(guerrero);
        console.log('Guerrero creado!');
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error tratando de crear un guerrero');
    }
}

// Obtener todos los guerreros
exports.obtenerGuerreros = async (req, res) => {
    try {
        const guerreros = await Guerrero.find().populate('raza').populate('transformaciones');
        res.json(guerreros);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error tratando de obtener los guerreros');
    }
}

// Obtener un guerrero por ID
exports.obtenerGuerrero = async (req, res) => {
    try {
        let guerrero = await Guerrero.findById(req.params.id).populate('raza').populate('transformaciones');

        if (!guerrero) {
            return res.status(404).json({ msg: 'Guerrero no encontrado' });
        }

        res.json(guerrero);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error tratando de obtener un guerrero');
    }
}

// Modificar un guerrero
exports.modificarGuerrero = async (req, res) => {
    try {
        const { nombre, descripcion, raza, transformaciones, foto, tipo, estado } = req.body;
        let guerrero = await Guerrero.findById(req.params.id);

        if (!guerrero) {
            return res.status(404).json({ msg: 'Guerrero no encontrado' });
        }

        guerrero.nombre = nombre;
        guerrero.descripcion = descripcion;
        guerrero.raza = raza;
        guerrero.transformaciones = transformaciones;
        guerrero.foto = foto;
        guerrero.tipo = tipo;
        guerrero.estado = estado;

        guerrero = await Guerrero.findOneAndUpdate({ _id: req.params.id }, guerrero, { new: true }).populate('raza').populate('transformaciones');
        res.json(guerrero);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error tratando de modificar un guerrero');
    }
}

// Eliminar un guerrero
exports.eliminarGuerrero = async (req, res) => {
    try {
        let guerrero = await Guerrero.findById(req.params.id);

        if (!guerrero) {
            return res.status(404).json({ msg: 'Guerrero no encontrado' });
        }

        await Guerrero.deleteOne({ _id: req.params.id });
        res.json({ msg: 'Guerrero eliminado correctamente' });
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error tratando de eliminar un guerrero');
    }
}
