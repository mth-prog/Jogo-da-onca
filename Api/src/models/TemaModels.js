
/* 
aqui se cria todas as funçoes que interage diretamente com o banco de dados


*/

const pool = require('./connectionBd');

//mostra todas as skins 
const getAll = async () => {
    const select = await pool.connect();
    const res = await select.query('SELECT * FROM TEMA');
    return res.rows;
};

//insere as  novas skins

/* 
aqui se coloca só as urls ou onde as skins estao guardadas
*/
const create = async (Tema) => {
    const { Nome, TableColor, ScoreColor } = Tema;

    const str_query = `INSERT INTO TEMA (Nome, Cor_tabuleiro, Cor_Ponto) 
                        VALUES ('${Nome}', '${TableColor}', '${ScoreColor}')`;

    const connect = await pool.connect();
    const createdUser = await connect.query(str_query);
    return createdUser;

};

//deleta usuarios por id 
// [ ] ver se é melhor por nome

const deleteUser = async (id) => {
    const str_query = `DELETE FROM TEMA WHERE id = ${id}`;
    const connect = await pool.connect();
    const deleteUser = await connect.query(str_query);

    return deleteUser;
};

const updateUser = async (id, Tema) => {
    
    const { Nome, TableColor, ScoreColor } = Tema;
    var query = 'UPDATE TEMA SET';
    var str_query;
    
    // melhorar essa merda

    if (Nome != '') {
        var qr_nome = `NOME = '${Nome}'`;
        str_query = `${query} ${qr_nome}`;
    }

    if (TableColor != '') {
        var qr_table = `Cor_tabuleiro = '${TableColor}'`;
        str_query = `${str_query}, ${qr_table}`;
    }
        
    if (ScoreColor != '') {
        var qr_Color = `Cor_ponto = '${ScoreColor}'`;  
        str_query = `${str_query}, ${qr_Color}`;
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
