const Raza = require('../models/Raza');

//crear una raza
exports.crearRaza = async (req, res) => {
    try {
        let raza = new Raza(req.body); // Creación de una nueva instancia de Raza con los datos del cuerpo de la solicitud
        await raza.save(); // Guardar la nueva raza en la base de datos
        res.send(raza); // Enviar la raza creada como respuesta
        console.log('Raza creada!');
    } catch(error) {
        console.log(error);
        res.status(500).send('Hubo un error tratando de crear una raza');
    }
}

//ver las razas
exports.obtenerRazas = async (req, res) => {
    try {
        const razas = await Raza.find(); // Obtener todas las razas desde la base de datos
        res.json(razas); // Enviar las razas encontradas como respuesta en formato JSON
    } catch(error) {
        console.log(error);
        res.status(500).send('Hubo un error tratando de obtener las razas');
    }
}

//modificar una raza
exports.modificarRaza = async (req, res) => {
    try {
        const { nombre, descripcion, planeta_origen, estado } = req.body; // Extraer datos del cuerpo de la solicitud
        let raza = await Raza.findById(req.params.id); // Buscar la raza por su ID

        if (!raza) {
            return res.status(404).json({ msg: 'Raza no encontrada' });
        }

        // Actualizar los campos de la raza encontrada
        raza.nombre = nombre;
        raza.descripcion = descripcion;
        raza.planeta_origen = planeta_origen;
        raza.estado = estado;

        // Guardar y devolver la raza actualizada
        raza = await Raza.findOneAndUpdate({ _id: req.params.id }, raza, { new: true });
        res.json(raza);
    } catch(error) {
        console.log(error);
        res.status(500).send('Hubo un error tratando de modificar una raza');
    }
}


//obtener una raza
exports.obtenerRaza = async (req, res) => {
    try {
        let raza = await Raza.findById(req.params.id); // Buscar la raza por su ID

        if (!raza) {
            return res.status(404).json({ msg: 'Raza no encontrada' });
        }

        res.json(raza); // Enviar la raza encontrada como respuesta en formato JSON
    } catch(error) {
        console.log(error);
        res.status(500).send('Hubo un error tratando de obtener una raza');
    }
}


//eliminar una raza
exports.eliminarRaza = async (req, res) => {
    try {
        let raza = await Raza.findById(req.params.id); // Buscar la raza por su ID

        if (!raza) {
            return res.status(404).json({ msg: 'Raza no encontrada' });
        }

        raza.estado = false; // Cambiar el estado a false (marcar como extinta)
        await raza.save(); // Guardar el cambio en la base de datos

        res.json({ msg: 'Raza marcada como extinta' }); // Enviar mensaje de éxito
    } catch(error) {
        console.log(error);
        res.status(500).send('Hubo un error tratando de eliminar una raza');
    }
}
