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
/*createUser fazer para formulario de cadastro de jogadores novos e fazer o request por  body
 - [] fazer função pra upload para s3 e gerando uma url para inserir no bd 
*/


const createTema = async (req, res) => {
    const create = await TemaModels.create(req.query);
    return res.status(201).json(create);
};

//delete usar por parametro ou url
const deleteTema = async (req, res) => {
    const { id } = req.params;

    await TemaModels.deleteUser(id);
    return res.status(204).json();
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