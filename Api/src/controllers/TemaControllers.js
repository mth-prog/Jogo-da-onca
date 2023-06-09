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
    // const create = await TemaModels.create(req.query);

    const { NomeTema } = req.body;
    const typeDog = req.files['Dog'][0].fieldname;
    const typeOnca = req.files['Onca'][0].fieldname;

    await TemaModels.create(typeDog, req.files['Dog'], NomeTema);
    await TemaModels.create(typeOnca, req.files['Onca'], NomeTema);


    return res.status(200).json('OK');
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

// const UploadFiles = async (FilesArray) => {
//     const command = new PutObjectCommand(FilesArray);
//     S3.send(command);
// };

// const JsonToS3 = (BufferArray, folder) => {
//     const arrayS3= [];
//     for (let i = 0; i < BufferArray.length; i++) {
//         let JsonBody = {
//             Bucket: 'onca-game',
//             Key: `${folder}/` + BufferArray[i].originalname, 
//             Body: BufferArray[i].buffer,
//         };
//         arrayS3.push(JsonBody);
//     }
//     return arrayS3;
// };

// const getUrlFile  = async (FilesToUrls) => {
//     //FilesToUrls = json 
//     const command = new GetObjectCommand(FilesToUrls);
//     const SignedUrl = await getSignedUrl(S3, command, {expiresIn: 604800});

//     return SignedUrl;
// };

module.exports = {
    getAll, 
    createTema,
    deleteTema,
    updateTema
};