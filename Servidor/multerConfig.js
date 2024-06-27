// config/multerConfig.js
const path = require('path');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/images'); // Directorio donde se guardarán las imágenes
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname)); // Nombre del archivo
    }
});

const upload = multer({ storage: storage });

module.exports = upload;
