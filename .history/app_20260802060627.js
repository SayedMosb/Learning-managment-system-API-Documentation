   require('dotenv').config();
const express =require('express');
const app = express();
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./swagger");
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
const routerPagination =require('./route/paginations.route');
const routerFiltering =require('./route/filltering.route');
const routerSorting =require('./route/sorting.route');
const routerDashboard =require('./route/dashboard.route');
app.use(express.json());

mongoose.connect(process.env.)
.then(()=>console.log('connecting to DB compts '))
.catch(err=>console.log('error to found DB'))
app.use('/Image', express.static('Image'));
app.use('/api/users',routeTask);
app.use('/api/categories',routeCategory);
app.use('/api/course',routerCourse);
app.use('/api/lesson',routerLesson);
app.use('/api/enrollments',routerEnrollments);
app.use('/api/reviews', routerReview);
app.use('/api/wishlist', routerWishlist);
app.use('/api/quiz',routeQuizes);
app.use('/api/question',routeQuestions);
app.use('/api/result', routerSubmitted);
app.use('/api/courses/search', routerSearching);
app.use('/api/courses/pagination', routerPagination);
app.use('/api/courses/filtering', routerFiltering);
app.use('/api/courses/sorting', routerSorting);
app.use('/api/dashboard', routerDashboard);
app.use(
 "/api-docs",
 swaggerUi.serve,
 swaggerUi.setup(swaggerSpec)
);
app.listen(4000,()=>{
    console.log('server running at port 4000');
})

