const { response, request } = require('express');

const usuariosGet = (req = request, res = response) => {
    // resivir todo lo que haya en el query
    const {q, nombre = 'No name', apikey, page = 1, limit} = req.query;
    res.json({
        msg: 'get API - controlador',
        q,
        nombre,
        apikey,
        page,
        limit
    });
};

const usuariosPut =  (req = request, res = response ) => {
    // obteniendo el request de la routa
    // const id = req.params.id;
    const { id } = req.params;

    res.json({
        msg: 'put API',
        id
    });
};

const usuariosPost  = (req, res = response ) => {
    const { nombre, edad} = req.body;
    res.json({
        msg: 'post API',
        nombre,
        edad
    });
};

const usuariosDelete = (req, res = response ) => {
    res.json({
        msg: 'delete API'
    });
};

module.exports = {
    usuariosGet,
    usuariosDelete,
    usuariosPost,
    usuariosPut
}
// abner lopez
