const express = require('express');
const router = express.Router();


const {addWishlist,getWishlist ,updatedWishlist,deletedWishlist}=require('../controller/Wishlist.controle');

const vertifyToken = require('../vertifyToken');


router.post('/',vertifyToken,addWishlist);
router.get('/',vertifyToken,getWishlist);
router.put('/:id',vertifyToken,updatedWishlist);
router.delete('/:id',vertifyToken,deletedWishlist);





module.exports = router;