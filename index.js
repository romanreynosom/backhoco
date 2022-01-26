const express = require('express');
const { dbConnection } = require('./database/config');
require('dotenv').config();
const Port = 8080;


const app = express();
dbConnection();

app.use(express.static('public'));
app.use(express.json());
app.use('/usuarios', require('./routes/auth'))









app.listen(process.env.Port, () => {
    console.log(`servidor corriendo ${Port}`)
})

