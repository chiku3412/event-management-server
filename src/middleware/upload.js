const multer = require('multer');
const path = require('path');

// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, path.join(__dirname, '../../../event-management-client/src/assets/images'));
//     },
//     filename: (req, file, cb) => {
//         const fileName = file.originalname.replace(/\\/g, '/');
//         cb(null, fileName);
//     }
// }); 

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const uploadPath = path.join(__dirname, 'event-management-client/src/assets/images');
        console.log(`Resolved upload path: ${uploadPath}`);  // Log the resolved path
        cb(null, uploadPath);
    },
    filename: (req, file, cb) => {
        const fileName = file.originalname.replace(/\\/g, '/');
        cb(null, fileName);
    }
});


const upload = multer({ storage: storage });

module.exports = { upload };
