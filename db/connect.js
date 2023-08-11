const mongoose=require('mongoose')


const connectDB=(uri)=>{
    console.log("connect database are successfully..")
   return mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
 })
}

module.exports=connectDB;