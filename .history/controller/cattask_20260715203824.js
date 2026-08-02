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

const getallCategoryById = async(req,res)=>{
    try{
    const id = req.params.id;
    const cate = await categorys.findById({id});

    if(!cate){
        res.status(404).json({message:'id is required to search of category'});
    }
    res.status(201).json({data:cate});
    }catch(err){
        res.status(404).json({message:'error to found category'});
    }
}

const 
