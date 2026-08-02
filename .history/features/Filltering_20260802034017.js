const categories =require('../moduels/course.model');

const filltering = async(req,res)=>{
    try{
      let {data} =req.query;
       if(!data){
        return res.status(404).json({msg:'data us required'});
       }
      data= data.toLowerCase()
       const finds = await categories.find({
        name:data
       });
       if(finds.length===0){
        return res.status(404).json({msg:'course is not find'});
       }
       return res.status(200).json({data:data});
    }catch(err){
        return res.status(500).json({msg:err.message});
    }
}

module.exports ={filltering}