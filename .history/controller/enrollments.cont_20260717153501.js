const Enrollments =require('../moduels/enrollments.moduels');


const getMyCourse = async (req, res) => {
    try {

        const myCourses = await Enrollments.find({
            student: req.currentUser._id
        }).populate('course');

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
module.exports ={getMyCourse,GetStudentinCourse};