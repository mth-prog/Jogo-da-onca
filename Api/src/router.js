/* 
irá conter todas as rotas da api

sendo que as funcoes do das rotas ira ficar no controler que irá acessar o banco 

- [] criar middleware para verificar se esta passando corretamente para o banco

*/
const path = require('path');

const express = require('express');
const JogadorControllers = require('./controllers/JodadorControllers');
const TemaControllers = require('./controllers/TemaControllers');
const ImgUpload = require('./middleware/UploadSkinsControllers');


const router = express.Router();

//CRUD JOGADOR

//Route params
router.delete('/api/user/:id', JogadorControllers.deleteUser);
router.put('/api/user/:id', JogadorControllers.updateUser);

// sem query 
router.get('/api/user', JogadorControllers.getAll);


//CRUD TEMA
router.get('/api/tema', TemaControllers.getAll);
router.post('/api/tema', TemaControllers.createTema);
router.delete('/api/tema/:id', TemaControllers.deleteTema);
router.put('/api/tema/:id', TemaControllers.updateTema);

//admin router 

router.get('/admin', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'html', 'index.html'));
});

// upload de imagens (skin carro)

router.get('/upload/skin', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'html', 'teste.html'));
});

router.post('/upload/skin', ImgUpload.UploadFiles('image'), (req, res) => {
    console.log('', req.body);
    console.log('', req.files);
    res.send({});
});

 
module.exports = router;