const express = require('express');
const multer = require('multer');
const { v4: uuidv4 } = require('uuid');
const path = "./src/pictures/"
const router = express.Router(); 
const photoCont = require('../controllers/photoCont')
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, path);
    },
    filename: function(req, file, cb) {
        cb(null, uuidv4() + " " + file.originalname);
    }
});
const upload = multer({ storage,
    limits: {
        fileSize: 1024 * 1024 * 7
    },
    fileFilter: function(req, file, cb) {
        if(!file.originalname.toLowerCase().match(/\.(jpg|png|gif|jpeg)$/)){
            return cb(new Error('please provide an image that is not more than 7MB'))
        }

        cb(null, true)
    }
});

router.post('/photo', upload.single('photo'), photoCont);


module.exports = router;