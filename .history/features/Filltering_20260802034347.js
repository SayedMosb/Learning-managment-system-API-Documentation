const categories =require('../moduels/course.model');

const filltering = async(req,res)=>{
    try{
      let {category} =req.query;
       if(!category){
        return res.status(404).json({msg:'data us required'});
       }
      category= category.toLowerCase()
 const categoryData = awaitcategories.findOne({
    name: category
});
       if(categoryData.length===0){
        return res.status(404).json({msg:'course is not find'});
       }
       return res.status(200).json({data:categoryData});
    }catch(err){
        return res.status(500).json({msg:err.message});
    }
}

module.exports ={filltering}