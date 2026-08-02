const Course = require('../moduels/course.model');

const Pagination =async(req,res)=>{
    try{
        const {page,limit}=req.query;
        if(!page||!limit){
            return res.status(404).json({msg:'all data is required'});
        }
        const skip =(page -1)*limit;
           const findPagination = await Course({}).skip(skip).limit(limit);
           if(!findPagination){
            return res.status(404).json({msg:'course is not founds'});

           }
           return res.status(200).json({data:findPagination});
    }catch(err){
        return res.status(500).json({msg:err.message});
    }
}

module.exports ={Pagination};