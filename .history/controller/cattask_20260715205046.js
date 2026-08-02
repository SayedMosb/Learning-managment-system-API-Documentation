const categorys = require('../moduels/catmoduel');



const getallCategory = async (req,res)=>{
    try{
        const category = await categorys.find({});
        if(category.length == 0){
         return   res.status(201).json({message:'no categorys is found'});
        }
        return res.status(201).json({message:category});
    }catch(err){
       return res.status(500).json({message:'error to find Catgoryes'});
    }
}

const getallCategoryById = async(req,res)=>{
    try{
    
    const cate = await categorys.findById(req.params.id);

    if(!cate){
     return   res.status(404).json({message:'id is required to search of category'});
    }
  return  res.status(201).json({data:cate});
    }catch(err){
        res.status(404).json({message:'error to found category'});
    }
}

const updatedCategory = async(req,res)=>{
    try{
      const updated =  await categorys.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new:true}
      );
     if (!updated) {
    return res.status(404).json({
        message: "Category not found"
    });
}
    return  res.status(201).json({data:updated});
    }catch(err){
  return   res.status(404).json({message:'error to updated in data'});
    }
}

const deletedCategory = async(req,res)=>{
    try{
      const delted = await categorys.findByIdAndDelete(req.params.id);
      if (!deleted) {
    return res.status(404).json({
        message: "Category not found"
    });
}
      res.status(201).json({message:'all filed are delteedted'});
    }catch(err){
     return    res.status(500).json({message:'error when you deledted '});
    }
}

module.exports ={getallCategory,getallCategoryById,updatedCategory,deletedCategory};