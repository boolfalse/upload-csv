
const { Router } = require('express');
const router = Router();
const uploadController = require('./../controllers/upload');
const multerUpload = require('./../utilities/multer')();

router.post('/', multerUpload.single('csv_file'), uploadController.csvUpload);

module.exports = router;
