/* 
vai vir as funçoes da router  
fazendo conexao com bd 
*/
const SkinModels = require('../models/SkinModels');

//_req = para parametros nao obrigatorios
const getAll = async (_req, res) => {
    const crud = await SkinModels.getAll();
    return res.status(200).json(crud);
};
/*createUser fazer para formulario de cadastro de jogadores novos e fazer o request por  body
 - [] fazer função pra upload para s3 e gerando uma url para inserir no bd 
*/
const createSkin = async (req, res) => {
    const create = await SkinModels.create(req.body);
    return res.status(201).json(create);
};

//delete usar por parametro ou url
const deleteSkin = async (req, res) => {
    const { id } = req.params;

    await SkinModels.deleteUser(id);
    return res.status(204).json();
};

// update precisa da url e body tbm 
const updateSkin = async (req, res) => {
    const { id } = req.params;
    await SkinModels.updateUser(id, req.body);
    return res.status(204).json(req.params);
};


module.exports = {
    getAll, 
    createSkin,
    deleteSkin,
    updateSkin
};