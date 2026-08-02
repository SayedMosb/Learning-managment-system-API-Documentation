const Enrollments =require('../moduels/enrollments.moduels');


const getMyCourse =async ( req,res)=>{
    try{
          const My_course = await Enrollments.find({});
          if(My_course.length==0){
            return res.status(201).json({message:'courses not found'})
          }
          return  res.status(201).json({data:My_course});
    }catch(err){
        return res.status(500).json({message:err.message })
    }
}

const GetStudentinCourse = async(req,res)=>{
    try{
       const course = await  Enrollments.findById(req.params.id);
       if(!course){
          return res.status(500).json({message:'course are not found'});
       }
        return res.status(500).json({message:course.student});
          
    }catch(err){
          return res.status(500).json({message:err.message })
    }
}

module.exports ={getMyCourse,GetStudentinCourse};