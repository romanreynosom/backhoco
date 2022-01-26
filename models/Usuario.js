const {Schema, model} = require('mongoose');


const usuarioSchema = Schema({
usuario: {
    type: String,
    require: true
},
email:{
    type: String,
    require: true,
    unique: true
},

telefono:{
    type: String,
    require: true
}
})

module.exports = model('Usuario', usuarioSchema);
