/* 
vai vir as funçoes da router  
fazendo conexao com bd 
*/
const TemaModels = require('../models/TemaModels');

//_req = para parametros nao obrigatorios
const getAll = async (_req, res) => {
    const crud = await TemaModels.getAll();
    return res.status(200).json(crud);
};

const createTema = async (req, res) => {

    const { NomeTema } = req.body;
    await TemaModels.create(req.files, NomeTema);
    return res.status(204).send();
};

//delete usar por parametro ou url
const deleteTema = async (req, res) => {
    const { id } = req.params;

    await TemaModels.deleteUser(id);
    return res.status(204).json('ok');
};

// update precisa da url e body tbm 
const updateTema = async (req, res) => {
    const { id } = req.params;
    const update = await TemaModels.updateUser(id, req.query);
    return res.status(200).json({update});
};


module.exports = {
    getAll, 
    createTema,
    deleteTema,
    updateTema
};