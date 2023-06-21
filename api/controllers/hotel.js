import Hotel from "../models/Hotel.js"
import Room from "../models/Room.js"

//CREATE
export const createHotel = async (req, res, next)=>{
    const newHotel = new Hotel(req.body)

    try {
        const savedHotel = await newHotel.save()
        res.status(200).json(savedHotel)
    } catch (err) {
        next(err)
    }
}

//UPDATE
export const updateHotel = async (req, res, next)=>{
        try {
            const updatedHotel = await Hotel.findByIdAndUpdate(
                req.params.id,
                { $set: req.body },
                { new: true }
                )
            res.status(200).json(updatedHotel)
        } catch (err) {
            next(err)
        }
}

//DELETE
export const deleteHotel = async (req, res, next)=>{
    try {
        await Hotel.findByIdAndDelete(req.params.id)
        res.status(200).json("O Hotel foi deletado!")
    } catch (err) {
        next(err)
    }
}

//GET
export const getHotel = async (req,res)=>{
    try {
        const hotel = await Hotel.findById(req.params.id)
        res.status(200).json(hotel)
    } catch (err) {
        next(err)
    }
}

//GET ALL
export const getHotels = async (req, res, next)=>{

    try {
        const hotels = await Hotel.find();
        res.status(200).json(hotels)
    } catch (err) {
        next(err)
    }
}

//FILTER HOTELS
export const filterHotels = async (req, res, next)=>{

    const {min, max, starMin, starMax, ...others} = req.query

    try {
        const hotels = await Hotel.find({...others, price: { $gte:min, $lte: max }, stars:  { $gte:starMin, $lte: starMax }});
        res.status(200).json(hotels)
    } catch (err) {
        next(err)
    }
}

//COUNT BY CITY
export const countByCity = async (req, res, next)=>{
    const cities = req.query.cities.split(",")
    try {
        const list = await Promise.all(cities.map(city => {
            return Hotel.countDocuments({city:city})
        }))
        res.status(200).json(list)
    } catch (err) {
        next(err)
    }
}

//GET HOTEL ROOMS
export const getHotelRooms = async(req, res, next)=>{
    try {
        const hotel = await Hotel.findById(req.params.id)
        const list  = await Promise.all(hotel.rooms.map(room=>{
            return Room.findById(room)
        }));
        res.status(200).json(list)
    } catch (err) {
        next(err)
    }
}

//GET CITY NAME
export const cityName  = async (req, res, next)=>{
    try {
        const cities = await Hotel.distinct('city');        
        res.status(200).json(cities)
    
    } catch (err) {
        next(err)
    }
}