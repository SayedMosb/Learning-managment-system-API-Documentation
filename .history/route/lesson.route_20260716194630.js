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

function fileFilter(req,file,cb){

    if(file.fieldname === "Video"){

        if(file.mimetype.startsWith("video/")){
            return cb(null,true);
        }

        return cb(new Error("Only videos are allowed"));
    }

    if(file.fieldname === "File"){

        if(file.mimetype === "application/pdf"){
            return cb(null,true);
        }

        return cb(new Error("Only PDF files are allowed"));
    }
}
const upload = multer({ storage,fileFilter });
router.post('/', upload.any(), (req, res) => {
    console.log(req.files);
    res.json(req.files);
});
router.get('/',getAlllesson);
router.put('/:id',Updatedlesson);
router.delete('/:id',deletedlesson);


module.exports =router;