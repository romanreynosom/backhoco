const express = require('express');
const Usuario = require('../models/Usuario');
const {validationResult} = require('express-validator');



const crearUsuario = async (req, res = express.response)=> {
  console.log(req.body);

  const {usuario, email, telefono} = req.body;
   
   const usuarios = new Usuario(req.body);
   await usuarios.save();

    return res.status(200).json(
     {message: 'usuario creado',
      usuario, telefono, email }
    )}



    module.exports = {
        crearUsuario
    }