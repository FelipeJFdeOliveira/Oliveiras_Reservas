import mongoose from 'mongoose';
const { Schema } = mongoose;

const MotoSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true
    }
})