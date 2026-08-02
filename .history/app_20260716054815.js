   require('dotenv').config();
const express =require('express');
const app = express();
const routeTask =require('./route/route');
const mongoose =require('mongoose');
const routeCategory = require('./route/routecate')
const routerCourse =require('./route/course.route');
app.use(express.json());

mongoose.connect('mongodb+srv://sayed_moo:Sayed2004@cluster0.qaklguk.mongodb.net/')
.then(()=>console.log('connecting to DB compts '))
.catch(err=>console.log('error to found DB'))
app.use('/Image', express.static('Image'));
app.use('/api/users',routeTask);
app.use('/api/users',routeCategory);
app.use('/api/users/course',routerCourse);
app.use('/api/users/lesson');
app.listen(4000,()=>{
    console.log('server running at port 4000');
})

