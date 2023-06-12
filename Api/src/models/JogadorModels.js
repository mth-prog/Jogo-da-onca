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

const getById = async (id) => {
    const select = await pool.connect();
    const res = await select.query(`SELECT * FROM JOGADOR WHERE Id = ${id}`);
    return res.rows;
};


//cria novos usuarios
const create = async (user) => {

    const { Nome, IsActive, Login, Senha, Email } = user;

    const str_query = `INSERT INTO JOGADOR (Nome, IsActive, Login, Senha, Email) VALUES ('${Nome}', ${IsActive}, '${Login}', '${Senha}', '${Email}')`;

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
    

    const { Nome, IsActive, Login, Senha, Email } = User;
    
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


    if (Email != '') {
        var qr_Email = `Email = '${Email}'`;  
        str_query = `${str_query}, ${qr_Email}`;
    }

    // colocando o where 
    const final_str = `${str_query} WHERE id = ${id}`;
    
    const connect = await pool.connect();
    const updateUser = await connect.query(final_str);
    return updateUser;

};


const getEmailUser = async (email) => {

    const str_query = `SELECT * FROM JOGADOR WHERE email = '${email}'`;
    const connect = await pool.connect();
    const EmailUser = await connect.query(str_query);
    return EmailUser.rows;
};

module.exports = {
    getAll,
    create,
    deleteUser,
    updateUser,
    getEmailUser,
    getById
};
