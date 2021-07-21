const express=require('express');
const router=express.Router();
const Author=require('../models/Author');



router.get('/getAllAuthors',async (req,res)=>{
    try{
        const authors=await Author.find();
        res.status(200).json(authors);
    }
    catch(err){
        res.status(400).json({error:err.message})
    }
});

router.get('/:authorid',async (req,res)=>{
    try{

        const author=await Author.findById(req.params.authorid);
        res.status(200).json(author);
    }
    catch(err){
        res.status(400).json({error:err.message})
    }
});
router.post('/postAuthor',async (req,res)=>{
    try{
        console.log(req.body);
        const newAuthor=new Author(req.body);
        newAuthor.save();
        res.status(200).json({authorAdded:newAuthor});
    }catch(err){
        console.log(err.message);
        res.status(400).json({error:err.message})
    }
})


router.put('/modifyAuthor/:id?',async(req,res)=>{
    try{
        const id=req.params.id;
        const authorName=req.query.authorName;
        let author=await Author.findById(id);
        
        author.authorName=authorName;
        await author.save();
        res.status(200).json({updatedAuthor:author});
    }catch(err){
        console.log(err.message);
        res.status(400).json({error:err.message})
    }
})

router.delete('/deleteAuthor/:id',async(req,res)=>{
    try{
        const id=req.params.id;
        const result = await Author.findByIdAndDelete(id);
        res.status(200).json(result);
    }
    catch(err){
        console.log(err.message);
        res.status(400).json({error:err.message});
    }
})
module.exports=router;