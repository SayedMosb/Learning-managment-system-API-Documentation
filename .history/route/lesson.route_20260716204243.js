const express = require('express');
const router = express.Router();

const {
    addLesson,
    getAlllesson,
    Updatedlesson,
    deletedlesson
} = require('../controller/lesson.controller');

const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../Image'));
    },

    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        const ext = path.extname(file.originalname);

        cb(null, file.fieldname + '-' + uniqueSuffix + ext);
    }
});

function fileFilter(req, file, cb) {

    console.log("Field Name:", file.fieldname);
    console.log("Mime Type:", file.mimetype);

    if (file.fieldname === "Video") {

        if (file.mimetype.startsWith("video/")) {
            return cb(null, true);
        }

        return cb(new Error("Only videos are allowed"));
    }

    if (file.fieldname === "File") {

        if (file.mimetype === "application/pdf") {
            return cb(null, true);
        }

        return cb(new Error("Only PDF files are allowed"));
    }

    console.log("Unexpected:", file.fieldname);

    return cb(new Error("Unexpected field"));
}

const upload = multer({
    storage
});

router.post(
    '/',
    upload.fields([
        { name: 'Video', maxCount: 1 },
        { name: 'PDF', maxCount: 1 }
    ]),
    addLesson
);

router.get('/', getAlllesson);

router.put(
    '/:id',
    upload.fields([
        { name: 'Video', maxCount: 1 },
        { name: 'File', maxCount: 1 }
    ]),
    Updatedlesson
);

router.delete('/:id', deletedlesson);

module.exports = router;