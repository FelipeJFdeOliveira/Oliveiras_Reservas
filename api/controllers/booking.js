import Booking from "../models/Booking.js"

//CREATE
export const createBooking = async (req, res, next)=>{
    const newBooking = new Booking(req.body)

    try {
        const savedBooking = await newBooking.save()
        res.status(200).json(savedBooking)
    } catch (err) {
        next(err)
    }
}