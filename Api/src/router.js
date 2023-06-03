/* 
irá conter todas as rotas da api

sendo que as funcoes do das rotas ira ficar no controler que irá acessar o banco 

- [] criar middleware para verificar se esta passando corretamente para o banco

*/

const express = require('express');
const JogadorControllers = require('./controllers/JodadorControllers');
const TemaControllers = require('./controllers/TemaControllers');

const router = express.Router();

//CRUD JOGADOR

//Route params
router.delete('/api/user/:id', JogadorControllers.deleteUser);
router.put('/api/user/:id', JogadorControllers.updateUser);

// Com query
router.post('/api/user', JogadorControllers.createUser);
// sem query 
router.get('/api/user', JogadorControllers.getAll);


//CRUD TEMA
router.get('/api/tema', TemaControllers.getAll);
router.post('/api/tema', TemaControllers.createTema);
router.delete('/api/tema/:id', TemaControllers.deleteTema);
router.put('/api/tema/:id', TemaControllers.updateTema);


//skins e tabuleiros -  [] s3 e [X] rds


//temas


module.exports = router;