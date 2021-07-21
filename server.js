const express=require('express');
const connectDB=require('./database/db');
const blogRouter=require('./routes/blogs');
const authorRouter=require('./routes/authors');
const app=express();
connectDB();
const port=5000;


app.use(express.json());
app.listen(port,()=>{
    console.log(`Listening to Server ${port}.....`);
})
app.use('/blogs',blogRouter);
app.use('/authors',authorRouter);