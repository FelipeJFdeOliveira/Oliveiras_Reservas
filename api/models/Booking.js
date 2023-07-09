import mongoose from 'mongoose';
const { Schema } = mongoose;

const BookingSchema = new mongoose.Schema({
    idUser: {
        type: String,
        required: true
    },
    idHotel: {
        type: String,
        required: true
    },
    hotelName:{
        type: String,
        required: true
    },
    city:{
        type: String,
        required: true
    },
    Address:{
        type: String,
        required: true
    },
    quantityRoom:{
        type: Number,
        required: true
    },
    rooms:{
        type:Array,
        required: true
    },
    amountValue:{
        type: Number,
        required: true
    },
    checkIn: {
        type: Date,
        required: true
    },
    checkOut: {
        type: Date,
        required: true
    },
    creditCardNumber:{
        type: Number,
        required: true
    },
    creditName:{
        type: String,
        required: true
    },
    creditCardValidate:{
        type: Date,
        required: true
    },
    creditCardCVV:{
        type: Number,
        required: true
    }

}, {timestamps:true}) 

export default mongoose.model("Booking", BookingSchema)