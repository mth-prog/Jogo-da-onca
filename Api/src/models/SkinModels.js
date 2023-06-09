
/* 
aqui se cria todas as funçoes que interage diretamente com o banco de dados
*/

const pool = require('./connectionBd');
const S3 = require('../models/s3Connection');
const { PutObjectCommand, GetObjectCommand } = require('@aws-sdk/client-s3');
const { getSignedUrl } = require('@aws-sdk/s3-request-presigner');



//mostra todas as skins 
const getAllSkin = async () => {
    const select = await pool.connect();
    const res = await select.query('SELECT * FROM SKIN_TESTE');
    return res.rows;
};
/* 
aqui se coloca só as urls  ou onde as skins estao guardadas
*/
const createSkin = async (Type, ArrayBuffer) => {

    const { originalname } = ArrayBuffer[0];
    const Files = JsonToS3(ArrayBuffer, Type);
    //envia para o s3 
    UploadFiles(Files[0]);

    //pegar o url da imagem que subiu para o banco
    const urlFiles = await getUrlFile(Files[0]);
    
    const str_query = `INSERT INTO Skin_teste (Nome, Tipo, Url) 
                        VALUES ('${originalname}', '${Type}', '${urlFiles}')`;

    const connect = await pool.connect();
    const createdUser = await connect.query(str_query);
    return createdUser;
};

//deleta usuarios por id 
// [ ] ver se é melhor por nome

const deleteSkin = async (id) => {
    const str_query = `DELETE FROM Skin_teste WHERE id = ${id}`;
    const connect = await pool.connect();
    const deleteUser = await connect.query(str_query);

    return deleteUser;
};

const updateSkin = async (id, User) => {
    
    const { UpdateName } = User;

    const str_query = `UPDATE Skin_teste SET username = '${UpdateName}' WHERE id = ${id}`;
    const connect = await pool.connect();
    const updateUser = await connect.query(str_query);
    return updateUser;
};


const UploadFiles = async (FilesArray) => {
    const command = new PutObjectCommand(FilesArray);
    S3.send(command);
};

const JsonToS3 = (BufferArray, folder) => {
    const arrayS3= [];
    for (let i = 0; i < BufferArray.length; i++) {
        let JsonBody = {
            Bucket: 'onca-game',
            Key: `${folder}/` + BufferArray[i].originalname, 
            Body: BufferArray[i].buffer,
        };
        arrayS3.push(JsonBody);
    }
    return arrayS3;
};

const getUrlFile  = async (FilesToUrls) => {
    //FilesToUrls = json 
    const command = new GetObjectCommand(FilesToUrls);
    const SignedUrl = await getSignedUrl(S3, command, {expiresIn: 604800});

    return SignedUrl;
};

module.exports = {
    getAllSkin,
    createSkin,
    deleteSkin,
    updateSkin
};
