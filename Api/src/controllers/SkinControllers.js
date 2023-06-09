/* 
vai vir as funçoes da router  
fazendo conexao com bd 
*/

/*createUser fazer para formulario de cadastro de jogadores novos e fazer o request por  body
 - [] fazer função pra upload para s3 e gerando uma url para inserir no bd 
*/

const SkinModels = require('../models/SkinModels');

//_req = para parametros nao obrigatorios
const getAllSkin = async (_req, res) => {
    const crud = await SkinModels.getAllSkin();
    return res.status(200).json(crud);
};

const createSkin = async (req, res) => {
    const { type } = req.body; 
    const Files = req.files; 
    
    const create = await SkinModels.createSkin(type, Files);
    return res.status(201).json(create);
};

//delete usar por parametro ou url
const deleteSkin = async (req, res) => {
    const { id } = req.params;

    await SkinModels.deleteSkin(id);
    return res.status(204).json();
};

// update precisa da url e body tbm 
const updateSkin = async (req, res) => {
    const { id } = req.params;
    await SkinModels.updateSkin(id, req.body);
    return res.status(204).json(req.params);
};


module.exports = {
    getAllSkin, 
    createSkin,
    deleteSkin,
    updateSkin
};