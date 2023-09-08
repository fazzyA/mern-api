const express = require('express');
const { uploadFile } = require('../controllers/upload');
const fileRouter = express.Router();
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
// const storage = multer.memoryStorage();
// const upload = multer({ storage });

fileRouter
.route('/')
.post(upload.single('file'), uploadFile);

module.exports = fileRouter;
