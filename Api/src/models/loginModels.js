const pool = require('./connectionBd');

const getLogin = async (user) => {
    const { Login, Senha } = user;
    const select = await pool.connect();
    const res = await select.query(`SELECT * FROM JOGADOR where login = '${Login}' and senha = '${Senha}'`);
    return res.rows;
};

module.exports = {
    getLogin
};
