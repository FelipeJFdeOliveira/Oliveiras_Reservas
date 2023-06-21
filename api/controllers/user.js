import User from "../models/User.js"
import jwt from "jsonwebtoken"
import nodemailer from "nodemailer"
import dotenv from "dotenv"
import bcrypt from "bcryptjs"

dotenv.config()

//UPDATE
export const updateUser = async (req, res, next) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        )
        res.status(200).json(updatedUser)
    } catch (err) {
        next(err)
    }
}

//DELETE
export const deleteUser = async (req, res, next) => {
    try {
        await User.findByIdAndDelete(req.params.id)
        res.status(200).json("O usuário foi deletado!")
    } catch (err) {
        next(err)
    }
}

//GET
export const getUser = async (req, res, next) => {
    try {
        const user = await User.findById(req.params.id)
        res.status(200).json(user)
    } catch (err) {
        next(err)
    }
}

//GET ALL
export const getUsers = async (req, res, next) => {

    try {
        const users = await User.find()
        res.status(200).json(users)
    } catch (err) {
        next(err)
    }
}

//FORGET PASSWORD
export const forgetPassword = async (req, res) => {

    const { email } = req.body;

    function gerarTokenRedefinicao() {
        const token = jwt.sign({}, 'chave_secreta', { expiresIn: '1h' });
        return token;
    }

    async function enviarEmailRedefinicaoSenha(destinatario, token) {

        const transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: process.env.EMAIL_ADMIN,
                pass: process.env.PASSWORD_ADMIN,
            },
        });

        const mailOptions = {
            from: process.env.EMAIL_ADMIN,
            to: destinatario,
            subject: 'Redefinição de senha',
            text: `Você solicitou uma redefinição de senha. Clique no link a seguir para redefinir sua senha: http://localhost:3000/redefinir-senha?token=${token}&email=${email}`,
        };

        await transporter.sendMail(mailOptions);
    }

    const usuario = await User.findOne({ email, tokenRedefinicao: null });

    if (!usuario) {
        return res.status(404).json({ mensagem: 'Usuário não encontrado.' });
    }

    const tokenRedefinicao = gerarTokenRedefinicao();
    usuario.tokenRedefinicao = tokenRedefinicao;

    //await usuario.save();

    await enviarEmailRedefinicaoSenha(email, tokenRedefinicao);

    res.json({ mensagem: 'Um e-mail com instruções para redefinir sua senha foi enviado.' });
}

// CHANGE PASSWORD
export const changePassword = async (req, res) => {

    const salt = bcrypt.genSaltSync(10)
    const hash = bcrypt.hashSync(req.body.newPassword, salt)

    const token = req.query.token;
    const newPassword = hash
    const email = req.body.email

    try {
        const usuario = await User.findOneAndUpdate(
            { email: email, tokenRedefinicao: token },
            { password: newPassword, tokenRedefinicao: null },
            { new: true }
        );

        if (!usuario) {
            return res.status(400).json({
                mensagem:
                    "Token inválido ou expirado. Por favor, solicite novamente a redefinição de senha.",
            });
        }

        res.status(200).json({ mensagem: "Senha redefinida com sucesso!" });
    } catch (err) {
        console.log(err);
        res.status(500).json({ mensagem: "Erro ao redefinir a senha." });
    }
};