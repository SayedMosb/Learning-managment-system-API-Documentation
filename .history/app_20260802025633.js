   require('dotenv').config();
const express =require('express');
const app = express();
const routeTask =require('./route/route');
const mongoose =require('mongoose');
const routeCategory = require('./route/routecate')
const routerCourse =require('./route/course.route');
const routerLesson =require('./route/lesson.route')
const routerEnrollments =require('./route/enrollments.route')
const routerReview = require('./route/Review.route')
const routerWishlist =require('./route/Wishlist.route');
const routeQuizes = require('./route/Quiz.route');
const routeQuestions =require('./route/qestion.route');
const routerSubmitted = require('./route/submited.route');
const routerSearching =require('./route/search.route');
app.use(express.json());

mongoose.connect('mongodb+srv://sayed_moo:Sayed2004@cluster0.qaklguk.mongodb.net/')
.then(()=>console.log('connecting to DB compts '))
.catch(err=>console.log('error to found DB'))
app.use('/Image', express.static('Image'));
app.use('/api/users',routeTask);
app.use('/api/users',routeCategory);
app.use('/api/users/course',routerCourse);
app.use('/api/users/lesson',routerLesson);
app.use('/api/users/enrollments',routerEnrollments);
app.use('/api/users/reviews', routerReview);
app.use('/api/users/wishlist', routerWishlist);
app.use('/api/users/quiz',routeQuizes);
app.use('/api/users/question',routeQuestions);
app.use('/api/users/result', routerSubmitted);
app.use('/api/courses/search', routerSearching);
app.listen(4000,()=>{
    console.log('server running at port 4000');
})

