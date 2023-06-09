import express from "express"
import Room from "../models/Room.js"
import { createError } from "../utils/error.js"
import { createRoom, updateRoom, deleteRoom, getRoom, getRooms, updateRoomAvailability, getRoomNumbers } from "../controllers/room.js"
import { verifyAdmin } from "../utils/verifyToken.js"

const router = express.Router()

//CREATE
router.post("/:hotelid", verifyAdmin, createRoom)

//UPDATE
router.put("/:id", verifyAdmin, updateRoom)

//DELETE
router.delete("/:id/:hotelid", verifyAdmin, deleteRoom)

//GET
router.get("/:id", getRoom)

//GET ALL
router.get("/", getRooms)

//UPDATE ROOM AVAILABILITY
router.put("/availability/:id", updateRoomAvailability)

//GET ROOM NUMBERS
router.get("/numbers/:ids", getRoomNumbers)

export default router