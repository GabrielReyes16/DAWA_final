const mongoose = require('mongoose')

const db = async () =>{
    try {
        await mongoose.connect('mongodb://127.0.0.1/saiyandb}', {}); 
        console.log('Conectado a la BD de corporacion Capsula!');
    } catch (error) {
        console.log(error);
        process.exit(1);
    }   
}

module.exports = db;