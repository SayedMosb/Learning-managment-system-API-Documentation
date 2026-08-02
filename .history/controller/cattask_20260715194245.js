const categorys = require('../moduels/catmoduel');



const getallCategory = async (req,res)=>{
    try{
        const category = await categorys.find({});
        if(category.length == 0){
            res.status(201).json({message:'no categorys is found'});
        }
        res.status(201).json({message:category});
    }catch(err){
        res.status(500).json({message:'error to find Catgoryes'});
    }
}
