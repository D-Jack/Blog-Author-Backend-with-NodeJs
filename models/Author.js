const mongoose=require('mongoose');

const AuthorSchema=mongoose.Schema(
    {
        authorName:{
            type:String,
        },
        BlogId:{
            type:mongoose.Schema.Types.ObjectId
        },
    }
);

const Author=mongoose.model('Author',AuthorSchema);

module.exports=Author;
