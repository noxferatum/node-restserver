require('./config/config');

const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const app = express();

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));
// parse application/json
app.use(express.json());

// habilitar la carpeta public
app.use(express.static(path.resolve(__dirname, '../public')));

// ConfiguraciИn global de rutas
app.use(require('./routes/index'));

const startServer = async() => {
    try {
        await mongoose.connect(process.env.URLDB);
        console.log('Base de datos ONLINE');

        app.listen(process.env.PORT, () => {
            console.log('Escuchando puerto: ', process.env.PORT);
        });
    } catch (err) {
        console.error('Error al conectar con la base de datos', err);
        process.exit(1);
    }
};

startServer();
