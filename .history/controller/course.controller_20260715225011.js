const Courses = require('../moduels/course.model');


const addCourse = async(req,res)=>{
    const {title,description,price,instructor,category} = req.body;

    if(!title || !description || !price ||!instructor ||!instructor ||!category){
        res.status(500).json({message:'all fields are required'});
    }
const newdata = await Courses.create({
    title,
    description,
    price,
    instructor,
    category
})

}