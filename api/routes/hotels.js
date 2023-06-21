import express from "express"
import { createHotel, updateHotel, deleteHotel, getHotel, getHotels, countByCity, filterHotels, getHotelRooms, cityName } from "../controllers/hotel.js"
import { verifyAdmin } from "../utils/verifyToken.js"

const router = express.Router()

//CREATE
router.post("/", verifyAdmin, createHotel)

//UPDATE
router.put("/:id", verifyAdmin, updateHotel)

//DELETE
router.delete("/:id", verifyAdmin, deleteHotel)

//GET
router.get("/find/:id", getHotel)

//GET ALL
router.get("/", getHotels)

//FILTER HOTELS
router.get("/filterHotels", filterHotels)

//COUNT BY CITY
router.get("/countByCity", countByCity)

//GET HOTEL ROOMS
router.get("/room/:id", getHotelRooms)

//GET CITY NAME
router.get("/cityName", cityName)

export default router