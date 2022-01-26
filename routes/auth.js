const {Router} = require('express');
const router = Router();
const{check} = require('express-validator');


const{crearUsuario} = require('../controllers/auth');
const { validarCampos } = require('../middlewares/validar-campos');


router.get('/', (req,res)=> {
    res.json(
     {message: 'bien venido a nuestra api'}
    );
})

router.post('/new', 
[
    check('usuario','El nombre es obligatorio').not().isEmpty(),
    check('email', 'El email es obligatorio').isEmail(),
    check('telefono', 'El telefono debe tener minimo 8 caracteres').isLength({min:8}),
    validarCampos
],


crearUsuario)


module.exports = router;