const Lesson = require('../moduels/lesson.model');

const addLesson = async (req, res) => {
    try {

        const { title, Description, Duration, Course } = req.body;

        const video = req.files?.Video?.[0]?.filename || null;
        const file = req.files?.File?.[0]?.filename || null;

        if (!title || !Description || !Duration || !Course || !video || !file) {
            return res.status(400).json({
                message: 'All data are required'
            });
        }

        const newData = await Lesson.create({
            title,
            Description,
            video,
            PDF: file,
            Duration,
            Course
        });

        return res.status(201).json({
            message: 'Lesson created successfully',
            data: newData
        });

    } catch (err) {
        return res.status(500).json({
            message: err.message
        });
    }
};

const getAlllesson = async (req, res) => {
    try {

        const lessons = await Lesson.find({});

        if (lessons.length === 0) {
            return res.status(404).json({
                message: 'No lessons found'
            });
        }

        return res.status(200).json({
            data: lessons
        });

    } catch (err) {
        return res.status(500).json({
            message: err.message
        });
    }
};

const Updatedlesson = async (req, res) => {
    try {

        const updated = await Lesson.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        if (!updated) {
            return res.status(404).json({
                message: 'Lesson not found'
            });
        }

        return res.status(200).json({
            message: 'Lesson updated successfully',
            data: updated
        });

    } catch (err) {
        return res.status(500).json({
            message: err.message
        });
    }
};

const deletedlesson = async (req, res) => {
    try {

        const deleted = await Lesson.findByIdAndDelete(req.params.id);

        if (!deleted) {
            return res.status(404).json({
                message: 'Lesson not found'
            });
        }

        return res.status(200).json({
            message: 'Lesson deleted successfully'
        });

    } catch (err) {
        return res.status(500).json({
            message: err.message
        });
    }
};

module.exports = {
    addLesson,
    getAlllesson,
    Updatedlesson,
    deletedlesson
};