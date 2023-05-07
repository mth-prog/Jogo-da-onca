/* 
vai vir as funçoes da router  
fazendo conexao com bd 
*/
const CrudModels = require('../models/JogadorModels');

const getAll = async (_req, res) => {
    const crud = await CrudModels.getAll();
    return res.status(200).json(crud);
};
//createUser fazer para formulario de cadastro de jogadores novos e fazer o request por  body
const createUser = async (req, res) => {
    const create = await CrudModels.create(req.body);
    return res.status(201).json(create);
};

//delete usar por parametro ou url
const deleteUser = async (req, res) => {
    const { id } = req.params;

    await CrudModels.deleteUser(id);
    return res.status(204).json();
};

// update precisa da url e body tbm 
const updateUser = async (req, res) => {
    const { id } = req.params;
    await CrudModels.updateUser(id, req.body);
    return res.status(204).json(req.params);
};


module.exports = {
    getAll, 
    createUser,
    deleteUser,
    updateUser
};