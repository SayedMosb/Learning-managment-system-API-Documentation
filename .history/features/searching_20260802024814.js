const Course = require('../moduels/course.model');


const searching = async(req,res)=>{
    try{
       let { data } = req.query;
       data =data.toLowerCase();

       const search = await Course.find({
  title: {
    $regex: data,
    $options: "i"
  }
})
       if(!data){
   return res.status(400).json({msg:"please enter search value"});
}
       return res.status(200).json({data:search})
    }catch(err){
        return res.status(500).json({msg:err.message});
    }
}