const mongoose =require('mongoose');


const WishlistSchema = new mongoose.Schema({
student:{
    type:mongoose.Schema.Types.ObjectId,
    required:true
},
Course:{
    type:mongoose.Schema.Types.ObjectId,
    required:true
}
});


module.exports = mongoose.model('Wishlist',WishlistSchema);