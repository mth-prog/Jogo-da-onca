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
    const { Nome, IsActive, Login, Senha } = user;

    const str_query = `INSERT INTO JOGADOR (Nome, IsActive, Login, Senha) VALUES ('${Nome}', ${IsActive}, '${Login}', '${Senha}')`;
    const connect = await pool.connect();
    const createdUser = await connect.query(str_query);

    return createdUser;

};


const deleteUser = async (id) => {
    const str_query = `DELETE FROM JOGADOR WHERE id = ${id}`;
    const connect = await pool.connect();
    const deleteUser = await connect.query(str_query);

    return deleteUser;
};

const updateUser = async (id, User) => {
    
    const { Nome, IsActive, Login, Senha } = User;

    var query = 'UPDATE JOGADOR SET';
    var str_query;
    
    // melhorar essa merda

    if (Nome != '' ) {
        var qr_nome = `NOME = '${Nome}'`;
        str_query = `${query} ${qr_nome}`;
    }

    if (IsActive != '') {
        var qr_IsActive = `IsActive = ${IsActive}`;
        str_query = `${str_query}, ${qr_IsActive}`;
    }
        
    if (Login !=  '') {
        var qr_Login = `Login = '${Login}'`;  
        str_query = `${str_query}, ${qr_Login}`;
    }

    if (Senha != '' ) {
        var qr_Senha = `Senha = '${Senha}'`;  
        str_query = `${str_query}, ${qr_Senha}`;
    }
        
    // colocando o where 
    const final_str = `${str_query} WHERE id = ${id}`;
    
    const connect = await pool.connect();
    const updateUser = await connect.query(final_str);
    return updateUser;

};


module.exports = {
    getAll,
    create,
    deleteUser,
    updateUser
};