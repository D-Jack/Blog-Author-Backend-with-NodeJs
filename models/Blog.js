const mongoose=require('mongoose');

const blogSchema=mongoose.Schema(
    {
        title:{
            type:String,
        },
        description:{
            type:String,
        },
        authorId:{
            type:mongoose.Schema.Types.ObjectId,
        },
        authorName:{
            type:String,
        },
        date:{
            type:Date,
        },
    }
);

const Blog=mongoose.model('blog',blogSchema);

module.exports=Blog;


// console.log(blogSchema);
// console.log(typeof blogSchema);
// console.log('-----------------------------------------------');
// console.log(new Blog);
// console.log(typeof new Blog);

// class Test {
//     constructor(name){
//         this.name=name;
//     }
// }
// console.log('-----------------------------------------------');
// console.log(Test);
// console.log(typeof Test);
// console.log('-----------------------------------------------');
// console.log(new Test);
// console.log(typeof new Test);
