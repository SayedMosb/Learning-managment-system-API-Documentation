const Course = require('../moduels/course.model');


const searching = async(req,res)=>{
    try{
       let { data } = req.query;
       if(!data){
   return res.status(400).json({msg:"please enter search value"});
}

       data =data.toLowerCase();

       const search = await Course.find({
  title: {
    $regex: data,
    $options: "i"
  }
})
       if(search.length===0){
        return res.status(404).json({msg:'course is not found'});
       }
       return res.status(200).json({data:search})
    }catch(err){
        return res.status(500).json({msg:err.message});
    }
}



module.exports ={
    searching
}