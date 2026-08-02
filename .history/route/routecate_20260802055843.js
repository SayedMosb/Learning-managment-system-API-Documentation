const express =require('express');
const router = express.Router();

const {getallCategory,
    getallCategoryById,
    updatedCategory,
    deletedCategory,
addcategory}=require('../controller/cattask');
/**
 * @swagger
 * /api/categories/categories:
 *   get:
 *     summary: Get all categories
 *     tags:
 *       - Categories
 *     responses:
 *       200:
 *         description: Categories fetched successfully
 */
router.get('/categories',getallCategory);

router.post('/categories',addcategory);
router.get('/categories/:id',getallCategoryById);
router.put('/categories/:id',updatedCategory);
router.delete('/categories/:id',deletedCategory);


module.exports =router;

