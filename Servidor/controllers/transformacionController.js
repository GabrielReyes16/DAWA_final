const Transformacion = require('../models/Transformacion');

// Crear una transformacion
exports.crearTransformacion = async (req, res) => {
    try {
        let transformacion = new Transformacion(req.body);
        await transformacion.save();
        res.json(transformacion);
        console.log('Transformacion creada!');
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error tratando de crear una transformacion');
    }
}

// Ver las transformaciones
exports.obtenerTransformaciones = async (req, res) => {
    try {
        const transformaciones = await Transformacion.find();
        res.json(transformaciones);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error tratando de obtener las transformaciones');
    }
}

// Modificar una transformacion
exports.modificarTransformacion = async (req, res) => {
    try {
        const { nombre, descripcion } = req.body;
        let transformacion = await Transformacion.findById(req.params.id);

        if (!transformacion) {
            return res.status(404).json({ msg: 'Transformacion no encontrada' });
        }

        transformacion.nombre = nombre;
        transformacion.descripcion = descripcion;

        transformacion = await Transformacion.findOneAndUpdate({ _id: req.params.id }, transformacion, { new: true });
        res.json(transformacion);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error tratando de modificar una transformacion');
    }
}

// Obtener una transformacion por id
exports.obtenerTransformacion = async (req, res) => {
    try {
        let transformacion = await Transformacion.findById(req.params.id);

        if (!transformacion) {
            return res.status(404).json({ msg: 'Transformacion no encontrada' });
        }

        res.json(transformacion);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error tratando de obtener una transformacion');
    }
}

// Eliminar una transformacion
exports.eliminarTransformacion = async (req, res) => {
    try {
        let transformacion = await Transformacion.findById(req.params.id);

        if (!transformacion) {
            return res.status(404).json({ msg: 'Transformacion no encontrada' });
        }

        await Transformacion.deleteOne({ _id: req.params.id });
        res.json({ msg: 'Transformacion eliminada correctamente' });
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error tratando de eliminar una transformacion');
    }
}
