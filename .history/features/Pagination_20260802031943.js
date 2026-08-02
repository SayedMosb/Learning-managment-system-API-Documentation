const Course = require('../moduels/course.model');

const Pagination =async(req,res)=>{
    try{
        const {page,limit}=req.query;
        if(!page||!limit){
            return res.status(404).json({msg:'all data is required'});
        }
        const pageNumber = Number(page);
const limitNumber = Number(limit);
const skip =(pageNumber - 1)*limitNumber;
           const findPagination = await Course({}).skip(skip).limit( limitNumber);
           if(findPagination.length===0){
            return res.status(400).json({msg:'course is not founds'});

           }
           return res.status(200).json({data:findPagination});
    }catch(err){
        return res.status(500).json({msg:err.message});
    }
}

module.exports ={Pagination};