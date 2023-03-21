import mongoose from 'mongoose';
const { Schema } = mongoose;

const CarSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    type:{
        type:String,
        required: true
    },
    model:{
        type:String,
        required: true
    }

})