// vai ficar os upload de skins 

const multer = require('multer');

const storage = multer.memoryStorage();
const upload = multer({storage: storage});

const UploadFiles = (InputHtml) => upload.array(InputHtml);    


module.exports = {UploadFiles};


