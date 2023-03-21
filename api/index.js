import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose" 
import authRoute from "./routes/auth.js" 
import carsRoute from "./routes/cars.js" 
import casasRoute from "./routes/casas.js" 
import hotelsRoute from "./routes/hotels.js" 
import motosRoute from "./routes/motos.js" 
import roomsRoute from "./routes/rooms.js" 
import restaurantsRoute from "./routes/restaurants.js" 
import usersRoute from "./routes/users.js"
import cookieParser from "cookie-parser"
import cors from 'cors'

const app = express()

dotenv.config()

const connect = async ()=>{
    try {
        await mongoose.connect(process.env.MONGO)
        console.log("MongoDB está conectado!")
      } catch (error) {
        throw error
      }
}

mongoose.connection.on("disconnect",()=>{
    console.log("MongoDB está desconectado!")
})

//middlewares
app.use(cookieParser())
app.use(express.json())
app.use(cors({ origin: '*' }))

app.use("/api/auth", authRoute)
app.use("/api/cars", carsRoute)
app.use("/api/casas", casasRoute)
app.use("/api/hotels", hotelsRoute)
app.use("/api/motos", motosRoute)
app.use("/api/rooms", roomsRoute)
app.use("/api/restaurants", restaurantsRoute)
app.use("/api/users", usersRoute)

app.use((err, req, res, next) =>{
  const errorStatus = err.status || 500
  const errorMessage = err.message || "Algo deu errado!"
  return res.status(errorStatus).json({
    sucess : false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack 
  })
})

app.listen(8800, ()=>{
    connect()
    console.log("Backend está conectado!")
})