const Enrollments =require('../moduels/enrollments.moduels');
const addCourse = async(req,res)=>{
    try{
       const{student,Course,Status}=req.body;
       if(!student ||!Course||!Status){
        res.status(500).json({data:'all fields are required'});
       }
       const exist = await Enrollments.findOne({
    student,
    Course
});

if (exist) {
    return res.status(400).json({
        message: "Student is already enrolled in this course"
    });
}
       const newData = await Enrollments.create({
        student,
        Course,
        Status
       });
       res.status(201).json({data:newData});
    }catch(err){
        res.status(500).json({message:err.message});
    }
}

const getMyCourse = async (req, res) => {
    try {

        const myCourses = await Enrollments.find({
        });

        if (myCourses.length === 0) {
            return res.status(404).json({
                message: "You are not enrolled in any courses"
            });
        }

        return res.status(200).json({
            data: myCourses
        });

    } catch (err) {
        return res.status(500).json({
            message: err.message
        });
    }
};

const GetStudentinCourse = async (req, res)=>{
    try {
       const students = await Enrollments.find({
    Course: req.params.id
}).populate("student");
        if (students.length === 0) {
            return res.status(404).json({
                message: "No students enrolled in this course"
            });
        }

        return res.status(200).json({
            data: students
        });

    } catch (err) {

        return res.status(500).json({
            message: err.message
        });

    }

};
module.exports ={addCourse,getMyCourse,GetStudentinCourse};