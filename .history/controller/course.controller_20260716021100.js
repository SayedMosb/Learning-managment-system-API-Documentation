const Courses = require('../moduels/course.model');


const addCourse = async(req,res)=>{
    try{
    const {title,description,price,instructor,category,Image} = req.body;

    if(!title || !description || !price ||!instructor ||!category||Image){
       return res.status(500).json({message:'all fields are required'});
    }
const newData = await Courses.create({
    title,
    description,
    price,
    Image: req.file ? req.file.filename : undefined,
    instructor,
    category
});

        return res.status(201).json({
            data: newData
        });

    }catch (err) {
    console.log(err);

    return res.status(500).json({
        message: err.message
    });
}
}


const getAllCourse = async (req,res)=>{
    try{
       const Course = await Courses.find({});
       if(Course.length == 0){
      return  res.status(500).json({message:'no Courses is found'});
       }
     return  res.status(201).json({Data:Course});
    }catch (err) {
    console.log(err);

    return res.status(500).json({
        message: err.message
    });
}
}


const getCourseById = async (req,res)=>{
    try{
   const course = await Courses.findById(req.params.id);
   if(!course){
  return  res.status(505).json('courses are not found');
   }
  return res.status(201).json({data:course});
    }catch (err) {
    console.log(err);

    return res.status(500).json({
        message: err.message
    });
}
}
const getCourseAndUpdated = async (req, res) => {
    try {
        const data = {
            ...req.body
        };

        if (req.file) {
            data.Image = `/Image/${req.file.filename}`;
        }

        const updated = await Courses.findByIdAndUpdate(
            req.params.id,
            data,
            { new: true }
        );

        if (!updated) {
            return res.status(404).json({
                message: "Course not found"
            });
        }

        return res.status(200).json({
            data: updated
        });

    } catch (err) {
        console.log(err);
        return res.status(500).json({
            message: err.message
        });
    }
};
const deledtedCourse = async (req,res)=>{
    try{
         
        const deleted = await Courses.findByIdAndDelete(req.params.id);
        if(!deleted){
          return   res.status(500).json({message:'courses are not found to Deleted'});
        }
        return  res.status(201).json({data:'coures is deleted successfly'});
    }catch (err) {
    console.log(err);

    return res.status(500).json({
        message: err.message
    });
}
}

module.exports ={
    addCourse,
    getAllCourse,
    getCourseById,
    getCourseAndUpdated,
    deledtedCourse
}