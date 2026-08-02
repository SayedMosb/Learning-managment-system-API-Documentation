   require('dotenv').config();
const express =require('express');
const app = express();
const routeTask =require('./route/route');
const mongoose =require('mongoose');

app.use(express.json());

mongoose.connect('mongodb+srv://sayed_moo:Sayed2004@cluster0.qaklguk.mongodb.net/')
.then(()=>console.log('connecting to DB compts '))
.catch(err=>console.log('error to found DB'))

app.use('/api/users',routeTask);

app.listen(4000,()=>{
    console.log('server running at port 4000');
})

