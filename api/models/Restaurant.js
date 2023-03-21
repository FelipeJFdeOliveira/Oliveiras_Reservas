import mongoose from 'mongoose';
const { Schema } = mongoose;

const RestaurantSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true
    }
})