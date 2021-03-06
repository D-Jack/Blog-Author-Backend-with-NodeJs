const express=require('express');
const router=express.Router();
const Blog=require('../models/Blog');
const Author=require('../models/Author');


router.get('/getAllBlogs',async (req,res)=>{
    try{
        const blogs=await Blog.find();
        res.status(200).json(blogs);
    }
    catch(err){
        res.status(400).json({error:err.message})
    }
});

router.get('/:blogid',async (req,res)=>{
    try{

        const blog=await Blog.findById(req.params.blogid);
        res.status(200).json(blog);
    }
    catch(err){
        res.status(400).json({error:err.message})
    }
});
router.post('/postBlog',async (req,res)=>{
    try{
        console.log(req.body);
        const author=await Author.findById(req.body.authorId);
        req.body.authorName=author.authorName;
        const newBlog=new Blog(req.body);
        newBlog.save();
        res.status(200).json({blogAdded:newBlog});
    }catch(err){
        console.log(err.message);
        res.status(400).json({error:err.message})
    }
})


router.put('/modifyBlog/:id?',async(req,res)=>{
    try{
        const id=req.params.id;
        const authorId=req.query.authorId;
        let blog=await Blog.findById(id);
        
        blog.authorId=authorId;
        const author=await Author.findById(blog.authorId);
console.log(author);

        blog.authorName=author.authorName;
        await blog.save();
        res.status(200).json({updatedBlog:blog});
    }catch(err){
        console.log(err.message);
        res.status(400).json({error:err.message})
    }
})

router.delete('/deleteBlog/:id',async(req,res)=>{
    try{
        const id=req.params.id;
        const result = await Blog.findByIdAndDelete(id);
        res.status(200).json(result);
    }
    catch(err){
        console.log(err.message);
        res.status(400).json({error:err.message});
    }
})
module.exports=router;