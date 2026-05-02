import mongoose from "mongoose";

const usersmarks=new mongoose.Schema({

    email:{
        type:String,
        required:true,
        unique:true
    },
    marks:[{
        subject:{
            type:String,
            require:true
        },
        marks:{
            type:Number,
            require:true
        }
    }]

})

export const collection2=mongoose.model("users2",usersmarks)