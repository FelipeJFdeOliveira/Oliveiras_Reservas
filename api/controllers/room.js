import Room from "../models/Room.js"
import Hotel from "../models/Hotel.js"
import { createError } from "../utils/error.js"

//CREATE
export const createRoom = async (req, res, next)=>{

    const hotelId = req.params.hotelid
    const newRoom = new Room(req.body)

    try {
        const savedRoom = await newRoom.save()
        try{
            await  Hotel.findByIdAndUpdate(hotelId, {
                $push : {rooms: savedRoom._id}
            })
        }catch (err){
            next(err)
        }
        res.status(200).json(savedRoom)
    } catch (err) {
        next(err)
    }
}

//UPDATE
export const updateRoom = async (req, res, next)=>{    
        try {
            const updatedRoom = await Room.findByIdAndUpdate(
                req.params.id,
                { $set: req.body },
                { new: true }
                )
            res.status(200).json(updatedRoom)
        } catch (err) {
            next(err)
        }
}

//DELETE
export const deleteRoom = async (req, res, next)=>{
    const hotelId = req.params.hotelid
    
    try {
        await Room.findByIdAndDelete(req.params.id)
        try{
            await  Hotel.findByIdAndUpdate(hotelId, {
                $pull : {rooms: req.params.id}
            })
        }catch (err){
            next(err)
        }
        res.status(200).json("O quarto foi deletado!")
    } catch (err) {
        next(err)
    }
}

//GET
export const getRoom = async (req,res)=>{
    try {
        const room = await Room.findById(req.params.id)
        res.status(200).json(room)
    } catch (err) {
        next(err)
    }
}

//GET ALL
export const getRooms = async (req, res, next)=>{

    try {
        const rooms = await Room.find()
        res.status(200).json(rooms)
    } catch (err) {
        next(err)
    }
} 

//UPDATE ROOM AVAILABILITY
export const updateRoomAvailability = async (req, res, next) => {
    try {
      await Room.updateOne(
        { "roomNumbers._id": req.params.id },
        {
          $push: {
            "roomNumbers.$.unavailableDates": req.body.dates
          },
        }
      );
      res.status(200).json("O estado do quarto foi alterado.");
    } catch (err) {
      next(err);
    }
  };

//GET ROOM NUMBER
export const getRoomNumbers = async (req, res, next) => {
    try {

        const ids = req.params.ids.split(',');

        const rooms = await Room.find({
          'roomNumbers._id': {$in: ids}}).select(['roomNumbers.number', 'roomNumbers._id'])
    
        const roomNumbers = rooms.reduce((acc, room) => {
        const matchingNumbers = room.roomNumbers
            .filter(numberObj => ids.includes(numberObj._id.toString()))
            .map(numberObj => numberObj.number);
        return [...acc, ...matchingNumbers];
        }, []);

        res.json({ roomNumbers });
    } catch (err) {
        next(err)
        res.status(500).json({ error: 'Erro ao consultar quartos.' });
    }
  };
