const mongoose =require( 'mongoose')
const { Schema } = mongoose;

const UserSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    DOB:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        
    },
    address:{
        type:String,
        required:true
    },
    mobile:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    category:{
        type:String,
        default:"student"

    },
    timestamp:{
        type:Date,
        default:Date.now
    }

});

module.exports=mongoose.model("user",UserSchema)