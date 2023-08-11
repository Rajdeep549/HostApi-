require('dotenv').config();
const connectDB=require('./db/connect');
const product = require('./model/product');
const productJson=require('./product.json');



const start= async()=>{
        try{
            await connectDB(process.env.MONGO_URL)
            await product.create(productJson);
            console.log('success');
        }
        catch(error){
            console.log(error);
            
        }
}


start();