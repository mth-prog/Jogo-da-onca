/* 
irá conter todas as rotas da api

sendo que as funcoes do das rotas ira ficar no controler que irá acessar o banco 


*/

const path = require('path');

const express = require('express');
//controller
const JogadorControllers = require('./controllers/JodadorControllers');
const TemaControllers = require('./controllers/TemaControllers');
const LoginControllers = require('./controllers/LoginControllers');
// const SkinControllers = require('./controllers/SkinControllers');
//middleware
const ImgUpload = require('./middleware/UploadSkinsMiddleware');


const router = express.Router();

// Views
router.get('/admin', (req, res) => {
    res.sendFile(path.join(__dirname, 'Views', 'html', 'index.html'));
});


router.get('/temas.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'Views', 'html', 'temas.html'));
});

router.get('/jogadores.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'Views', 'html', 'jogadores.html'));
});

// router.get('/anuncios.html', (req, res) => {
//     res.sendFile(path.join(__dirname, 'Views', 'html', 'anuncios.html'));
// });

//CRUD JOGADOR
router.delete('/api/user/:id', JogadorControllers.deleteUser);
router.put('/api/user/:id', JogadorControllers.updateUser);
router.get('/api/user/:id', JogadorControllers.getById);
router.get('/api/user', JogadorControllers.getAll);
router.post('/api/user', JogadorControllers.createUser);


//CRUD TEMA
router.get('/api/temas', TemaControllers.getAll);
router.post('/api/temas',  ImgUpload.UploadFiles([
    { name: 'Dog', maxCount: 1 }, 
    { name: 'Onca', maxCount: 1 }
]) ,TemaControllers.createTema); 
router.delete('/api/temas/:id', TemaControllers.deleteTema);
router.put('/api/temas/:id', TemaControllers.updateTema);


//Login 
router.get('/api/login', LoginControllers.getLogin);

// email
router.get('/api/email/:email', JogadorControllers.getEmail);

module.exports = router;