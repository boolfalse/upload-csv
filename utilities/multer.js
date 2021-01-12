
const multer = require('multer');
const path = require('path');

module.exports = function () {
    return multer({
        storage: multer.diskStorage({
            destination: function (req, file, cb) {
                const filePath = path.join(__dirname, './../uploads');
                cb(null, filePath);
            },
            filename: function (req, file, cb) {
                const extension = file.mimetype.split('/')[1];
                const fileName = (new Date().getTime() / 1000 | 0);
                req.upload_csv = fileName;
                cb(null, fileName + '.' + extension);
            }
        }),
        limits: {
            fileSize: 1024 * 1024 * 200 // MB
        },
        fileFilter: (req, file, cb) => {
            let valid = (file.mimetype === 'text/csv');
            cb(null, valid);
        },
    });
};
