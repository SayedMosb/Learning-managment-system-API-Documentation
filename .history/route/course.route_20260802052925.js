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
  cb(new Error('Only image files are allowed'));
}
}
const upload = multer({ storage,fileFilter });


/**
 * @swagger
 * /api/course:
 *   get:
 *     summary: Get all courses
 *     tags:
 *       - Courses
 *     responses:
 *       200:
 *         description: Courses fetched successfully
 */
router.get('/', getAllCourse);
/////////////////////////////////////

/**
 * @swagger
 * /api/course/{id}:
 *   get:
 *     summary: Get course by id
 *     tags:
 *       - Courses
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Course found
 */
router.get('/:id', getCourseById);

/**
 * @swagger
 * /api/course:
 *   post:
 *     summary: Create course
 *     tags:
 *       - Courses
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *               price:
 *                 type: number
 *               instructor:
 *                 type: string
 *               category:
 *                 type: string
 *               Image:
 *                 type: string
 *                 format: binary
 *     responses:
 *       201:
 *         description: Course created
 */
router.post('/',upload.single('Image'),addCourse);
/**
 * @swagger
 * /api/course/{id}::
 *   put:
 *     summary: update course
 *     tags:
 *       - Courses
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *               price:
 *                 type: number
 *               instructor:
 *                 type: string
 *               category:
 *                 type: string
 *               Image:
 *                 type: string
 *                 format: binary
 *     responses:
 *       201:
 *         description: Course updated successful
 */
router.put('/:id',upload.single('Image'), getCourseAndUpdated);
/**
 * @swagger
 * /api/course:
 *   delete:
 *     summary: Deleted course
 *     tags:
 *       - Courses
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *               price:
 *                 type: number
 *               instructor:
 *                 type: string
 *               category:
 *                 type: string
 *               Image:
 *                 type: string
 *                 format: binary
 *     responses:
 *       201:
 *         description: Course Deleted
 */
router.delete('/:id',deledtedCourse);


module.exports =router;