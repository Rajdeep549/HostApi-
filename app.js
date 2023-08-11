
require('dotenv').config();
const express=require('express')
const app=express()
const products_routes=require('./routes/products')
const connectDB=require('./db/connect')

const PORT=process.env.PORT||5000;
app.get('/',(req,res)=>{
    res.send("hi  i am alive");
})


app.use("/api/products",products_routes)

start=async()=>{
    try{
        await connectDB(process.env.MONGO_URL);
       app.listen(PORT,()=>{
        console.log(`${PORT} yes i am in live`)
       }) 
    }
    catch(error){
            console.log(error);
            
    }
}
start();
