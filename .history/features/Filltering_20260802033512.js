const categories =require('../moduels/catmoduel');

const filltering = async(req,res)=>{
    try{
      let {data} =req.query;
       if(!data){
        return res.status(404).json({msg:'data us required'});
       }
       data =data.tolowerCase();
       const finds = await categories.find()
    }catch(err){
        return res.status(500).json({msg:err.message});
    }
}