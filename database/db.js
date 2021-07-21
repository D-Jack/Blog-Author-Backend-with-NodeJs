const mongoose=require('mongoose');
const config=require('config');

const dbURI=config.get('mongoURI');

const connectDB=async()=>{
    await mongoose.connect(dbURI,{ useUnifiedTopology: true ,useNewUrlParser: true });
    console.log("connected to DB");
}
module.exports=connectDB;