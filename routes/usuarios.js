// Utiliando destructuracion de express
const { Router } = require('express');
const {usuariosGet, usuariosDelete , usuariosPost, usuariosPut} = require("../controllers/usuarios");
const router = Router();

router.get('/', usuariosGet);

router.put('/:id', usuariosPut);

router.post('/', usuariosPost);

router.delete('/', usuariosDelete);

module.exports = router;
