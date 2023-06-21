import express from "express"
import { updateUser, deleteUser, getUser, getUsers, forgetPassword, changePassword } from "../controllers/user.js"
import { verifyToken, verifyUser, verifyAdmin } from "../utils/verifyToken.js"

const router = express.Router()

router.get("/checkauthentication", verifyToken,(req, res, next)=>{
    res.send("Você está logado!")
})

router.get("/checkuser/:id", verifyUser,(req, res, next)=>{
    res.send("Você está logado e pode deletar sua conta!")
})

router.get("/checkadmin/:id", verifyAdmin,(req, res, next)=>{
    res.send("Oi Administrador, você está logado e pode deletar todas as contas!")
})

//UPDATE
router.put("/:id", verifyUser, updateUser)

//DELETE
router.delete("/:id", verifyUser, deleteUser)

//GET
router.get("/:id", verifyUser, getUser)

//GET ALL
router.get("/", verifyAdmin, getUsers)

//FORGET PASSWORD
router.post('/forgetPassword', forgetPassword)

//CHANGE PASSWORD
router.post('/changePassword', changePassword);

export default router