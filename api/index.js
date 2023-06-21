import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import authRoute from "./routes/auth.js"
import hotelsRoute from "./routes/hotels.js"
import roomsRoute from "./routes/rooms.js"
import usersRoute from "./routes/users.js"
import bookingsRoute from "./routes/bookings.js"
import cookieParser from "cookie-parser"
import cors from 'cors'
import cookieSession from "cookie-session"
import passportSetup from "./controllers/passport.js"
import passport from "passport"
import bodyParser from 'body-parser'

const app = express()

dotenv.config()

const connect = async () => {
  try {
    mongoose.connect(process.env.MONGO)
    console.log("MongoDB está conectado!")
  } catch (error) {
    throw error
  }
}

mongoose.connection.on("disconnect", () => {
  console.log("MongoDB está desconectado!")
})

app.use(bodyParser.json({ limit: '20mb' }));
app.use(bodyParser.urlencoded({ limit: '20mb', extended: true }));

//middlewares
app.use(
  cookieSession({ name: "session", keys: [process.env.COOKIE_SESSION_KEY], maxAge: 24 * 60 * 60 * 100 })
)

app.use(cookieParser())
app.use(express.json())

app.use(
  cors({
    origin:  '*' ,
    methods: "GET,POST,PUT,DELETE",
    credentials: true
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use("/api/auth", authRoute)
app.use("/api/hotels", hotelsRoute)
app.use("/api/rooms", roomsRoute)
app.use("/api/users", usersRoute)
app.use("/api/booking", bookingsRoute)

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500
  const errorMessage = err.message || "Algo deu errado!"
  return res.status(errorStatus).json({
    sucess: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack
  })
})

app.listen(8800, () => {
  connect()
  console.log("Backend está conectado!")
})