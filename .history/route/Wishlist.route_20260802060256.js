const express = require('express');
const router = express.Router();


const {addWishlist,getWishlist ,updatedWishlist,deletedWishlist}=require('../controller/Wishlist.controle');

const vertifyToken = require('../vertifyToken');

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

router.post('/',vertifyToken,addWishlist);
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
router.get('/',vertifyToken,getWishlist);
router.put('/:id',vertifyToken,updatedWishlist);
router.delete('/:id',vertifyToken,deletedWishlist);





module.exports = router;