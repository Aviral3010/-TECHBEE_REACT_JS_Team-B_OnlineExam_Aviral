const mongoose= require('mongoose')
const uri="mongodb://localhost:27017/backend"

const connectToMongo=()=>{
    mongoose.connect(uri,()=>{
        console.log("connected to mongoDB");
    })
}

module.exports=connectToMongo;

