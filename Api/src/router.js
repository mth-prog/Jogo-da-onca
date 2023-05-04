/* 
irá conter todas as rotas da api

sendo que as funcoes do das rotas ira ficar no controler que irá acessar o banco 

- [] criar middleware para verificar se esta passando corretamente para o banco

*/
const path = require('path');

const express = require('express');
const crudControllers = require('./controllers/CrudControllers');

const router = express.Router();

//crud de jogador
router.get('/api/user', crudControllers.getAll); //select
router.post('/api/user', crudControllers.createUser);
router.delete('/api/user/:id', crudControllers.deleteUser);
router.put('/api/user/:id', crudControllers.updateUser);

//admin router 

router.get('/admin', function(req, res) {
    res.sendFile(path.join(__dirname, '/admin/html/login.html'));
});

//carteira parte da moeda (comprar e gastar)


//skins e tabuleiros -  [] s3 e [X] rds


//temas


module.exports = router;