const Courses = require('../moduels/course.model');


const addCourse = async(req,res)=>{
    try{
    const {title,description,price,instructor,category} = req.body;

    if(!title || !description || !price ||!instructor ||!instructor ||!category){
        res.status(500).json({message:'all fields are required'});
    }
const newdata = await Courses.create({
    title,
    description,
    price,
    Image,
    instructor,
    category
})

 res.status(201).json({data:newdata});
await newdata.save();
    }catch(err){
        res.status(404).json({message:'error to add Course'});
    }
}


cons