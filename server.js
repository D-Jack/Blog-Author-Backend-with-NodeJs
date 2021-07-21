const express=require('express');
const connectDB=require('./database/db');
const router=require('./routes/blogs');
const app=express();
connectDB();
const port=5000;


app.use(express.json());
app.listen(port,()=>{
    console.log(`Listening to Server ${port}.....`);
})
app.use('/blogs',router);