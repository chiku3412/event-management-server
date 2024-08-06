const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../../../event-management-client/src/assets/images'));
    },
    filename: (req, file, cb) => {
        const fileName = file.originalname.replace(/\\/g, '/');
        cb(null, fileName);
    }
}); 

const upload = multer({ storage: storage });

module.exports = { upload };
