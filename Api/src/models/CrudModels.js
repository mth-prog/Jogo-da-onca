/* 
aqui se cria todas as funçoes que interage diretamente com o banco de dados


*/

const pool = require('./connectionBd');

//mostra todos os usuarios
const getAll = async () => {
    const select = await pool.connect();
    const res = await select.query('SELECT * FROM JOGADOR');
    return res.rows;
};

//cria novos usuarios
const create = async (user) => {
    const { UserToCreate } = user;

    const str_query = `INSERT INTO JOGADOR (username) VALUES ('${UserToCreate}')`;
    const connect = await pool.connect();
    const createdUser = await connect.query(str_query);

    return createdUser;

};

//deleta usuarios por id 
// [ ] ver se é melhor por nome

const deleteUser = async (id) => {
    const str_query = `DELETE FROM JOGADOR WHERE user_id = ${id}`;
    const connect = await pool.connect();
    const deleteUser = await connect.query(str_query);

    return deleteUser;
};

const updateUser = async (id, User) => {
    
    const { UpdateName } = User;

    const str_query = `UPDATE JOGADOR SET username = '${UpdateName}' WHERE user_id = ${id}`;
    const connect = await pool.connect();
    const updateUser = await connect.query(str_query);
    return updateUser;
};


module.exports = {
    getAll,
    create,
    deleteUser,
    updateUser
};