const Raza = require('../models/Raza');

//crear una raza
exports.crearRaza = async (req, res) => {
    try{
        let raza;
        raza = new Raza(req.body);
        await raza.save();
        res.send(raza);
        console.log('Raza creada!')
    } catch(error){
        console.log(error);
        res.status(500).send('Hubo un error tratando de crear una raza');
    }
}

//ver las razas
exports.obtenerRazas = async (req, res) => {
    try{
        const razas = await Raza.find();
        res.json(razas);
    } catch(error){
        console.log(error);
        res.status(500).send('Hubo un error tratando de obtener las razas');
    }
}

//modificar una raza
exports.modificarRaza = async (req, res) => {
    try{
        const {nombre, descripcion, planeta_origen} = req.body;
        let raza = await Raza.findById(req.params.id);
        //Si la raza no existe
        if(!raza){
            res.status(404).json({msg: 'Raza no encontrada'});
        }
        //Crear un nuevo objeto con la nueva información
        raza.nombre = nombre;
        raza.descripcion = descripcion;
        raza.planeta_origen = planeta_origen;

        raza = await Raza.findOneAndUpdate({_id: req.params.id}, raza, {new: true});
        res.json(raza);
    } catch(error){
        console.log(error);
        res.status(500).send('Hubo un error tratando de modificar una raza');
    }
}

//obtener una raza
exports.obtenerRaza = async (req, res) => {
    try{
        let raza = await Raza.findById(req.params.id);
        if(!raza){
            res.status(404).json({msg: 'Raza no encontrada'});
        }
        res.json(raza);
    } catch(error){
        console.log(error);
        res.status(500).send('Hubo un error tratando de obtener una raza');
    }
}

//eliminar una raza
exports.eliminarRaza = async (req, res) => {
    try{
        let raza = await Raza.findById(req.params.id);

        if(!raza){
            res.status(404).json({msg: 'Raza no encontrada'});
        }
        await Raza.findOneAndRemove({_id: req.params.id});
        res.json({msg: 'Raza eliminada'});
    } catch(error){
        console.log(error);
        res.status(500).send('Hubo un error tratando de eliminar una raza');
    }
}