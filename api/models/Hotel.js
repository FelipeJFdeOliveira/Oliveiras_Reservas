import mongoose from 'mongoose';
const { Schema } = mongoose;

const HotelSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    type:{
        type: String,
        required: true
    },
    city:{
        type: String,
        required: true
    },
    address:{
        type: String,
        required: true
    },
    distance:{
        type: String,
        required: true
    },
    photos:{
        type: [String]
    },
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    rooms:{
        type: [String],
    },
    price:{
        type: Number,
        required: true
    },
}, {timestamps:true}) 

export default mongoose.model("Hotel", HotelSchema)