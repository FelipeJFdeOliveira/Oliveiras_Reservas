import express from "express"
import { createBooking } from "../controllers/booking.js"
import { verifyUser } from "../utils/verifyToken.js"

const router = express.Router()

//CREATE
router.post("/", verifyUser, createBooking)



export default router