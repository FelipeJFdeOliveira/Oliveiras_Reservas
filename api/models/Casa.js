import mongoose from 'mongoose';
const { Schema } = mongoose;

const CasaSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true
    }
})