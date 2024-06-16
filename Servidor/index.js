const express = require('express');
const db = require('./config/bd');
const cors = require('cors')

// Crear servidor y conectar a la base de datos
const app = express();
db();
app.use(express.json());
app.use(cors());

// Rutas de raza
app.use('/api/razas', require ('./routes/raza'));

app.listen(4000, () =>{
    console.log("Esferas del dragon recolectadas!")
});