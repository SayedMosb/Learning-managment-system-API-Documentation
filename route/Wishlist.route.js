const express = require('express');
const router = express.Router();


const {addWishlist,getWishlist ,updatedWishlist,deletedWishlist}=require('../controller/Wishlist.controle');

const vertifyToken = require('../vertifyToken');
const allowedTo =require('../allowedTo');
/**
 * @swagger
 * /api/wishlist:
 *   post:
 *     summary: Add course to wishlist
 *     tags:
 *       - Wishlist
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               course:
 *                 type: string
 *                 example: "6a5810be9eb3b6400600226a"
 *     responses:
 *       201:
 *         description: Course added to wishlist successfully
 */

router.post('/',vertifyToken,allowedTo("student"),addWishlist);
/**
 * @swagger
 * /api/wishlist:
 *   get:
 *     summary: Get user wishlist
 *     tags:
 *       - Wishlist
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Wishlist fetched successfully
 */
router.get('/',vertifyToken,allowedTo("student"),getWishlist);
/**
 * @swagger
 * /api/wishlist/{id}:
 *   put:
 *     summary: Update wishlist item
 *     tags:
 *       - Wishlist
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Wishlist item ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       200:
 *         description: Wishlist updated successfully
 */
router.put('/:id',vertifyToken,allowedTo("student"),updatedWishlist);
/**
 * @swagger
 * /api/wishlist/{id}:
 *   delete:
 *     summary: Delete wishlist item
 *     tags:
 *       - Wishlist
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Wishlist deleted successfully
 */
router.delete('/:id',vertifyToken,allowedTo("student"),deletedWishlist);

module.exports = router;