require('dotenv').config();
const { S3Client } = require('@aws-sdk/client-s3');

// const s3 = new S3Client({
//     credentials: {
//         accessKeyId: process.env.ACCESS_KEY,
//         secretAccessKey: process.env.SECRET_ACCESS_KEY
//     }, 
//     region: process.env.BUCKET_REGION
// });

const s3 = new S3Client({
    credentials: {
        accessKeyId: 'AKIA3FXBHN32WXVSHSD5',
        secretAccessKey: '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'
    }, 
    region: 'us-east-1'
});

module.exports = s3;
