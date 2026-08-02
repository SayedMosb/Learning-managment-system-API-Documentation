const express =require('express');
const router =express.Router();

const {addLesson,getAlllesson,Updatedlesson,deletedlesson}=require('../controller/lesson.controller');

const multer =require('multer');
const path = require('node:path');
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname,'../Image'));
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.fieldname + '-' + uniqueSuffix)
  }
})

function fileFilter (req, file, cb) {
 if(file.mimetype.startsWith('image/')){
  cb(null, true)
 }
else{
  cb(new Error('Only image files are allowed'));
}
}
const upload = multer({ storage,fileFilter });

router.post('/',addLesson);
router.get('/',getAlllesson);
router.put('/:id',Updatedlesson);
router.delete('/:id',deletedlesson);