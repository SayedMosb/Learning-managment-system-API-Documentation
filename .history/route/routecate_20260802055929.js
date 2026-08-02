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
/**
 * @swagger
 * /api/categories/categories:
 *   post:
 *     summary: Create new category
 *     tags:
 *       - Categories
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: Web Development
 *     responses:
 *       201:
 *         description: Category created successfully
 */

router.post('/categories',addcategory);
/**
 * @swagger
 * /api/categories/categories/{id}:
 *   get:
 *     summary: Get category by id
 *     tags:
 *       - Categories
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Category found successfully
 */

router.get('/categories/:id',getallCategoryById);
/**
 * @swagger
 * /api/categories/categories/{id}:
 *   put:
 *     summary: Update category
 *     tags:
 *       - Categories
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *     responses:
 *       200:
 *         description: Category updated successfully
 */

router.put('/categories/:id',updatedCategory);
router.delete('/categories/:id',deletedCategory);


module.exports =router;

