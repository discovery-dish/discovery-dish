const router = require('express').Router();
const usersController = require('./../src/controllers/users');


router.get('/users', usersController.listar);
router.get('/users/:id', usersController.ver);
router.post('/users', usersController.crear);
router.put('/users/:id', usersController.editar);
router.delete('/users/:id', usersController.eliminar);

module.exports = router;