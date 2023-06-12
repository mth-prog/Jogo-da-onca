
/* 
aqui se cria todas as funçoes que interage diretamente com o banco de dados


*/

const pool = require('./connectionBd');
const S3 = require('../models/s3Connection');
const { PutObjectCommand, GetObjectCommand } = require('@aws-sdk/client-s3');
const { getSignedUrl } = require('@aws-sdk/s3-request-presigner');

//mostra todas as skins 
const getAll = async () => {
    const select = await pool.connect();
    const res = await select.query('SELECT * FROM Skin_teste');
    return res.rows;
};

//insere as  novas skins

/* 
aqui se coloca só as urls ou onde as skins estao guardadas
*/
const create = async (ArrayBuffer, NomeTema) => {

    // // const { originalname } = ArrayBuffer[0];
    const Files = JsonToS3V2(ArrayBuffer);
    // //envia para o s3 
    await UploadFiles(Files);

    //pegar o url da imagem que subiu para o banco
    const urlFiles = await getUrlFile(Files);
    
    const str_query = `INSERT INTO Skin_teste (Tema, Url_cachorro, url_onca) 
                        VALUES ('${NomeTema}', '${urlFiles[0]}', '${urlFiles[1]}')`;

    const connect = await pool.connect();
    const createdUser = await connect.query(str_query);
    return createdUser;

};

//deleta usuarios por id 
// [ ] ver se é melhor por nome

const deleteUser = async (id) => {
    const str_query = `DELETE FROM Skin_teste WHERE id = ${id}`;
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


const UploadFiles = async (FilesArray) => {

    for (var i = 0; i < FilesArray.length; i++) {
        const command = new PutObjectCommand(FilesArray[i]);
        S3.send(command);
    }
};


const JsonToS3V2 = (Buffer) => {
    const arrayS3 = [];
    const chaves = Object.keys(Buffer);
    for (let i = 0; i < chaves.length; i++) {
        let JsonBody = {
            Bucket: 'onca-game',
            Key: `${chaves[i]}/` + Buffer[chaves[i]][0].originalname, 
            Body: Buffer[chaves[i]][0].buffer
        };

        arrayS3.push(JsonBody);
    }
    return arrayS3;
};



const getUrlFile  = async (FilesToUrls) => {
    //FilesToUrls = json
    const urlsFiles = [];
    
    for (var i = 0; i < FilesToUrls.length; i++) {
        const command = new GetObjectCommand(FilesToUrls[i]);
        const SignedUrl = await getSignedUrl(S3, command, {expiresIn: 604800});
        urlsFiles.push(SignedUrl);
    }

    return urlsFiles;
};

module.exports = {
    getAll,
    create,
    deleteUser,
    updateUser
};
