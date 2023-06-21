import User from "../models/User.js"
import bcrypt from "bcryptjs"
import { createError } from "../utils/error.js"
import jwt from "jsonwebtoken"

export const register = async (req, res, next)=>{
    try {
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(req.body.password, salt)

        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hash,
            country: req.body.country,
            city: req.body.city,
            phone: req.body.phone

        })

        await newUser.save()
        res.status(200).send("Usuário foi criado com sucesso!")

    } catch (err) {
        next(err)
    }
}

export const login = async (req, res, next)=>{
    try {
        const email = await User.findOne({email:req.body.email})
        if (!email) return next(createError(404, "Email não encontrado!"))

        const isPasswordCorrect = await bcrypt.compare(req.body.password, email.password)
        if (!isPasswordCorrect) return next(createError(400, "Senha ou Usuário incorreto!"))

        const token = jwt.sign({ id: email._id, isAdmin: email.isAdmin }, process.env.JWT)

        const{password, isAdmin, ...otherDetails} = email._doc

        res.cookie("access_token", token, {

            httpOnly: true, 
            
        }).status(200).json({...otherDetails, isAdmin})
    } catch (err) {
        next(err)
    }

}