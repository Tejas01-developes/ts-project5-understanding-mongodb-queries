import mongoose from 'mongoose';


const schema1=new mongoose.Schema({
    userid:{
        type:String,
        require:true,
        unique:true  
    },

    name:{
        type:String,
        require:[true,"name is required"],
        trim:true,
        minlenght:2,
        maxlength:50
    },

    email:{
        type:String,
        require:[true,"email is required"],
        trim:true,
        unique:true,
        minlenght:2,
        maxlength:50
    },

    password:{
        type:String,
        require:true,
        select:false
    },

    age:{
        type:Number,
        require:true
    }

},{timestamps:true})

const collection1=mongoose.model("users1",schema1)

export default collection1