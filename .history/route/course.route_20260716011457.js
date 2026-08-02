const express =require('express');
const router =express.Router();



const {getAllCourse
,getCourseAndUpdated,
getCourseById,
deledtedCourse,
addCourse
}=require('../controller/course.controller');
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
  cb(new Error('I don\'t have a clue!'))
}
}
const upload = multer({ storage,fileFilter });


router.get('/',getAllCourse);
router.get('/:id',getCourseById);
router.post('/',upload.single('Image'),addCourse);
router.put('/:id',getCourseAndUpdated);
router.delete('/:id',deledtedCourse);


module.exports =router;