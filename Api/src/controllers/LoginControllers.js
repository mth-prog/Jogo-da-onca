const LoginModels = require('../models/loginModels');

const getLogin = async (req, res) => {
    const Login = await LoginModels.getLogin(req.query);
    return res.status(200).json(Login);
};


module.exports = {
    getLogin
};