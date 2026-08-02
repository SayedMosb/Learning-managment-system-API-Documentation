const Course = require('../moduels/course.model');


const searching = async(req,res)=>{
    try{
       var data =req.query;
       data =data.toLowerCase();

       const search = await Course.find({data});
       if(search.length==0){
        return res.status(400).json({msg:'course is not found'});
       }
       return res.status(200).json({data:search})
    }catch(err){
        return res.status(500).json({msg:err.message});
    }
}